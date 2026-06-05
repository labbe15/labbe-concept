import type { Metadata } from "next";
import { SERVICES } from "@/lib/data";
import { generateServiceMetadata } from "@/lib/seo";
import ProductPageTemplate from "@/components/ProductPageTemplate";

export const metadata: Metadata = generateServiceMetadata("escaliers");

export default function Page() {
  const service = SERVICES.find((s) => s.slug === "escaliers")!;
  return <ProductPageTemplate service={service} />;
}
