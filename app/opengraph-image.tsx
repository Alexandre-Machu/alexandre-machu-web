import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

// Aperçu affiché quand le lien est partagé (LinkedIn, Discord, mails).
export const alt = `${profile.name}, ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
// Requis par output: "export" : l'image est générée une fois au build.
export const dynamic = "force-static";

export default function Image() {
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
            Venu du développement. Référentiels applicatifs et qualité de données, en alternance chez Safran.
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
          <span>Parcours · Projets · CV</span>
          <span>alexandre-machu-web.vercel.app</span>
        </div>
      </div>
    ),
    size,
  );
}
