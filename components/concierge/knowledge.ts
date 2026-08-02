export type ConciergeAudience = "creator" | "retail" | "investor" | "partner" | "general";

export type ConciergeAction =
  | { label: string; href: string; kind?: "primary" | "secondary" }
  | { label: string; action: "meeting" | "handoff" | "creator" | "retail"; kind?: "primary" | "secondary" };

export type ConciergeAnswer = {
  title: string;
  body: string;
  actions?: ConciergeAction[];
  intent: string;
  priority?: "standard" | "qualified" | "high";
};

const answer = (
  title: string,
  body: string,
  intent: string,
  actions?: ConciergeAction[],
  priority: ConciergeAnswer["priority"] = "standard",
): ConciergeAnswer => ({ title, body, intent, actions, priority });

export function answerConciergeQuestion(rawQuestion: string, audience: ConciergeAudience): ConciergeAnswer {
  const question = rawQuestion.toLowerCase().trim();

  if (/\b(meeting|appointment|calendar|book|call|demo|talk|speak)\b/.test(question)) {
    return answer(
      "Let’s arrange the right conversation.",
      "I can open Caroline’s booking flow for a founder, partnership or enterprise discussion. For product onboarding, I can also guide you directly to Creator Studio.",
      "meeting",
      [
        { label: "Book a meeting", action: "meeting", kind: "primary" },
        { label: "Request founder handoff", action: "handoff" },
      ],
      "high",
    );
  }

  if (/\b(human|caroline|founder|urgent|exception|live chat|person|escalate)\b/.test(question)) {
    return answer(
      "Founder handoff is available for qualified enquiries.",
      "Share your contact details and the context of your request. Strategic enterprise, investor, partnership and sensitive product questions can be escalated directly to Caroline. The concierge does not claim that she is continuously online.",
      "founder_handoff",
      [{ label: "Request founder handoff", action: "handoff", kind: "primary" }],
      "high",
    );
  }

  if (/\b(price|pricing|plan|subscription|monthly|cost|free|creator plan|pro|studio plan|enterprise plan)\b/.test(question)) {
    return answer(
      "Creator Studio uses five subscription tiers.",
      "The current structure is Free (€0 / 20 credits), Creator (€19 / 250 credits), Pro (€49 / 1,000 credits), Studio (€99 / 2,500 credits) and Enterprise with tailored capacity and terms. The plans differ across processing priority, export quality, analytics, integrations, support, collections and team seats.",
      "creator_pricing",
      [
        { label: "View Creator Studio plans", href: "/creator-studio/#pricing", kind: "primary" },
        { label: "Open Creator Studio", href: "https://creatorstudio.fashion-genius.com" },
      ],
      audience === "creator" ? "qualified" : "standard",
    );
  }

  if (/\b(credit|credits|generation|usage|quota|watermark|model cost)\b/.test(question)) {
    return answer(
      "Credits keep AI production flexible.",
      "Credits are the billable unit for AI generation. Consumption can vary by AI model and generation type, allowing Fashion Genius to support different infrastructure costs and future image or video capabilities without hard-coded try-on limits.",
      "credits",
      [{ label: "Compare plans", href: "/creator-studio/#comparison", kind: "primary" }],
    );
  }

  if (/\b(commercial|copyright|ownership|rights|license|export|gdpr|privacy|data)\b/.test(question)) {
    return answer(
      "Commercial and data rights are part of the product model.",
      "Paid Creator Studio plans include commercial usage rights. Exported assets remain user-owned, while source asset consent, creator reference consent, terms acceptance, copyright disclaimers and GDPR-compliant storage are built into the operating requirements. Final legal use always remains subject to the applicable terms and source rights.",
      "rights_and_privacy",
      [
        { label: "View plans", href: "/creator-studio/#pricing", kind: "primary" },
        { label: "Ask a specific rights question", action: "handoff" },
      ],
    );
  }

  if (/\b(creator studio|creator|influencer|ugc|affiliate|fashion content|photoshoot|virtual try-on|model library|garment)\b/.test(question)) {
    return answer(
      "Creator Studio is the live self-service product.",
      "It is built for affiliate, UGC and commerce creators who need to produce more shoppable fashion content without physical samples, traditional photoshoots or manual editing. The current product includes image generation, model and garment libraries, collections, results, subscriptions, credits, billing, usage tracking and business intelligence.",
      "creator_studio",
      [
        { label: "Explore Creator Studio", href: "/creator-studio/", kind: "primary" },
        { label: "Launch the product", href: "https://creatorstudio.fashion-genius.com" },
      ],
      audience === "creator" ? "qualified" : "standard",
    );
  }

  if (/\b(retail|retailer|brand|commerce|omnichannel|shopper|conversion|returns|catalog|pilot|enterprise architecture)\b/.test(question)) {
    return answer(
      "The Retail Platform is a tailored enterprise engagement.",
      "It connects shopper, product, content and revenue intelligence around the retailer’s existing commerce stack. The commercial path is consultative: align the use case, connect the relevant data and workflows, validate business impact in a pilot, then scale. Retail pricing is not the same as Creator Studio subscription pricing.",
      "retail_platform",
      [
        { label: "Explore Retail Platform", href: "/retail-platform/", kind: "primary" },
        { label: "Discuss a retail pilot", action: "handoff" },
      ],
      "high",
    );
  }

  if (/\b(ai agent|agent|automation|n8n|crm|hubspot|routing|lead|revenue agent|outreach)\b/.test(question)) {
    return answer(
      "The intelligence layer connects insight with action.",
      "Fashion Genius combines AI-assisted qualification, workflow orchestration, CRM routing, analytics and next-action logic. Publicly, the platform communicates the business outcome—not the internal prompt chains, scoring rules or orchestration architecture. Qualified implementation questions can be escalated privately.",
      "intelligence_operations",
      [
        { label: "Discuss an integration", action: "handoff", kind: "primary" },
        { label: "View Retail Platform", href: "/retail-platform/" },
      ],
      audience === "retail" || audience === "partner" ? "high" : "qualified",
    );
  }

  if (/\b(analytics|dashboard|business intelligence|revenue|churn|event tracking|usage|subscription analytics)\b/.test(question)) {
    return answer(
      "Business Intelligence is already part of the platform foundation.",
      "The current operating layer includes creator activity, subscription, credit and usage visibility, event tracking, payment events, revenue and churn monitoring, files, collections and try-on analytics. The purpose is to turn platform activity into clear operational decisions.",
      "business_intelligence",
      [
        { label: "Explore the platform", href: "/#intelligence", kind: "primary" },
        { label: "Discuss enterprise analytics", action: "handoff" },
      ],
      "qualified",
    );
  }

  if (/\b(invest|investor|funding|business model|revenue engine|market|strategy|vision)\b/.test(question)) {
    return answer(
      "Fashion Genius is designed as one platform with multiple revenue engines.",
      "Creator Studio is the self-service subscription product. The Retail Platform follows an enterprise GTM model. The broader business model can add affiliate and commerce participation as the creator-to-retail connection develops. Detailed investor materials are shared in a qualified conversation.",
      "investor",
      [
        { label: "Request an investor conversation", action: "handoff", kind: "primary" },
        { label: "Read the platform story", href: "/#platform" },
      ],
      "high",
    );
  }

  if (/\b(partner|partnership|integration|api|technology partner|agency)\b/.test(question)) {
    return answer(
      "Partnerships are evaluated around measurable platform value.",
      "Relevant opportunities include technology integration, retail pilots, creator acquisition, data and commerce workflows, industry networks and strategic distribution. Share the intended contribution and target outcome so the request can be routed correctly.",
      "partnership",
      [{ label: "Submit a partnership enquiry", action: "handoff", kind: "primary" }],
      "high",
    );
  }

  return answer(
    "I can help you navigate Fashion Genius.",
    "Ask about Creator Studio, plans and credits, the Retail Platform, enterprise pilots, analytics, CRM and AI agents, partnerships, investor conversations or booking a meeting. For questions outside the verified knowledge base, I will offer a human handoff instead of inventing an answer.",
    "general",
    [
      { label: "Creator Studio", action: "creator", kind: "primary" },
      { label: "Retail Platform", action: "retail" },
      { label: "Book a meeting", action: "meeting" },
    ],
  );
}
