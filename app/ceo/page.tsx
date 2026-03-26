import { Metadata } from "next";
import CEOClient from "./CEOClient";

export const metadata: Metadata = {
  title: "Our CEO",
  description: "Meet the visionary founder and CEO leading Nexus Agency.",
};

export default function CEOPage() {
  return <CEOClient />;
}
