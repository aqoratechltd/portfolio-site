import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Nexus Agency. Start your project today.",
};

export default function ContactPage() {
  return <ContactClient />;
}
