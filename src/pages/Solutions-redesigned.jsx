import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'
import vid5 from '../assets/vid5.mp4'
import {
  HiOutlineClipboardList,
  HiOutlineCode,
  HiOutlineSparkles,
  HiOutlineCheckCircle,
  HiOutlineServer,
  HiOutlineLightBulb,
  HiOutlineShieldCheck,
  HiOutlineCube,
  HiOutlineArrowRight,
} from 'react-icons/hi'

export default function Solutions() {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7
    }
  }, [])

  // Services offered - TODO: Update descriptions and links
  const services = [
    {
      icon: HiOutlineServer,
      title: 'Cloud Infrastructure',
      description: 'Scalable, resilient cloud platforms optimized for performance and cost.',
      link: '#', // TODO: Update with actual route
    },
    {
      icon: HiOutlineLightBulb,
      title: 'AI & Data Solutions',
      description: 'Machine learning, analytics, and intelligent automation at scale.',
      link: '#', // TODO: Update with actual route
    },
    {
      icon: HiOutlineShieldCheck,
      title: 'Security & Compliance',
      description: 'Zero Trust architecture and regulatory-grade security frameworks.',
      link: '#', // TODO: Update with actual route
    },
    {
      icon: HiOutlineCube,
      title: 'Platform Engineering',
      description: 'Internal developer platforms and DevOps infrastructure.',
      link: '#', // TODO: Update with actual route
    },
  ]

  // Technical principles with lead stats
  const principles = [
    {
      icon: HiOutlineServer,
      stat: 'Horizontal',
      // TODO: Add secondary stat if needed
      title: 'Scalable Architecture',
      bullets: ['Load distribution', 'Caching strategies'],
    },
    {
      icon: HiOutlineShieldCheck,
      stat: 'Zero Trust',
      title: 'Security by Design',
      bullets: ['End-to-end encryption', 'Compliance automation'],
    },
    {
      icon: HiOutlineSparkles,
      stat: '99.99%',
      secondaryStat: '<100ms',
      title: 'Performance & Reliability',
      bullets: ['Auto-recovery', 'Real-time monitoring'],
    },
  ]

  const phases = [
    {
      step: '01',
      title: 'Discovery & Architecture',
      icon: HiOutlineClipboardList,
      details: [
        'Requirements analysis',
        'System design & scalability planning',
        'Technology selection',
        'Risk assessment',
      ],
    },
    {
      step: '02',
      title: 'Development & Testing',
      icon: HiOutlineCode,
      details: [
        'Agile development cycles',
        'Continuous integration & deployment',
        'Automated & manual testing',
        'Performance optimization',
      ],
    },
    {
      step: '03',
      title: 'Deployment & Monitoring',
      icon: HiOutlineSparkles,
      details: [
        'Production deployment',
        'Real-time monitoring setup',
        'Performance tracking',
        'Incident response',
      ],
    },
    {
      step: '04',
      title: 'Support & Optimization',
      icon: HiOutlineCheckCircle,
      details: [
        '24/7 support availability',
        'Continuous optimization',
        'Security updates',
        'Scalability management',
      ],
    },
  ]

  return (
    <div className="relative bg-paper text-ink overflow-hidden">
      {/* Solutions & Services + Technical Excellence Section */}
      <section className="relative overflow-hidden">
        {/* Background: Particle video for hero area, solid dark with glow below */}
        <div className="pointer-events-none absolute inset-0 z-0">
          {/* Particle video background - hero section only (top 45%) */}
          <div className="absolute inset-0 h-[50%] overflow-hidden">
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
          </div>

          {/* Solid dark background for cards section */}
          <div className="absolute top-[50%] inset-x-0 bottom-0 bg-paper" />

          {/* Subtle radial glow behind cards */}
          <div className="absolute top-[60%] left-1/2 -translate-x-1/2 h-96 w-[640px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
        </div>

        <div className="relative z-10">
          {/* Part 1: Hero - Solutions & Services */}
          <div className="px-6 pt-20 pb-16 md:pt-28 md:pb-20">
            <div className="mx-auto max-w-5xl text-center">
              <motion.h1
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight tracking-[-0.02em] text-white drop-shadow-md"
              >
                Solutions & Services
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="mt-8 max-w-3xl mx-auto text-lg font-normal leading-relaxed text-white/80 md:text-xl drop-shadow-md"
              >
                Enterprise-grade technology solutions engineered for scale, security, and measurable impact. From distributed systems to artificial intelligence, we build platforms that power digital transformation.
              </motion.p>
            </div>

            {/* Services Grid (4 columns: desktop, 2: tablet, 1: mobile) */}
            <div className="mx-auto max-w-6xl mt-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, idx) => {
                  const ServiceIcon = service.icon
                  return (
                    <Reveal key={service.title} delay={idx * 0.08}>
                      <motion.a
                        href={service.link}
                        className="group rounded-lg border border-slate/15 bg-slate/[0.04] p-6 backdrop-blur-sm hover:border-accent/50 hover:bg-slate/[0.08] transition-all duration-300 h-full flex flex-col relative overflow-hidden"
                        whileHover={{ y: -4 }}
                      >
                        {/* Accent top border on hover */}
                        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Icon */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent/15 text-accent group-hover:bg-accent/25 transition-colors">
                            <ServiceIcon className="h-5 w-5" />
                          </div>
                        </div>

                        {/* Title and description */}
                        <h3 className="text-lg font-semibold text-ink mb-2">
                          {service.title}
                        </h3>
                        <p className="text-sm text-muted flex-grow mb-4">
                          {service.description}
                        </p>

                        {/* CTA Link */}
                        <div className="flex items-center gap-2 text-accent text-sm font-medium group-hover:gap-3 transition-all">
                          Learn more{' '}
                          <HiOutlineArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </motion.a>
                    </Reveal>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Part 2: Technical Excellence */}
          <div className="px-6 py-20 md:py-28">
            <div className="mx-auto max-w-6xl">
              {/* Heading - Center aligned */}
              <Reveal className="mb-16 text-center">
                <h2 className="text-3xl font-semibold tracking-[-0.03em] text-ink md:text-4xl">
                  Technical Excellence
                </h2>
                <p className="mt-4 text-base font-normal text-muted md:text-lg">
                  Principles that guide our engineering approach
                </p>
              </Reveal>

              {/* Stat-Led Cards (3 columns) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {principles.map((principle, idx) => {
                  const PrincipleIcon = principle.icon
                  return (
                    <Reveal key={principle.title} delay={idx * 0.08}>
                      <motion.div
                        className="group rounded-lg border border-slate/15 bg-slate/[0.04] p-7 backdrop-blur-sm hover:border-accent/50 hover:bg-slate/[0.08] transition-all duration-300 h-full flex flex-col relative overflow-hidden"
                        whileHover={{ y: -4 }}
                      >
                        {/* Accent top border on hover */}
                        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Icon */}
                        <div className="flex items-center gap-3 mb-6">
                          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent/15 text-accent group-hover:bg-accent/25 transition-colors flex-shrink-0">
                            <PrincipleIcon className="h-5 w-5" />
                          </div>
                        </div>

                        {/* Lead Stat */}
                        <div className="mb-6">
                          <div className="text-3xl font-bold text-accent mb-1">
                            {principle.stat}
                          </div>
                          {principle.secondaryStat && (
                            <div className="text-sm text-muted/80">
                              {principle.secondaryStat} latency
                            </div>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-semibold text-ink mb-4">
                          {principle.title}
                        </h3>

                        {/* Bullets */}
                        <ul className="space-y-2 flex-grow">
                          {principle.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="text-sm text-muted/90 flex items-start gap-2"
                            >
                              <span className="h-1 w-1 rounded-full bg-accent/70 flex-shrink-0 mt-1.5" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </Reveal>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="relative px-6 py-20 border-t border-line">
        <div className="relative z-10 mx-auto max-w-6xl">
          <Reveal className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-medium tracking-[-0.03em] text-ink md:text-4xl">
              Implementation Process
            </h2>
            <p className="mt-3 text-base font-normal text-muted">
              A comprehensive, technical approach from concept to production
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {phases.map((phase, idx) => (
              <Reveal key={phase.step} delay={idx * 0.1}>
                <motion.div
                  className="rounded-[6px] border border-line bg-paper-raised p-7 hover:border-accent-dim transition-all duration-200 h-full flex flex-col hover:shadow-xl hover:shadow-accent/10"
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-[4px] border border-accent bg-accent/10 text-accent font-bold flex-shrink-0">
                      {phase.step}
                    </span>
                    <phase.icon className="h-5 w-5 text-accent" />
                  </div>

                  <h3 className="text-lg font-semibold text-ink mb-4">
                    {phase.title}
                  </h3>

                  <ul className="space-y-2 flex-grow">
                    {phase.details.map((detail) => (
                      <li
                        key={detail}
                        className="text-xs text-muted flex items-start gap-2"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-accent/60 mt-1 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <CTASection
          label="Ready to Get Started"
          heading="Let's build your next platform."
          body="Our technical team is ready to discuss your architecture requirements, scalability needs, and implementation timeline."
          ctaLabel="Schedule a Technical Consultation"
          to="/contact"
        />
      </section>
    </div>
  )
}
