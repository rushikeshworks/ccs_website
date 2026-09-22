import { NavLink } from 'react-router-dom'
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlineArrowRight } from 'react-icons/hi'

const NAVIGATION_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/solutions', label: 'Solutions & Services' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
  { to: '/about', label: 'About Us' },
]

const SOLUTIONS_LINKS = [
  { label: 'Cloud & Distributed Systems', to: '/solutions' },
  { label: 'Agentic AI & Data Intelligence', to: '/solutions' },
  { label: 'Data Protection & Security', to: '/solutions' },
  { label: 'Product & Platform Design', to: '/solutions' },
]

const FOOTER_CONTACT = {
  email: 'admin@centricoresystems.com',
  location: 'Pune, Maharashtra, India',
}

// TODO: Set these URLs to enable links in the footer bottom bar
const FOOTER_LEGAL_LINKS = {
  privacyUrl: undefined,
  termsUrl: undefined,
  linkedinUrl: undefined,
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-line bg-paper-raised text-ink">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      {/* Subtle red glow behind brand block */}
      <div aria-hidden="true" className="pointer-events-none absolute top-0 left-0 z-0 h-96 w-96 rounded-full bg-accent/8 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-11">
        {/* Main grid: 1.6fr brand + 1fr nav + 1fr solutions + 1fr contact on desktop */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10 lg:grid-cols-[1.4fr_1fr_1fr_minmax(max-content,1.2fr)] lg:gap-8">
          {/* Column 1: Brand (full width on mobile/tablet, 1.6fr on desktop) */}
          <div className="md:col-span-3 lg:col-auto">
            <NavLink to="/" className="inline-flex items-center gap-2.5 hover:opacity-80 transition-opacity">
              <span className="text-base sm:text-lg md:text-xl font-medium tracking-wider text-ink uppercase" style={{ fontVariant: 'small-caps' }}>
                Centri<span className="text-[#E11D48]">c</span>ore Systems
              </span>
            </NavLink>

            <p className="mt-4 text-xs font-bold uppercase tracking-widest text-accent">
              Software Solutions Partner
            </p>

            <p className="mt-3 text-sm font-normal leading-relaxed text-muted max-w-sm">
              {/* TODO: Update brand description (2-3 lines max, unique to footer, don't repeat hero/about) */}
              Engineering trust into every system.
            </p>

            <div className="mt-6">
              <NavLink
                to="/contact"
                className="inline-flex items-center gap-2 rounded-[4px] bg-[#A01730] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#C41E3A] active:bg-[#7a1025] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Let's Connect
                <HiOutlineArrowRight className="h-4 w-4" />
              </NavLink>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-ink">
              Navigation
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="mt-5 space-y-2.5">
                {NAVIGATION_LINKS.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      className="text-sm font-normal text-muted motion-safe:transition-colors hover:text-ink focus-visible:text-ink focus-visible:outline-none"
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3: Solutions */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-ink">
              Solutions
            </h3>
            <nav aria-label="Footer solutions">
              <ul className="mt-5 space-y-2.5">
                {SOLUTIONS_LINKS.map((link) => (
                  <li key={link.label}>
                    <NavLink
                      to={link.to}
                      className="text-sm font-normal text-muted motion-safe:transition-colors hover:text-ink focus-visible:text-ink focus-visible:outline-none"
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-ink">
              Contact
            </h3>
            <ul className="mt-5 space-y-2.5">
              <li>
                <a
                  href={`mailto:${FOOTER_CONTACT.email}`}
                  className="inline-flex items-start gap-2 text-sm font-normal text-muted motion-safe:transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none"
                >
                  <HiOutlineMail className="h-4 w-4 shrink-0 mt-0.5" aria-hidden="true" />
                  <span style={{ overflowWrap: 'break-word' }}>{FOOTER_CONTACT.email}</span>
                </a>
              </li>
              <li>
                <div className="inline-flex items-start gap-2 text-sm font-normal text-muted">
                  <HiOutlineLocationMarker className="h-4 w-4 shrink-0 mt-0.5" aria-hidden="true" />
                  <span style={{ overflowWrap: 'break-word' }}>{FOOTER_CONTACT.location}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-line pt-8 text-xs text-muted">
          <div className="flex flex-col gap-4 justify-between md:flex-row md:items-center">
            <p>
              &copy; {currentYear} Centricore Systems. All rights reserved.
            </p>

            {/* Legal and social links */}
            <div className="flex flex-wrap items-center gap-4">
              {FOOTER_LEGAL_LINKS.privacyUrl && (
                <a
                  href={FOOTER_LEGAL_LINKS.privacyUrl}
                  className="motion-safe:transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none"
                >
                  Privacy Policy
                </a>
              )}
              {FOOTER_LEGAL_LINKS.termsUrl && (
                <a
                  href={FOOTER_LEGAL_LINKS.termsUrl}
                  className="motion-safe:transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none"
                >
                  Terms of Service
                </a>
              )}
              {FOOTER_LEGAL_LINKS.linkedinUrl && (
                <a
                  href={FOOTER_LEGAL_LINKS.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Centricore Systems on LinkedIn"
                  className="motion-safe:transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none"
                >
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
