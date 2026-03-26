import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us",
  description: "The story, mission, and people behind Nexus Agency.",
};

export default function AboutPage() {
  return <AboutClient />;
}
