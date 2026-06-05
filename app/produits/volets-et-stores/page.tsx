import type { Metadata } from "next";
import { SERVICES } from "@/lib/data";
import { generateServiceMetadata } from "@/lib/seo";
import ProductPageTemplate from "@/components/ProductPageTemplate";

export const metadata: Metadata = generateServiceMetadata("volets-et-stores");

export default function Page() {
  const service = SERVICES.find((s) => s.slug === "volets-et-stores")!;
  return <ProductPageTemplate service={service} />;
}
