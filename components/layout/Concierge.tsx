"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SITE } from "@/lib/site";
import {
  answerConciergeQuestion,
  type ConciergeAction,
  type ConciergeAudience,
} from "@/components/concierge/knowledge";

type ChatMessage = {
  id: string;
  role: "assistant" | "user" | "system";
  title?: string;
  body: string;
  actions?: ConciergeAction[];
};

type HandoffForm = {
  name: string;
  email: string;
  company: string;
  topic: string;
  message: string;
  consent: boolean;
};

const initialMessage: ChatMessage = {
  id: "welcome",
  role: "assistant",
  title: "Welcome to Fashion Genius.",
  body: "I’m the digital concierge. I can answer verified product questions, recommend the right path, arrange a meeting and escalate qualified enquiries to Caroline.",
  actions: [
    { label: "I’m a creator", action: "creator", kind: "primary" },
    { label: "I represent a retailer", action: "retail" },
    { label: "Book a meeting", action: "meeting" },
  ],
};

const quickPrompts = [
  "What is Creator Studio?",
  "Compare the plans",
  "How do credits work?",
  "Explain the Retail Platform",
];

function makeId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function dispatchConciergeEvent(name: string, detail: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("fg:concierge", { detail: { name, ...detail } }));
}

export function Concierge() {
  const [open, setOpen] = useState(false);
  const [audience, setAudience] = useState<ConciergeAudience>("general");
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<"chat" | "handoff">("chat");
  const [sending, setSending] = useState(false);
  const [handoffStatus, setHandoffStatus] = useState<"idle" | "sent" | "fallback">("idle");
  const [form, setForm] = useState<HandoffForm>({
    name: "",
    email: "",
    company: "",
    topic: "Strategic enquiry",
    message: "",
    consent: false,
  });
  const scrollRef = useRef<HTMLDivElement>(null);

  const sessionId = useMemo(makeId, []);

  useEffect(() => {
    if (!open) return;
    dispatchConciergeEvent("opened", { path: window.location.pathname, sessionId });
  }, [open, sessionId]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, mode, handoffStatus]);

  function append(message: Omit<ChatMessage, "id">) {
    setMessages((current) => [...current, { id: makeId(), ...message }]);
  }

  function sendQuestion(question = input) {
    const clean = question.trim();
    if (!clean) return;
    append({ role: "user", body: clean });
    const response = answerConciergeQuestion(clean, audience);
    append({
      role: "assistant",
      title: response.title,
      body: response.body,
      actions: response.actions,
    });
    dispatchConciergeEvent("question_answered", {
      intent: response.intent,
      priority: response.priority,
      audience,
      sessionId,
    });
    setInput("");
  }

  function selectAudience(nextAudience: ConciergeAudience) {
    setAudience(nextAudience);
    const labels: Record<ConciergeAudience, string> = {
      creator: "Creator",
      retail: "Retail / Brand",
      investor: "Investor",
      partner: "Partner",
      general: "General",
    };
    append({
      role: "system",
      body: `Conversation context set to: ${labels[nextAudience]}.`,
    });
    dispatchConciergeEvent("audience_selected", { audience: nextAudience, sessionId });
  }

  function openMeeting() {
    dispatchConciergeEvent("meeting_requested", { audience, sessionId });
    if (SITE.bookingUrl) {
      window.open(SITE.bookingUrl, "_blank", "noopener,noreferrer");
      return;
    }
    setMode("handoff");
    setForm((current) => ({ ...current, topic: "Meeting request" }));
  }

  function openHandoff(prefill?: string) {
    setMode("handoff");
    setHandoffStatus("idle");
    setForm((current) => ({
      ...current,
      message: prefill || current.message || messages.filter((message) => message.role === "user").at(-1)?.body || "",
    }));
    dispatchConciergeEvent("handoff_opened", { audience, sessionId });
  }

  function handleAction(action: ConciergeAction) {
    if ("href" in action) {
      if (action.href.startsWith("http")) window.open(action.href, "_blank", "noopener,noreferrer");
      else window.location.href = action.href;
      return;
    }
    if (action.action === "meeting") openMeeting();
    if (action.action === "handoff") openHandoff();
    if (action.action === "creator") {
      selectAudience("creator");
      sendQuestion("What is Creator Studio?");
    }
    if (action.action === "retail") {
      selectAudience("retail");
      sendQuestion("Explain the Retail Platform");
    }
  }

  async function submitHandoff(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim() || !form.consent) return;
    setSending(true);

    const transcript = messages.map((message) => `${message.role}: ${message.title ? `${message.title} ` : ""}${message.body}`);
    const payload = {
      source: "fashion-genius-concierge",
      sessionId,
      submittedAt: new Date().toISOString(),
      page: typeof window !== "undefined" ? window.location.href : SITE.url,
      audience,
      contact: {
        name: form.name.trim(),
        email: form.email.trim(),
        company: form.company.trim(),
      },
      topic: form.topic,
      message: form.message.trim(),
      transcript,
      routingHint:
        audience === "retail" ? "enterprise_retail" : audience === "investor" ? "investor" : audience === "partner" ? "partnership" : "creator_or_general",
    };

    try {
      if (!SITE.conciergeWebhookUrl) throw new Error("No webhook configured");
      const response = await fetch(SITE.conciergeWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error(`Webhook returned ${response.status}`);
      setHandoffStatus("sent");
      dispatchConciergeEvent("handoff_submitted", { audience, topic: form.topic, sessionId });
    } catch {
      setHandoffStatus("fallback");
      dispatchConciergeEvent("handoff_fallback", { audience, topic: form.topic, sessionId });
    } finally {
      setSending(false);
    }
  }

  const emailFallback = `mailto:${SITE.founderEmail}?subject=${encodeURIComponent(`Fashion Genius — ${form.topic}`)}&body=${encodeURIComponent(
    `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nAudience: ${audience}\n\n${form.message}`,
  )}`;

  return (
    <>
      <motion.button
        className="chat-launcher"
        aria-label="Open Fashion Genius Concierge"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
      >
        <span className="chat-launcher-glyph">✦</span>
        <span className="chat-launcher-label">Concierge</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.aside
            className="concierge"
            role="dialog"
            aria-modal="true"
            aria-label="Fashion Genius Digital Concierge"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <header className="concierge-header">
              <div className="concierge-brand-block">
                <span className="concierge-symbol">FG</span>
                <div>
                  <small>FASHION GENIUS</small>
                  <strong>Digital Concierge</strong>
                  <span className="concierge-status"><i /> AI online · founder handoff available</span>
                </div>
              </div>
              <button className="concierge-close" onClick={() => setOpen(false)} aria-label="Close concierge">×</button>
            </header>

            <div className="concierge-context" aria-label="Choose conversation context">
              {([
                ["creator", "Creator"],
                ["retail", "Retail"],
                ["investor", "Investor"],
                ["partner", "Partner"],
              ] as const).map(([value, label]) => (
                <button key={value} className={audience === value ? "is-active" : ""} onClick={() => selectAudience(value)}>{label}</button>
              ))}
            </div>

            <div className="concierge-scroll" ref={scrollRef}>
              {mode === "chat" ? (
                <>
                  <div className="concierge-messages" aria-live="polite">
                    {messages.map((message) => (
                      <article key={message.id} className={`concierge-message concierge-message-${message.role}`}>
                        {message.role === "assistant" && <span className="message-avatar">✦</span>}
                        <div>
                          {message.title && <strong>{message.title}</strong>}
                          <p>{message.body}</p>
                          {message.actions && (
                            <div className="message-actions">
                              {message.actions.map((action) => (
                                <button
                                  key={action.label}
                                  className={action.kind === "primary" ? "is-primary" : ""}
                                  onClick={() => handleAction(action)}
                                >
                                  {action.label}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </article>
                    ))}
                  </div>

                  {messages.length < 4 && (
                    <div className="concierge-prompts">
                      <small>COMMON QUESTIONS</small>
                      {quickPrompts.map((prompt) => <button key={prompt} onClick={() => sendQuestion(prompt)}>{prompt}<span>↗</span></button>)}
                    </div>
                  )}
                </>
              ) : (
                <div className="concierge-handoff">
                  <button className="handoff-back" onClick={() => setMode("chat")}>← Back to concierge</button>
                  <div className="handoff-heading">
                    <small>QUALIFIED HUMAN HANDOFF</small>
                    <h3>Continue with Caroline.</h3>
                    <p>Use this for enterprise, investor, partnership, sensitive product or exceptional strategic questions.</p>
                  </div>

                  {handoffStatus === "sent" ? (
                    <div className="handoff-success">
                      <span>✓</span>
                      <h4>Request received.</h4>
                      <p>Your enquiry has been routed with the conversation context. Caroline or the appropriate Fashion Genius contact can follow up directly.</p>
                      <button onClick={() => { setMode("chat"); setHandoffStatus("idle"); }}>Return to concierge</button>
                    </div>
                  ) : (
                    <form onSubmit={submitHandoff}>
                      <div className="handoff-row">
                        <label>Name<input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} /></label>
                        <label>Business email<input required type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} /></label>
                      </div>
                      <label>Company / organisation<input value={form.company} onChange={(event) => setForm({ ...form, company: event.target.value })} /></label>
                      <label>Reason for contact
                        <select value={form.topic} onChange={(event) => setForm({ ...form, topic: event.target.value })}>
                          <option>Strategic enquiry</option>
                          <option>Meeting request</option>
                          <option>Creator Studio</option>
                          <option>Retail Platform pilot</option>
                          <option>Investor discussion</option>
                          <option>Partnership / integration</option>
                          <option>Legal / rights question</option>
                        </select>
                      </label>
                      <label>Context<textarea required rows={4} value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder="What would you like Caroline or the team to know?" /></label>
                      <label className="handoff-consent"><input type="checkbox" checked={form.consent} onChange={(event) => setForm({ ...form, consent: event.target.checked })} /><span>I agree that Fashion Genius may use these details to respond to this enquiry.</span></label>
                      <button className="handoff-submit" disabled={sending || !form.consent}>{sending ? "Routing enquiry…" : "Send qualified enquiry"}</button>
                      {handoffStatus === "fallback" && (
                        <div className="handoff-fallback">
                          <p>The secure routing endpoint is not configured yet. Continue by email without losing your message.</p>
                          <a href={emailFallback}>Open prepared email →</a>
                        </div>
                      )}
                    </form>
                  )}
                </div>
              )}
            </div>

            {mode === "chat" && (
              <div className="concierge-composer">
                <div className="concierge-input">
                  <textarea
                    rows={1}
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" && !event.shiftKey) {
                        event.preventDefault();
                        sendQuestion();
                      }
                    }}
                    placeholder="Ask about products, plans, retail or a meeting…"
                    aria-label="Ask the Fashion Genius Concierge"
                  />
                  <button onClick={() => sendQuestion()} disabled={!input.trim()} aria-label="Send question">↑</button>
                </div>
                <div className="concierge-footer-row">
                  <span>Verified Fashion Genius knowledge</span>
                  <button onClick={() => openHandoff(input)}>Human handoff</button>
                </div>
              </div>
            )}
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
