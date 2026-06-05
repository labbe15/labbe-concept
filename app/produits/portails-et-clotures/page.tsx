import type { Metadata } from "next";
import { SERVICES } from "@/lib/data";
import { generateServiceMetadata } from "@/lib/seo";
import ProductPageTemplate from "@/components/ProductPageTemplate";

export const metadata: Metadata = generateServiceMetadata("portails-et-clotures");

export default function Page() {
  const service = SERVICES.find((s) => s.slug === "portails-et-clotures")!;
  return <ProductPageTemplate service={service} />;
}
