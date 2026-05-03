"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { services } from "@/lib/services"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  phone: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  services: z.array(z.string()).min(1, "Select at least one service"),
  budget: z.string().min(1, "Please select a budget range"),
  timeline: z.string().min(1, "Please select a timeline"),
  description: z.string().min(50, "Please provide at least 50 characters of detail"),
  hasDesign: z.boolean(),
  referralSource: z.string().optional()
})

type ProjectFormData = z.infer<typeof schema>

const STEPS = [
  { title: "About You" },
  { title: "Your Project" },
  { title: "Scope & Timeline" },
  { title: "Review" }
]

export default function StartProjectClient() {
  const [step, setStep] = useState(0)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const { register, handleSubmit, trigger, formState: { errors }, watch, setValue } = useForm<ProjectFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      services: [],
      hasDesign: false,
    }
  })

  const formValues = watch()

  const nextStep = async () => {
    let fieldsToValidate: any[] = []
    if (step === 0) fieldsToValidate = ['name', 'email', 'company', 'phone']
    if (step === 1) fieldsToValidate = ['projectType', 'services', 'hasDesign']
    if (step === 2) fieldsToValidate = ['budget', 'timeline', 'description', 'referralSource']
    
    const isValid = await trigger(fieldsToValidate)
    if (isValid) setStep(s => Math.min(s + 1, 3))
  }

  const prevStep = () => {
    setStep(s => Math.max(s - 1, 0))
  }

  const onSubmit = async (data: ProjectFormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/start-project', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const handleServiceToggle = (serviceName: string) => {
    const current = watch('services') || []
    if (current.includes(serviceName)) {
      setValue('services', current.filter(s => s !== serviceName))
    } else {
      setValue('services', [...current, serviceName])
    }
  }

  if (status === 'success') {
    return (
      <div className="pt-32 pb-24 container mx-auto px-4 min-h-[80vh] flex items-center justify-center">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-card border border-border rounded-3xl p-12 max-w-2xl text-center shadow-2xl">
          <div className="w-24 h-24 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto mb-8">
            <Check className="w-12 h-12" />
          </div>
          <h2 className="font-syne font-bold text-4xl mb-4 text-white">Proposal Received</h2>
          <p className="text-text-secondary text-lg leading-relaxed mb-8">
            Thank you for trusting Veltrix. Our engineering team is reviewing your project details. We will prepare an initial assessment and get back to you within 24 hours.
          </p>
          <button onClick={() => window.location.href='/'} className="font-medium text-accent hover:text-white transition-colors">
            Return to Home
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="pt-24 md:pt-32 pb-24 container mx-auto px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-syne font-bold text-4xl md:text-5xl mb-4 text-white">Start a Project</h1>
          <p className="text-text-secondary">Let's build something incredible. Fill out the details below.</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12 relative">
          <div className="flex justify-between relative z-10">
            {STEPS.map((s, i) => (
              <div key={i} className={`flex flex-col items-center gap-2 ${i <= step ? 'text-accent' : 'text-text-muted'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 bg-background transition-colors ${i <= step ? 'border-accent text-accent' : 'border-border text-text-muted'}`}>
                  {i < step ? <Check className="w-4 h-4" /> : i + 1}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider hidden sm:block">{s.title}</span>
              </div>
            ))}
          </div>
          <div className="absolute top-4 left-0 right-0 h-0.5 bg-border -z-10" />
          <motion.div 
            className="absolute top-4 left-0 h-0.5 bg-accent -z-10"
            animate={{ width: `${(step / (STEPS.length - 1)) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <div className="bg-card border border-border rounded-3xl p-6 md:p-12 shadow-2xl relative overflow-hidden">
          <form onSubmit={handleSubmit(onSubmit)}>
            <AnimatePresence mode="wait">
              {step === 0 && (
                <motion.div
                  key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h3 className="font-syne font-bold text-2xl text-white mb-6">About You</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-text-muted mb-2">Name *</label>
                      <input type="text" {...register("name")} className="w-full bg-secondary border border-border rounded p-3 text-white focus:outline-none focus:border-accent" />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-muted mb-2">Email *</label>
                      <input type="email" {...register("email")} className="w-full bg-secondary border border-border rounded p-3 text-white focus:outline-none focus:border-accent" />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-text-muted mb-2">Company Name</label>
                      <input type="text" {...register("company")} className="w-full bg-secondary border border-border rounded p-3 text-white focus:outline-none focus:border-accent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-muted mb-2">Phone Number</label>
                      <input type="tel" {...register("phone")} className="w-full bg-secondary border border-border rounded p-3 text-white focus:outline-none focus:border-accent" />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 1 && (
                <motion.div
                  key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <h3 className="font-syne font-bold text-2xl text-white mb-6">Your Project</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-text-muted mb-4">Project Type *</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {['New product', 'Existing product upgrade', 'MVP', 'Consultation'].map(type => (
                        <label key={type} className={`cursor-pointer flex items-center p-4 rounded border ${watch('projectType') === type ? 'border-accent bg-accent/5' : 'border-border bg-secondary hover:border-border-light'}`}>
                          <input type="radio" value={type} {...register("projectType")} className="hidden" />
                          <div className={`w-4 h-4 rounded-full border mr-3 flex items-center justify-center ${watch('projectType') === type ? 'border-accent' : 'border-text-muted'}`}>
                            {watch('projectType') === type && <div className="w-2 h-2 bg-accent rounded-full" />}
                          </div>
                          <span className="text-white">{type}</span>
                        </label>
                      ))}
                    </div>
                    {errors.projectType && <p className="text-red-500 text-xs mt-1">{errors.projectType.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-muted mb-4">Services Needed * (Select multiple)</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {services.map(s => (
                        <button
                          key={s.id} type="button"
                          onClick={() => handleServiceToggle(s.name)}
                          className={`p-3 text-sm text-left rounded border transition-colors ${watch('services')?.includes(s.name) ? 'border-accent bg-accent/5 text-white' : 'border-border bg-secondary text-text-secondary hover:border-border-light'}`}
                        >
                          {s.name}
                        </button>
                      ))}
                    </div>
                    {errors.services && <p className="text-red-500 text-xs mt-1">{errors.services.message}</p>}
                  </div>

                  <div>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" {...register("hasDesign")} className="w-5 h-5 rounded border-border bg-secondary text-accent focus:ring-accent" />
                      <span className="text-white">I already have UI/UX designs ready</span>
                    </label>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h3 className="font-syne font-bold text-2xl text-white mb-6">Scope & Timeline</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-text-muted mb-2">Budget Range *</label>
                      <select {...register("budget")} className="w-full bg-secondary border border-border rounded p-3 text-white focus:outline-none focus:border-accent appearance-none">
                        <option value="">Select a budget...</option>
                        <option value="<$5K">&lt;$5K</option>
                        <option value="$5K-$15K">$5K-$15K</option>
                        <option value="$15K-$50K">$15K-$50K</option>
                        <option value="$50K+">$50K+</option>
                        <option value="Let's discuss">Let's discuss</option>
                      </select>
                      {errors.budget && <p className="text-red-500 text-xs mt-1">{errors.budget.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-muted mb-2">Timeline *</label>
                      <select {...register("timeline")} className="w-full bg-secondary border border-border rounded p-3 text-white focus:outline-none focus:border-accent appearance-none">
                        <option value="">Select a timeline...</option>
                        <option value="ASAP">ASAP</option>
                        <option value="1-3 months">1-3 months</option>
                        <option value="3-6 months">3-6 months</option>
                        <option value="6+ months">6+ months</option>
                        <option value="Flexible">Flexible</option>
                      </select>
                      {errors.timeline && <p className="text-red-500 text-xs mt-1">{errors.timeline.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-muted mb-2">Project Details *</label>
                    <textarea {...register("description")} rows={6} placeholder="Tell us about the problem you're solving, core features requested, and any technical constraints..." className="w-full bg-secondary border border-border rounded p-3 text-white focus:outline-none focus:border-accent resize-none" />
                    {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-muted mb-2">How did you hear about us?</label>
                    <select {...register("referralSource")} className="w-full bg-secondary border border-border rounded p-3 text-white focus:outline-none focus:border-accent appearance-none">
                      <option value="">Select option...</option>
                      <option value="Google">Google / Search</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Referral">Referral from a client/friend</option>
                      <option value="GitHub">GitHub</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <h3 className="font-syne font-bold text-2xl text-white mb-2">Review Summary</h3>
                  <p className="text-text-secondary mb-8">Please confirm your details before submitting.</p>
                  
                  <div className="bg-secondary border border-border rounded-xl p-6 space-y-4 text-sm text-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div><span className="text-text-muted block mb-1">Name</span> {formValues.name}</div>
                      <div><span className="text-text-muted block mb-1">Email</span> {formValues.email}</div>
                      <div><span className="text-text-muted block mb-1">Project Type</span> {formValues.projectType}</div>
                      <div><span className="text-text-muted block mb-1">Budget</span> <span className="text-accent">{formValues.budget}</span></div>
                    </div>
                    <div className="border-t border-border pt-4">
                      <span className="text-text-muted block mb-2">Services</span>
                      <div className="flex flex-wrap gap-2">
                        {formValues.services?.map((s: string) => <span key={s} className="bg-background px-2 py-1 rounded text-xs">{s}</span>)}
                      </div>
                    </div>
                  </div>

                  {status === 'error' && (
                    <div className="p-4 bg-red-500/10 border border-red-500 text-red-500 rounded text-center">
                      Something went wrong submitting your proposal. Please try again.
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex justify-between items-center mt-12 pt-6 border-t border-border">
              <button
                type="button"
                onClick={prevStep}
                disabled={step === 0 || status === 'loading'}
                className="flex items-center gap-2 px-6 py-3 font-medium text-text-secondary hover:text-white transition-colors disabled:opacity-0"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              
              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex items-center gap-2 px-8 py-3 bg-accent text-black font-bold rounded hover:bg-accent/90 transition-colors"
                >
                  Next Step <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="flex items-center gap-2 px-8 py-3 bg-accent-orange text-white font-bold rounded hover:bg-orange-500 transition-colors disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <><span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" /> Submitting...</>
                  ) : "Submit Proposal"}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
