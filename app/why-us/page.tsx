import { Metadata } from "next";
import WhyUsClient from "./WhyUsClient";

export const metadata: Metadata = {
  title: "Why Us",
  description: "What makes Nexus Agency different from every other software firm.",
};

export default function WhyUsPage() {
  return <WhyUsClient />;
}
