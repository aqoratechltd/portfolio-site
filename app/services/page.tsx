import { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import ServicesGrid from "@/components/sections/ServicesGrid";
import CTABanner from "@/components/sections/CTABanner";
import ServicesHero from "@/components/sections/ServicesHero";

export const metadata: Metadata = {
  title: "Services",
  description: "Full-stack software services from AI to blockchain, web development to cloud infrastructure.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <CTABanner />
    </>
  );
}
