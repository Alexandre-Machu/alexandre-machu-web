import type { Metadata } from "next";
import ProjectPage, { projectMetadata } from "@/components/ProjectPage";
import { projects } from "@/lib/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.filter((p) => p.featured).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return projectMetadata("fr", (await params).slug);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  return <ProjectPage lang="fr" slug={(await params).slug} />;
}
