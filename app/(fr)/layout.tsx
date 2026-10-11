import Shell, { siteMetadata } from "@/components/Shell";

export const metadata = siteMetadata("fr");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Shell lang="fr">{children}</Shell>;
}
