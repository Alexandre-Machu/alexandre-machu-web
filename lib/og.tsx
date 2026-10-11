import { ImageResponse } from "next/og";
import { content, ui, type Lang } from "@/lib/i18n";

// Aperçu affiché quand le lien est partagé (LinkedIn, Discord, mails), une version par langue.
export const ogSize = { width: 1200, height: 630 };


export function ogImage(lang: Lang) {
  const { profile } = content[lang];
  const t = ui[lang];
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#fbfaf7",
          color: "#16161a",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 26, color: "#6b6b73" }}>
          <div style={{ width: 12, height: 12, borderRadius: 6, background: "#10b981" }} />
          {profile.availability}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 30, letterSpacing: 4, color: "#2f4fd8" }}>{profile.role.toUpperCase()}</div>
          <div style={{ marginTop: 18, fontSize: 104, letterSpacing: -3, lineHeight: 1 }}>{profile.name}</div>
          <div style={{ marginTop: 28, fontSize: 34, color: "#6b6b73", maxWidth: 900 }}>
            {t.ogTagline}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "2px solid #e8e6e1",
            paddingTop: 28,
            fontSize: 26,
            color: "#6b6b73",
          }}
        >
          <span>{t.ogFooter}</span>
          <span>alexandre-machu-web.vercel.app</span>
        </div>
      </div>
    ),
    ogSize,
  );
}
