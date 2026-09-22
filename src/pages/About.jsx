import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { HiOutlineArrowRight } from 'react-icons/hi'
import Reveal from '../components/Reveal'
import vid7 from '../assets/vid7.mp4'
import builtToLastImage from '../assets/Built to Last.png'
import securityByDefaultImage from '../assets/Security by Default.png'
import measurableImpactImage from '../assets/Measurable Impact.png'

const missionStatement = "Engineering trust into every system."

// TODO: Customize these three values and descriptions
const values = [
  {
    title: 'Built to Last',
    description: 'We engineer robust platforms designed to operate reliably at scale, even in mission-critical environments.',
    image: builtToLastImage,
  },
  {
    title: 'Security by Default',
    description: 'Security is part of every design decision from day one, not something added at the end.',
    image: securityByDefaultImage,
  },
  {
    title: 'Measurable Impact',
    description: 'We turn complex technology challenges into real-world results our partners can see and measure.',
    image: measurableImpactImage,
  },
]

export default function About() {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7
    }
  }, [])

  return (
    <div className="bg-paper text-ink">
      {/* Hero Section */}
      <div className="relative min-h-[calc(100vh-73px)] w-full overflow-hidden flex items-center justify-center px-6 py-12 md:py-16">
      {/* Background Video: vid7 with slowed ambient playback rate */}
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
          src={vid7}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Ambient crimson glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-[640px] rounded-full bg-[#E11D48]/15 blur-[140px] z-1"
      />

      {/* Clean Editorial Card with Glassmorphic Transparency */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 mx-auto max-w-2xl rounded-[6px] border border-slate/20 bg-white/70 p-6 sm:p-8 shadow-2xl shadow-slate/50 backdrop-blur-md"
      >
        <div className="mb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-accent">
            About Centricore Systems
          </span>
        </div>

        <h1 className="text-lg sm:text-xl md:text-2xl font-normal leading-snug tracking-[-0.03em] text-ink drop-shadow-sm" style={{ letterSpacing: 'normal', color: '#000000' }}>
          Centricore Systems is a software solutions partner delivering innovative, secure, and scalable digital solutions that enable a smarter and safer world.
        </h1>

        <div className="my-4 h-px w-full bg-slate/20" />

        <div className="space-y-3 text-sm sm:text-base font-normal leading-relaxed text-ink drop-shadow-sm" style={{ color: '#374151' }}>
          <p>
            We engineer robust software platforms and mission-critical digital solutions designed to solve complex challenges and operate reliably at scale. Our expertise spans distributed systems, edge and cloud computing, artificial intelligence, video analytics, machine learning, OCR, blockchain, and cybersecurity, bringing together advanced technologies to build intelligent, secure, and future-ready solutions.
          </p>
          <p>
            We partner with organizations to drive digital transformation, enhance operational efficiency, strengthen security, and turn complex technology challenges into measurable, real-world impact.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-line/60">
          <NavLink
            to="/solutions"
            className="inline-flex items-center gap-2 rounded-[4px] bg-[#A01730] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#C41E3A] active:bg-[#7a1025] hover:shadow-lg hover:shadow-[#A01730]/30"
          >
            <span>Explore Solutions &amp; Services</span>
            <HiOutlineArrowRight className="h-4 w-4" />
          </NavLink>
        </div>
      </motion.div>
      </div>

      {/* Mission and Values Section */}
      <section className="relative px-6 py-20 border-t border-line overflow-hidden">
        {/* Subtle ambient crimson glow */}
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-1/2 -translate-y-1/2 h-80 w-96 rounded-full bg-[#E11D48]/10 blur-3xl z-0" />

        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Section Eyebrow */}
          <Reveal className="text-center mb-3">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Our Mission and Values
            </span>
          </Reveal>

          {/* Mission Statement */}
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-ink md:text-4xl" style={{ textWrap: 'balance' }}>
              {missionStatement}
            </h2>
          </Reveal>

          {/* Values Grid */}
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, idx) => (
              <Reveal key={value.title} delay={idx * 0.08}>
                <motion.li
                  className="group rounded-lg border border-slate/20 bg-white/70 backdrop-blur-sm hover:border-accent/50 hover:bg-white/80 transition-all duration-300 h-full flex flex-col relative overflow-hidden"
                  whileHover={{ y: -4 }}
                >
                  {/* Accent top border on hover */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Image Container */}
                  <div className="relative h-40 -m-0 overflow-hidden rounded-t-lg">
                    {value.image ? (
                      <>
                        <img
                          src={value.image}
                          alt=""
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </>
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-accent/10 to-accent/5" />
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col flex-grow p-6">
                    {/* Title */}
                    <h3 className="text-base font-semibold text-ink mb-2 text-left" style={{color: '#000000'}}>{value.title}</h3>

                    {/* Description */}
                    <p className="text-sm font-normal leading-relaxed text-muted flex-grow text-justify" style={{color: '#6B7280'}}>
                      {value.description}
                    </p>
                  </div>
                </motion.li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
