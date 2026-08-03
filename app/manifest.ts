import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Fashion Genius",
    short_name: "Fashion Genius",
    description: "AI Commerce Platform for Fashion",
    start_url: "/",
    display: "standalone",
    background_color: "#060708",
    theme_color: "#060708",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
