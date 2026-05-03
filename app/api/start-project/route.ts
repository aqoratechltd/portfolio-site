import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { ProposalEmail } from '@/emails/ProposalEmail'
import { z } from 'zod'

const getResend = () => new Resend(process.env.RESEND_API_KEY ?? 're_placeholder')

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional().default(''),
  phone: z.string().optional().default(''),
  projectType: z.string().min(1),
  services: z.array(z.string()).min(1),
  budget: z.string().min(1),
  timeline: z.string().min(1),
  description: z.string().min(10),
  hasDesign: z.boolean(),
  referralSource: z.string().optional().default(''),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    const resend = getResend()

    if (process.env.ADMIN_EMAIL) {
      // Send admin proposal notification
      await resend.emails.send({
        from: 'Veltrix Start Project <noreply@veltrix.io>',
        to: process.env.ADMIN_EMAIL,
        subject: `Project Proposal: ${data.name} — ${data.company || 'Independent'}`,
        react: ProposalEmail({ data }),
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid form data', issues: error.issues }, { status: 400 })
    }
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
