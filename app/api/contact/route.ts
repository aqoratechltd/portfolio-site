import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { ContactEmail } from '@/emails/ContactEmail'
import { ContactConfirmEmail } from '@/emails/ContactConfirmEmail'
import { z } from 'zod'

const getResend = () => new Resend(process.env.RESEND_API_KEY ?? 're_placeholder')

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().min(1),
  budget: z.string().min(1),
  message: z.string().min(10),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    const resend = getResend()

    // Send admin notification
    if (process.env.ADMIN_EMAIL) {
      await resend.emails.send({
        from: 'Veltrix Contact <noreply@veltrix.io>',
        to: process.env.ADMIN_EMAIL,
        subject: `New Inquiry: ${data.name} — ${data.service}`,
        react: ContactEmail({ data }),
      })
    }

    // Send user confirmation
    await resend.emails.send({
      from: 'Veltrix <hello@veltrix.io>',
      to: data.email,
      subject: 'We received your message — Veltrix',
      react: ContactConfirmEmail({ name: data.name }),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid form data', issues: error.issues }, { status: 400 })
    }
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
