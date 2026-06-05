import type { Metadata } from "next";
import { SERVICES } from "@/lib/data";
import { generateServiceMetadata } from "@/lib/seo";
import ProductPageTemplate from "@/components/ProductPageTemplate";

export const metadata: Metadata = generateServiceMetadata("terrasses-bois");

export default function Page() {
  const service = SERVICES.find((s) => s.slug === "terrasses-bois")!;
  return <ProductPageTemplate service={service} />;
}
