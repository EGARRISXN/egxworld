export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://egxworld.vercel.app/sitemap.xml",
  };
}
