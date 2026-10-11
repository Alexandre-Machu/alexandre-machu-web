import Shell, { siteMetadata } from "@/components/Shell";

export const metadata = siteMetadata("en");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Shell lang="en">{children}</Shell>;
}
