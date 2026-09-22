import { useState, useEffect, useRef } from 'react'
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlineOfficeBuilding, HiCheck } from 'react-icons/hi'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import vid5 from '../assets/vid5.mp4'

const CONTACT_INFO = [
  { icon: HiOutlineOfficeBuilding, label: 'Organization', value: 'Centricore Systems' },
  { icon: HiOutlineLocationMarker, label: 'Headquarters & Operations', value: 'Pune, Maharashtra, India' },
  { icon: HiOutlineMail, label: 'Contact Email', value: 'admin@centricoresystems.com' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-paper text-ink">
      {/* Background Video: vid5 - Full coverage */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onLoadedMetadata={(e) => {
            e.currentTarget.playbackRate = 0.7
          }}
          className="h-full w-full object-cover"
          src={vid5}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10">
        <PageHero
          title="Let's Build Together"
          description="Ready to transform challenges into solutions? We partner with organizations to drive digital transformation, enhance operational efficiency, strengthen security, and turn complex technology challenges into measurable impact."
        />

      <section className="px-6 pb-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-5">
          <Reveal className="md:col-span-2">
            <div className="rounded-[6px] border border-slate/20 bg-white/70 p-6 shadow-2xl shadow-slate/50 backdrop-blur-md h-full flex flex-col">
              <h3 className="text-base font-medium tracking-[-0.02em] text-ink drop-shadow-sm" style={{color: '#000000'}}>
                Partnership Inquiry
              </h3>
              <p className="mt-1.5 text-xs font-normal text-muted" style={{color: '#374151'}}>
                Reach out to our team for strategic partnerships, enterprise solutions, custom software engineering, or technology consultations.
              </p>
              <div className="mt-4 flex flex-col gap-4">
                {CONTACT_INFO.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-[3px] border border-accent-dim/40 bg-accent-soft text-accent">
                      <item.icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs text-muted" style={{color: '#374151'}}>
                        {item.label}
                      </p>
                      <p className="text-xs font-medium text-ink" style={{color: '#000000'}}>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="md:col-span-3">
            <div className="rounded-[6px] border border-slate/20 bg-white/70 p-6 shadow-2xl shadow-slate/50 backdrop-blur-md h-full flex flex-col">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[4px] bg-accent text-white shadow-sm shadow-accent/20">
                    <HiCheck className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 text-base font-medium tracking-[-0.02em] text-ink" style={{color: '#000000'}}>
                    Inquiry Submitted
                  </h3>
                  <p className="mt-1.5 max-w-sm text-xs text-muted" style={{color: '#374151'}}>
                    Thank you. Our team will review your requirements and respond within one business day.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 rounded-[4px] border border-line bg-paper px-4 py-1.5 text-xs font-medium text-ink transition-colors hover:bg-panel-elevated"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Field label="Full Name" name="name" placeholder="Your Name" required />
                    <Field
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Field label="Organization / Agency" name="department" placeholder="e.g. Enterprise, Agency, Organization" required />
                    <Field label="Your Role / Title" name="designation" placeholder="e.g. Director, IT Officer, Project Lead" />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-ink" style={{color: '#000000'}}>
                      Challenge or Opportunity
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="Describe your challenge, project scope, or technology inquiry..."
                      className="w-full rounded-[3px] border border-slate/20 bg-slate/10 backdrop-blur-sm px-3 py-2 text-xs text-ink placeholder:text-slate/80 outline-none transition-colors" style={{color: '#000000'}}
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-1 self-start rounded-[4px] bg-[#A01730] px-5 py-1.5 text-xs font-medium text-white transition-all hover:bg-[#C41E3A] active:bg-[#7a1025]"
                  >
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
      </div>
    </div>
  )
}

function Field({ label, name, type = 'text', placeholder, required }) {
  return (
    <div>
      <label className="mb-1 block text-xs font-medium text-ink" style={{color: '#000000'}}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-[3px] border border-slate/20 bg-slate/10 backdrop-blur-sm px-3 py-2 text-xs text-ink placeholder:text-slate/80 outline-none transition-colors" style={{color: '#000000'}}
      />
    </div>
  )
}
