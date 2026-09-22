import { NavLink } from 'react-router-dom'
import { HiOutlineArrowRight, HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi'
import ctaBg from '../assets/img.jpg'

export default function CTASection({
  label = 'Work With Us',
  heading = "Let's talk about what you're building.",
  body = "Whether you're architecting distributed infrastructure, integrating applied AI, or strengthening security, our engineering team is ready to collaborate. Tell us about your goals and let’s explore how we can help.",
  ctaLabel = 'Get in Touch',
  to = '/contact',
  bgImage = ctaBg,
}) {
  return (
    <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[4px] border border-line bg-paper-raised p-8 sm:p-12 md:p-14 shadow-2xl shadow-slate/50">
      {/* Red gradient glow line along top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      {/* Background Image Layer: img.jpg fitted to container */}
      {bgImage && (
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <img
            src={bgImage}
            alt=""
            className="h-full w-full object-fill opacity-65 md:opacity-80"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
      )}

      {/* Ambient crimson glow */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 -bottom-20 z-1 h-64 w-64 rounded-full bg-[#9F1239]/25 blur-3xl" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Editorial Headline & Copy */}
        <div className="lg:col-span-7">
          <span className="text-xs font-bold uppercase tracking-wider text-accent">
            {label}
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-medium tracking-[-0.03em] text-white" style={{color: '#FFFFFF'}}>
            {heading}
          </h2>
          <p className="mt-4 text-sm md:text-base font-normal leading-relaxed text-white max-w-xl" style={{color: '#FFFFFF'}}>
            {body}
          </p>
        </div>

        {/* Right Column: Clean Actions & Direct Contact */}
        <div className="lg:col-span-5 flex flex-col sm:items-start lg:items-start sm:flex-row lg:flex-col gap-6 lg:border-l lg:border-line lg:pl-10">
          <div>
            <NavLink
              to={to}
              className="inline-flex items-center gap-2 rounded-[4px] bg-[#A01730] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[#C41E3A] active:bg-[#7a1025] hover:shadow-xl hover:shadow-[#A01730]/40"
            >
              <span>{ctaLabel}</span>
              <HiOutlineArrowRight className="h-4 w-4" />
            </NavLink>
          </div>

          <div className="space-y-2 text-xs text-white" style={{color: '#FFFFFF'}}>
            <div className="flex items-center gap-2">
              <HiOutlineMail className="h-4 w-4 text-accent shrink-0" />
              <a
                href="mailto:admin@centricoresystems.com"
                className="hover:text-accent transition-colors underline decoration-line/80 underline-offset-4 text-white"
                style={{color: '#FFFFFF'}}
              >
                admin@centricoresystems.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-white" style={{color: '#FFFFFF'}}>
              <HiOutlineLocationMarker className="h-4 w-4 text-accent shrink-0" />
              <span>Pune &amp; Mumbai, Maharashtra, India</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
