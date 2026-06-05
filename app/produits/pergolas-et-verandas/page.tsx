import type { Metadata } from "next";
import { SERVICES } from "@/lib/data";
import { generateServiceMetadata } from "@/lib/seo";
import ProductPageTemplate from "@/components/ProductPageTemplate";

export const metadata: Metadata = generateServiceMetadata("pergolas-et-verandas");

export default function Page() {
  const service = SERVICES.find((s) => s.slug === "pergolas-et-verandas")!;
  return <ProductPageTemplate service={service} />;
}
