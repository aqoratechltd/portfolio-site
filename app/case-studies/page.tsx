import { Metadata } from "next";
import CaseStudiesClient from "./CaseStudiesClient";

export const metadata: Metadata = {
  title: "Our Work | Aqora",
  description: "Selected case studies — software that solves real problems for bold clients.",
};

export default function CaseStudiesPage() {
  return <CaseStudiesClient />;
}
