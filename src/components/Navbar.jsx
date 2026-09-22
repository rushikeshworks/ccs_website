import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/solutions', label: 'Solutions & Services' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
  { to: '/about', label: 'About Us' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])


  const linkClass = ({ isActive }) =>
    `text-base font-medium transition-colors ${
      isActive ? 'text-accent' : 'text-muted hover:text-accent'
    }`

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'border-b border-line bg-paper/90 shadow-lg shadow-slate/20 backdrop-blur-md'
          : 'border-b border-line/60 bg-paper/70 backdrop-blur-md'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="flex items-center gap-2">
          <span className="text-base sm:text-lg md:text-xl font-medium tracking-wider text-ink uppercase">
            Centri<span className="text-[#E11D48]">c</span>ore Systems
          </span>
        </NavLink>

        <div className="hidden items-center gap-8 md:flex ml-6">
          {LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <NavLink
          to="/contact"
          className="hidden rounded-[4px] bg-[#A01730] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#C41E3A] active:bg-[#7a1025] md:inline-block"
        >
          Let's Connect
        </NavLink>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-5 bg-ink transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-5 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-5 bg-ink transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-paper/95 backdrop-blur-md px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={linkClass}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-[4px] bg-[#A01730] px-4 py-2 text-center text-sm font-medium text-white transition-all hover:bg-[#C41E3A] active:bg-[#7a1025]"
            >
              Let's Connect
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
