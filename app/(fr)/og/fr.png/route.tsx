import { ogImage } from "@/lib/og";

// Image d'aperçu des partages, exportée en fichier statique /og/fr.png au build.
export const dynamic = "force-static";

export function GET() {
  return ogImage("fr");
}
