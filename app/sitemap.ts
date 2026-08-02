import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE.url, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${SITE.url}/creator-studio/`, lastModified: new Date(), changeFrequency: "weekly", priority: .9 },
    { url: `${SITE.url}/retail-platform/`, lastModified: new Date(), changeFrequency: "weekly", priority: .9 },
    { url: `${SITE.url}/privacy/`, lastModified: new Date(), changeFrequency: "yearly", priority: .2 },
    { url: `${SITE.url}/terms/`, lastModified: new Date(), changeFrequency: "yearly", priority: .2 },
    { url: `${SITE.url}/imprint/`, lastModified: new Date(), changeFrequency: "yearly", priority: .2 },
  ];
}
