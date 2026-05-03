import { caseStudies } from "@/lib/case-studies"
import { notFound } from "next/navigation"
import CaseStudyClient from "./CaseStudyClient"

export function generateStaticParams() {
  return caseStudies.map((cs) => ({
    slug: cs.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const cs = caseStudies.find(c => c.slug === params.slug)
  if (!cs) return { title: 'Not Found' }
  
  return {
    title: cs.metaTitle,
    description: cs.metaDescription,
  }
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = caseStudies.find(c => c.slug === params.slug)
  
  if (!cs) {
    notFound()
  }

  return <CaseStudyClient caseStudy={cs} />
}
