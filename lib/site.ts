export const SITE = {
  name: "Fashion Genius",
  url: "https://fashion-genius.com",
  creatorStudioUrl: "https://creatorstudio.fashion-genius.com",
  founderEmail: "caroline.steiger@fashion-genius.com",
  bookingUrl: "",
} as const;

export const plans = [
  { name: "Free", price: "€0", credits: "20", collections: "2", uploads: "20/month", processing: "Standard", export: "Standard", analytics: "—", seats: "1" },
  { name: "Creator", price: "€19", credits: "250", collections: "25", uploads: "Unlimited", processing: "Fast", export: "HD", analytics: "Basic", seats: "1" },
  { name: "Pro", price: "€49", credits: "1,000", collections: "Unlimited", uploads: "Unlimited", processing: "Priority", export: "4K", analytics: "Advanced", seats: "3" },
  { name: "Studio", price: "€99", credits: "2,500", collections: "Unlimited", uploads: "Unlimited", processing: "Highest", export: "Premium", analytics: "Advanced + Insights", seats: "10" },
  { name: "Enterprise", price: "Custom", credits: "Custom", collections: "Unlimited", uploads: "Unlimited", processing: "Dedicated", export: "Custom", analytics: "Full + API", seats: "Custom" },
] as const;
