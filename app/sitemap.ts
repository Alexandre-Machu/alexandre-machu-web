import type { MetadataRoute } from "next";
import { SITE_URL } from "@/components/Shell";
import { projects } from "@/lib/data";

// Plan du site : chaque page française avec son équivalent anglais.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { fr: "", en: "/en" },
    ...projects.filter((p) => p.featured).map((p) => ({ fr: `/projets/${p.slug}`, en: `/en/projects/${p.slug}` })),
  ];
  return pages.flatMap(({ fr, en }) => {
    const languages = { fr: SITE_URL + fr, en: SITE_URL + en };
    return [
      { url: SITE_URL + fr, alternates: { languages } },
      { url: SITE_URL + en, alternates: { languages } },
    ];
  });
}
