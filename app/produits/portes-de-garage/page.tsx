import type { Metadata } from "next";
import { SERVICES } from "@/lib/data";
import { generateServiceMetadata } from "@/lib/seo";
import ProductPageTemplate from "@/components/ProductPageTemplate";

export const metadata: Metadata = generateServiceMetadata("portes-de-garage");

export default function Page() {
  const service = SERVICES.find((s) => s.slug === "portes-de-garage")!;
  return <ProductPageTemplate service={service} />;
}
