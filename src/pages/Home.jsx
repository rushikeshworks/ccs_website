import { motion } from 'framer-motion'
import {
  EngineeringIcon,
  ComplianceIcon,
  IntegrationIcon,
  ReliabilityIcon,
} from '../components/FeatureIcons'
import Reveal from '../components/Reveal'
import FeatureGrid from '../components/FeatureGrid'
import CTASection from '../components/CTASection'
import { NavLink } from 'react-router-dom'
import vid3 from '../assets/vid3.mp4'
import vid4 from '../assets/vid4.mp4'
import performanceImage from '../assets/High-Performance Systems.png'
import securityImage from '../assets/Battle-Tested Security.png'
import agilityImage from '../assets/Agile & Efficient.png'
import { useRef, useEffect } from 'react'

const FEATURES = [
  {
    code: '01 · SYSTEMS',
    icon: EngineeringIcon,
    title: 'Distributed Systems & Cloud Computing',
    text: 'Multi-region deployment, edge computing, automatic failover, and high availability. Scalable cloud-native systems built for 24/7 reliability and real-time synchronization across distributed networks.',
  },
  {
    code: '02 · INTELLIGENCE',
    icon: ComplianceIcon,
    title: 'Applied AI, Machine Learning & OCR',
    text: 'Machine learning, predictive analytics, video analytics, computer vision, and optical character recognition (OCR) built into every platform to automate workflows and extract actionable intelligence at scale.',
  },
  {
    code: '03 · SECURITY',
    icon: IntegrationIcon,
    title: 'Data Security & Privacy',
    text: 'Zero Trust architecture, end-to-end encryption, continuous threat detection, and automated compliance. Security is engineered from the foundation to safeguard critical systems and sensitive data.',
  },
  {
    code: '04 · EMERGING TECH',
    icon: ReliabilityIcon,
    title: 'Blockchain & Next-Gen Platforms',
    text: 'Immutable ledgers, decentralized architectures, and blockchain-backed record systems bringing transparency, verifiable trust, and automation to modern enterprise workflows.',
  },
]

export default function Home() {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5
    }
  }, [])

  return (
    <div className="bg-paper text-ink">
      <section className="relative overflow-hidden px-6 pt-32 pb-28 md:pt-40 md:pb-40">
        {/* Live Video Background Layer: System Telemetry (vid3) */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover opacity-55 md:opacity-65"
            src={vid3}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Ambient crimson glow centered behind content */}
        <div aria-hidden="true" className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-[640px] rounded-full bg-[#E11D48]/15 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-center">
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mx-auto max-w-5xl text-3xl font-normal leading-[1.02] tracking-[-0.04em] sm:text-4xl md:text-5xl lg:text-[54px] xl:text-6xl text-white drop-shadow-md text-center"
            >
              <span className="block text-white">The Software Solutions Partner Behind Intelligent & Secure Platforms</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="mt-6 max-w-2xl text-base font-normal leading-relaxed text-white/80 md:text-lg drop-shadow-sm text-center"
            >
Work with us to modernize your infrastructure and automate your operations with cloud-native systems, agentic AI, and secure data platforms.</motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-3.5"
            >
              <NavLink
                to="/solutions"
                className="rounded-[4px] bg-[#E11D48] px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#9F1239] active:bg-[#7a1025] hover:shadow-lg hover:shadow-[#000000]/40"
              >
                Explore Our Solutions
              </NavLink>
              <NavLink
                to="/about"
                className="rounded-[4px] border border-white/35 bg-white/15 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate/40 hover:border-slate/60 hover:shadow-lg hover:shadow-[#000000]/40 backdrop-blur-sm"
              >
                About Centricore
              </NavLink>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-20 border-t border-line">
        <div className="relative z-10 mx-auto max-w-6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-medium tracking-[-0.03em] text-ink md:text-4xl">
              Our Technology Stack
            </h2>
            <p className="mt-3 text-base font-normal text-muted">
              Spanning distributed systems, edge and cloud computing, artificial intelligence, video analytics, machine learning, OCR, blockchain, and cybersecurity.
            </p>
          </Reveal>

          <div className="mt-12">
            <FeatureGrid features={FEATURES} />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative px-6 py-20 border-t border-line overflow-hidden">
        {/* Background Video */}
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
            src={vid4}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">
          <Reveal className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-medium tracking-[-0.03em] text-white md:text-4xl" style={{color: '#FFFFFF'}}>
              Why Choose Us
            </h2>
            <p className="mt-3 text-base font-normal text-white" style={{color: '#FFFFFF'}}>
              The right technology partner makes all the difference. Here's why teams choose us.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
            {[
              {
                title: 'High-Performance Systems',
                description: 'Build systems that grow with you. From thousands to millions of users, our architecture handles real-time processing, distributed databases, and cloud infrastructure designed for speed and efficiency.',
                image: performanceImage,
              },
              {
                title: 'Battle-Tested Security',
                description: 'Enterprise-grade protection at every layer. Zero Trust architecture, end-to-end encryption, automated compliance monitoring, and threat detection that keep your data and systems secure.',
                image: securityImage,
              },
              {
                title: 'Agile & Efficient',
                description: 'Move fast without breaking things. We combine startup agility with engineering rigor. Rapid prototyping, continuous deployment, and pragmatic solutions that deliver results.',
                image: agilityImage,
              },
            ].map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.1}>
                <motion.div
                  className="group rounded-lg border border-white/20 bg-black/50 backdrop-blur-sm hover:border-white/60 hover:bg-black/60 transition-all duration-300 h-full flex flex-col relative overflow-hidden"
                  whileHover={{ y: -4 }}
                >
                  {/* Accent top border on hover */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Image Container */}
                  <div className="relative h-48 md:h-52 lg:h-56 overflow-hidden flex items-center justify-center">
                    {item.image ? (
                      <>
                        <img
                          src={item.image}
                          alt=""
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </>
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-accent/10 to-accent/5" />
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col flex-grow p-4 text-justify -mt-1">
                    {/* Title */}
                    <h3 className="text-sm font-semibold text-white mb-2 leading-tight" style={{color: '#FFFFFF'}}>
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-white flex-grow mb-3 leading-relaxed" style={{color: '#FFFFFF'}}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <CTASection
          label="Work With Us"
          heading="Let's talk about what you're building."
          body="Whether you're architecting distributed infrastructure, integrating applied AI and video analytics, or strengthening cybersecurity, our engineering team is ready to collaborate."
          ctaLabel="Get in Touch"
          to="/contact"
        />
      </section>
    </div>
  )
}
