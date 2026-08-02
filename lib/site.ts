export const SITE = {
  name: "Fashion Genius",
  url: "https://fashion-genius.com",
  creatorStudioUrl: "https://creatorstudio.fashion-genius.com",
  founderEmail: process.env.NEXT_PUBLIC_FOUNDER_EMAIL || "caroline.steiger@fashion-genius.com",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || "",
  conciergeWebhookUrl: process.env.NEXT_PUBLIC_CONCIERGE_WEBHOOK_URL || "",
} as const;

export const plans = [
  { name: "Free", price: "€0", credits: "20", watermark: "Yes", collections: "2", uploads: "20/month", processing: "Standard", history: "Basic", export: "Standard", analytics: "No", support: "Community", earlyAccess: "No", integrations: "No", commercialRights: "Limited", seats: "1" },
  { name: "Creator", price: "€19", credits: "250", watermark: "No", collections: "25", uploads: "Unlimited", processing: "Fast", history: "Full", export: "HD", analytics: "Basic", support: "Priority", earlyAccess: "No", integrations: "No", commercialRights: "Included", seats: "1" },
  { name: "Pro", price: "€49", credits: "1,000", watermark: "No", collections: "Unlimited", uploads: "Unlimited", processing: "Priority", history: "Advanced", export: "4K", analytics: "Advanced", support: "Priority+", earlyAccess: "Yes", integrations: "Limited", commercialRights: "Included", seats: "3" },
  { name: "Studio", price: "€99", credits: "2,500", watermark: "No", collections: "Unlimited", uploads: "Unlimited", processing: "Highest", history: "Advanced + Insights", export: "Premium", analytics: "Advanced", support: "Priority+", earlyAccess: "Yes", integrations: "Limited", commercialRights: "Included", seats: "10" },
  { name: "Enterprise", price: "Custom", credits: "Custom", watermark: "No", collections: "Unlimited", uploads: "Unlimited", processing: "Dedicated", history: "Full + API", export: "Custom", analytics: "Full + API", support: "Dedicated", earlyAccess: "Custom", integrations: "Full API", commercialRights: "Custom", seats: "Custom" },
] as const;
