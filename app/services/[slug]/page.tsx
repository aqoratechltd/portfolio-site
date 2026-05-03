import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES } from "@/lib/utils";
import { pricingServices } from "@/lib/pricing-data";
import ServicePageClient from "./ServicePageClient";
import PricingPageClient from "./PricingPageClient";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const oldSlugs = SERVICES.map((s) => ({ slug: s.id }));
  const newSlugs = pricingServices.map((s) => ({ slug: s.slug }));
  return [...oldSlugs, ...newSlugs];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const legacyService = SERVICES.find((s) => s.id === params.slug);
  if (legacyService) {
    return { title: legacyService.title, description: legacyService.description };
  }
  const pricingService = pricingServices.find((s) => s.slug === params.slug);
  if (pricingService) {
    return {
      title: `${pricingService.title} Pricing | Aqora`,
      description: pricingService.description,
    };
  }
  return {};
}

export default function ServicePage({ params }: Props) {
  const legacyService = SERVICES.find((s) => s.id === params.slug);
  if (legacyService) return <ServicePageClient service={legacyService} />;

  const pricingService = pricingServices.find((s) => s.slug === params.slug);
  if (pricingService) return <PricingPageClient service={pricingService} />;

  notFound();
}
