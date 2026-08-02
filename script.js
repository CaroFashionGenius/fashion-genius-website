const header = document.querySelector('[data-header]');
const mobileToggle = document.querySelector('[data-mobile-toggle]');
const mobileNav = document.querySelector('[data-mobile-nav]');
const megaTrigger = document.querySelector('[data-mega-trigger]');
const navItem = megaTrigger?.closest('.nav-item');

const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 30);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

mobileToggle?.addEventListener('click', () => {
  const open = mobileNav?.classList.toggle('open');
  mobileToggle.setAttribute('aria-expanded', String(Boolean(open)));
  mobileToggle.textContent = open ? '×' : '☰';
});

mobileNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    mobileToggle?.setAttribute('aria-expanded', 'false');
    if (mobileToggle) mobileToggle.textContent = '☰';
  });
});

megaTrigger?.addEventListener('click', () => {
  const open = navItem?.classList.toggle('open');
  megaTrigger.setAttribute('aria-expanded', String(Boolean(open)));
});
navItem?.addEventListener('mouseenter', () => navItem.classList.add('open'));
navItem?.addEventListener('mouseleave', () => navItem.classList.remove('open'));

document.addEventListener('click', (event) => {
  if (navItem && !navItem.contains(event.target)) {
    navItem.classList.remove('open');
    megaTrigger?.setAttribute('aria-expanded', 'false');
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

// Digital concierge: professional FAQ shell + configurable scheduling / escalation.
const chatLaunch = document.querySelector('[data-chat-launch]');
const chatPanel = document.querySelector('[data-chat-panel]');
const chatClose = document.querySelector('[data-chat-close]');
const chatMessages = document.querySelector('[data-chat-messages]');
const chatForm = document.querySelector('[data-chat-form]');
const chatInput = chatForm?.querySelector('input');

const CONCIERGE_CONFIG = {
  // Replace with Caroline's Google Appointment Schedule or Calendly URL.
  bookingUrl: '',
  founderEmail: 'caroline.steiger@fashion-genius.com'
};

const answers = [
  {
    match: ['creator studio', 'creator', 'content'],
    text: 'Creator Studio is the live self-service product for affiliate, UGC and commerce creators. It combines AI image generation, virtual try-on, model and garment libraries, collections, results, credits, subscriptions and billing in one professional workspace.'
  },
  {
    match: ['credit', 'credits', 'ai credit'],
    text: 'AI Credits are the flexible usage unit for generation events. Plans include a monthly credit allocation. The exact credit consumption can vary by AI model or generation type, allowing Fashion Genius to support future image and video capabilities without changing the plan architecture.'
  },
  {
    match: ['retail', 'retailer', 'brand', 'enterprise'],
    text: 'The Retail Platform is the enterprise path for fashion brands and retailers. It is designed around AI commerce, product discovery, personalisation, catalogue integration and commercial intelligence. Engagements begin with a focused enterprise conversation or pilot.'
  },
  {
    match: ['analytics', 'business intelligence', 'dashboard'],
    text: 'Fashion Genius provides visibility into creator activity, subscriptions, credits, files, collections, try-on usage, payment events, revenue and churn. The goal is decision-ready intelligence rather than disconnected reporting.'
  },
  {
    match: ['crm', 'agent', 'ai agent', 'revenue'],
    text: 'The intelligence layer supports AI-assisted discovery, qualification, routing, CRM workflows and commercial next actions. The public experience focuses on outcomes; internal orchestration and scoring logic remain protected.'
  },
  {
    match: ['price', 'pricing', 'plan', 'plans'],
    text: 'Creator Studio offers Free (€0 / 20 credits), Creator (€19 / 250 credits), Pro (€49 / 1,000 credits), Studio (€99 / 2,500 credits) and tailored Enterprise plans. The public pricing and full plan comparison are available in the Pricing section.'
  }
];

function addMessage(text, type = 'bot', allowHtml = false) {
  if (!chatMessages) return;
  const message = document.createElement('div');
  message.className = `chat-message ${type}`;
  if (allowHtml) message.innerHTML = text;
  else message.textContent = text;
  chatMessages.appendChild(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function bookingResponse() {
  if (CONCIERGE_CONFIG.bookingUrl) {
    addMessage(`You can choose a suitable time directly here: <a href="${CONCIERGE_CONFIG.bookingUrl}" target="_blank" rel="noopener">Book a meeting with Caroline ↗</a>`, 'bot', true);
  } else {
    const subject = encodeURIComponent('Meeting request via Fashion Genius Concierge');
    addMessage(`The direct booking calendar is being connected. For now, send Caroline a meeting request: <a href="mailto:${CONCIERGE_CONFIG.founderEmail}?subject=${subject}">Request a meeting ↗</a>`, 'bot', true);
  }
}

function escalateResponse(question) {
  const subject = encodeURIComponent('Priority website question for Caroline');
  const body = encodeURIComponent(`Hello Caroline,\n\nI have an important question from the Fashion Genius website:\n\n${question}\n\nName / Company:\nPreferred contact method:\n`);
  addMessage(`This question is best handled personally. You can request a founder response here: <a href="mailto:${CONCIERGE_CONFIG.founderEmail}?subject=${subject}&body=${body}">Escalate to Caroline ↗</a>`, 'bot', true);
}

function respondTo(rawQuestion) {
  const question = rawQuestion.trim();
  if (!question) return;
  addMessage(question, 'user');
  const lower = question.toLowerCase();

  if (['book', 'meeting', 'appointment', 'termin', 'calendar', 'call'].some((term) => lower.includes(term))) {
    window.setTimeout(bookingResponse, 250);
    return;
  }

  const answer = answers.find((entry) => entry.match.some((term) => lower.includes(term)));
  if (answer) {
    window.setTimeout(() => addMessage(answer.text), 250);
    return;
  }

  window.setTimeout(() => {
    addMessage('I can answer standard questions about Creator Studio, AI credits, the Retail Platform, analytics, CRM and enterprise pilots. Your question appears more specific, so I can escalate it to Caroline.', 'bot');
    escalateResponse(question);
  }, 250);
}

function setChatOpen(open) {
  chatPanel?.classList.toggle('open', open);
  chatPanel?.setAttribute('aria-hidden', String(!open));
  if (open) window.setTimeout(() => chatInput?.focus(), 100);
}

chatLaunch?.addEventListener('click', () => setChatOpen(!chatPanel?.classList.contains('open')));
chatClose?.addEventListener('click', () => setChatOpen(false));
chatPanel?.querySelectorAll('[data-chat-question]').forEach((button) => {
  button.addEventListener('click', () => respondTo(button.dataset.chatQuestion || ''));
});
chatForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = chatInput?.value || '';
  if (chatInput) chatInput.value = '';
  respondTo(message);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setChatOpen(false);
});


// Sprint 3: plan comparison, ROI calculator and question accordion.
const comparisonToggle = document.querySelector('[data-comparison-toggle]');
const comparisonPanel = document.querySelector('[data-comparison-panel]');
comparisonToggle?.addEventListener('click', () => {
  const expanded = comparisonPanel?.classList.toggle('expanded');
  comparisonToggle.setAttribute('aria-expanded', String(Boolean(expanded)));
  comparisonToggle.innerHTML = expanded ? 'Collapse comparison <span>−</span>' : 'View full comparison <span>＋</span>';
});

const euro = new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });
const integer = new Intl.NumberFormat('en-IE');
const calculator = document.querySelector('[data-roi-calculator]');
if (calculator) {
  const campaigns = calculator.querySelector('[data-campaigns]');
  const cost = calculator.querySelector('[data-cost]');
  const generations = calculator.querySelector('[data-generations]');
  const plans = [
    { name: 'Free', credits: 20, price: 0 },
    { name: 'Creator', credits: 250, price: 19 },
    { name: 'Pro', credits: 1000, price: 49 },
    { name: 'Studio', credits: 2500, price: 99 },
    { name: 'Enterprise', credits: Infinity, price: null }
  ];
  const updateCalculator = () => {
    const campaignCount = Number(campaigns.value);
    const costPerCampaign = Number(cost.value);
    const generationsPerCampaign = Number(generations.value);
    const credits = campaignCount * generationsPerCampaign;
    const plan = plans.find((item) => credits <= item.credits) || plans.at(-1);
    const traditionalBudget = campaignCount * costPerCampaign;
    const planPrice = plan.price;
    calculator.querySelector('[data-campaign-output]').textContent = integer.format(campaignCount);
    calculator.querySelector('[data-cost-output]').textContent = euro.format(costPerCampaign);
    calculator.querySelector('[data-generation-output]').textContent = integer.format(generationsPerCampaign);
    calculator.querySelector('[data-plan-name]').textContent = plan.name;
    calculator.querySelector('[data-plan-reason]').textContent = planPrice === null ? 'Tailored AI credits · custom commercial terms' : `${integer.format(plan.credits)} AI credits · ${euro.format(planPrice)} / month`;
    calculator.querySelector('[data-credit-total]').textContent = integer.format(credits);
    calculator.querySelector('[data-traditional-total]').textContent = euro.format(traditionalBudget);
    calculator.querySelector('[data-plan-price]').textContent = planPrice === null ? 'Custom' : euro.format(planPrice);
    calculator.querySelector('[data-savings]').textContent = planPrice === null ? 'Discuss scope' : euro.format(Math.max(0, traditionalBudget - planPrice));
  };
  [campaigns, cost, generations].forEach((input) => input.addEventListener('input', updateCalculator));
  updateCalculator();
}

document.querySelectorAll('.accordion-item button').forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.closest('.accordion-item');
    const open = item.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
  });
});
