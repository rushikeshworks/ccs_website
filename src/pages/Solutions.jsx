import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'
import vid6 from '../assets/vid6.mp4'
import cloudImage from '../assets/Cloud & Distributed Systems.png'
import aiImage from '../assets/Agentic AI & Data Intelligence.png'
import securityImage from '../assets/Data Protection & Security.png'
import productImage from '../assets/Product & Platform Design.png'
import {
  HiOutlineSparkles,
  HiOutlineServer,
  HiOutlineShieldCheck,
  HiOutlineArrowRight,
  HiOutlineCog,
} from 'react-icons/hi'

export default function Solutions() {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5
    }
  }, [])

  // Services offered - TODO: Update descriptions and links
  const services = [
    {
      icon: HiOutlineServer,
      title: 'Cloud & Distributed Systems',
      description: 'Multi-region deployment, automatic failover, and 99.99% uptime. We architect globally distributed systems that scale seamlessly while maintaining zero data loss and sub-60 second recovery.',
      image: cloudImage,
      link: '#', // TODO: Update with actual route
    },
    {
      icon: HiOutlineSparkles,
      title: 'Agentic AI & Data Intelligence',
      description: 'Real-time ML inference at sub-100ms latency, computer vision, OCR with 97% accuracy, and intelligent automation. Process 100k+ events per second with production-grade models.',
      image: aiImage,
      link: '#', // TODO: Update with actual route
    },
    {
      icon: HiOutlineShieldCheck,
      title: 'Data Protection & Security',
      description: 'Zero Trust architecture, end-to-end encryption, and continuous threat detection. 96% threat accuracy with <5 second response time across 6 compliance frameworks.',
      image: securityImage,
      link: '#', // TODO: Update with actual route
    },
    {
      icon: HiOutlineCog,
      title: 'Product & Platform Design',
      description: 'System architecture, API design, and full-stack prototyping. We combine strategic planning with hands-on engineering to deliver platforms that scale.',
      image: productImage,
      link: '#', // TODO: Update with actual route
    },
  ]

  const techStack = [
    'AWS', 'Python', 'HashiCorp Vault', 'Java',
    'Kubernetes', 'PyTorch', 'Keycloak', 'Spring Boot',
    'Docker', 'TensorFlow', 'OAuth 2.0', '.NET',
    'Terraform', 'LangChain', 'Okta', 'Angular',
    'Apache Kafka', 'LangGraph', 'Splunk', 'React',
    'Microsoft Azure', 'Apache Spark', 'SonarQube', 'PostgreSQL',
    'Google Cloud', 'MLflow', 'Snyk', 'OpenAPI',
  ]

  const phases = [
    {
      step: '01',
      title: 'Discovery & Architecture',
      description: 'We map requirements, risks, and system design before writing any code.',
    },
    {
      step: '02',
      title: 'Development & Testing',
      description: 'Agile sprints with CI/CD pipelines and automated plus manual testing.',
    },
    {
      step: '03',
      title: 'Deployment & Monitoring',
      description: 'Production rollout with real-time monitoring and incident response.',
    },
    {
      step: '04',
      title: 'Support & Optimization',
      description: 'Ongoing support, security updates, and scalability management.',
    },
  ]

  return (
    <div className="relative bg-paper text-ink overflow-hidden">
      {/* Solutions & Services Section with background video */}
      <section className="relative overflow-hidden">
        {/* Background Video: vid6 */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            onLoadedMetadata={(e) => {
              e.currentTarget.playbackRate = 1.5
            }}
            className="h-full w-full object-cover"
            src={vid6}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10">
          {/* Hero - Solutions & Services */}
          <div className="px-6 pt-8 pb-12 md:pt-12 md:pb-16">
            <div className="mx-auto max-w-5xl text-center">
              <motion.h1
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight text-white drop-shadow-md"
                style={{ letterSpacing: '0.08em', color: '#FFFFFF' }}
              >
                Solutions & Services
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="mt-4 max-w-3xl mx-auto text-base font-normal leading-relaxed text-white md:text-lg drop-shadow-md"
                style={{ color: '#FFFFFF' }}
              >
                Enterprise-grade technology solutions engineered for scale, security, and measurable impact. From distributed systems to artificial intelligence, we build platforms that power digital transformation.
              </motion.p>
            </div>

            {/* Services Grid (4 columns: desktop, 2: tablet, 1: mobile) */}
            <div className="mx-auto max-w-6xl mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {services.map((service, idx) => {
                  const ServiceIcon = service.icon
                  return (
                    <Reveal key={service.title} delay={idx * 0.08}>
                      <motion.a
                        href={service.link}
                        className="group rounded-lg border border-white/20 bg-black/50 backdrop-blur-sm hover:border-white/60 hover:bg-black/60 transition-all duration-300 h-full flex flex-col relative overflow-hidden"
                        whileHover={{ y: -4 }}
                      >
                        {/* Accent top border on hover */}
                        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Image Container */}
                        <div className="relative h-32 md:h-36 lg:h-40 -m-0 overflow-hidden rounded-t-lg">
                          {service.image ? (
                            <>
                              <img
                                src={service.image}
                                alt=""
                                loading="lazy"
                                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </>
                          ) : (
                            <div className="h-full w-full bg-gradient-to-br from-accent/10 to-accent/5" />
                          )}
                        </div>

                        {/* Content Section */}
                        <div className="flex flex-col flex-grow p-4 text-justify">
                          {/* Title */}
                          <h3 className="text-sm font-semibold text-white mb-2 leading-tight" style={{color: '#FFFFFF'}}>
                            {service.title}
                          </h3>

                          {/* Description */}
                          <p className="text-xs text-white flex-grow mb-3 leading-relaxed" style={{color: '#FFFFFF'}}>
                            {service.description}
                          </p>
                        </div>
                      </motion.a>
                    </Reveal>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Strip - Animated Marquee */}
      <section className="relative px-6 py-8 md:py-12 bg-paper border-t border-line/40">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h3 className="text-lg md:text-xl font-semibold text-ink">
              Technologies we work with
            </h3>
          </div>
          <div className="relative overflow-hidden">
            {/* Marquee container with fade effect */}
            <div className="relative">
              {/* Fade overlay - left */}
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-paper to-transparent z-10 pointer-events-none" />
              {/* Fade overlay - right */}
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-paper to-transparent z-10 pointer-events-none" />

              {/* Scrolling content */}
              <style>{`
                @keyframes marquee {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(calc(-100% / 2));
                  }
                }

                @media (prefers-reduced-motion: no-preference) {
                  .marquee-content {
                    animation: marquee 18s linear infinite;
                  }
                }

                .marquee-content:hover {
                  animation-play-state: paused;
                }
              `}</style>

              <div className="marquee-content flex gap-6 md:gap-8 whitespace-nowrap">
                {/* First set */}
                {techStack.map((tech, idx) => (
                  <div
                    key={`${tech}-${idx}`}
                    className="flex-shrink-0 text-sm font-bold text-muted/60 hover:text-ink transition-colors duration-300"
                  >
                    {tech}
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {techStack.map((tech, idx) => (
                  <div
                    key={`${tech}-duplicate-${idx}`}
                    className="flex-shrink-0 text-sm font-bold text-muted/60 hover:text-ink transition-colors duration-300"
                    aria-hidden="true"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Deliver Timeline */}
      <section className="relative px-6 py-16 md:py-24 bg-paper border-t border-line">
        <div className="mx-auto max-w-6xl">
          {/* Heading */}
          <Reveal className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-ink md:text-4xl">
              How We Deliver
            </h2>
            <p className="mt-4 text-base font-normal text-muted">
              A comprehensive, technical approach from concept to production
            </p>
          </Reveal>

          {/* Horizontal Timeline (desktop) / Vertical Timeline (mobile) */}
          <div className="hidden md:block">
            {/* Desktop: Horizontal Timeline */}
            <div className="relative pt-12 pb-4">
              {/* Timeline line */}
              <div className="absolute top-0 left-12 right-12 h-0.5 bg-gradient-to-r from-accent/40 via-accent/20 to-accent/40" />

              <div className="grid grid-cols-4 gap-4">
                {phases.map((phase, idx) => (
                  <Reveal key={phase.step} delay={idx * 0.1}>
                    <div className="flex flex-col items-center">
                      {/* Node */}
                      <div className="relative z-10 mb-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent bg-paper text-accent font-bold text-sm">
                          {phase.step}
                        </div>
                        {/* Soft glow */}
                        <div className="absolute inset-0 rounded-full bg-accent/20 blur-lg opacity-50" />
                      </div>

                      {/* Content */}
                      <h3 className="text-base font-semibold text-ink text-center mb-2">
                        {phase.title}
                      </h3>
                      <p className="text-sm text-muted text-center leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet: Vertical Timeline */}
          <div className="md:hidden">
            <ol className="relative space-y-12 pl-16">
              {/* Timeline line */}
              <div className="absolute left-3 top-2 bottom-0 w-0.5 bg-gradient-to-b from-accent/40 via-accent/20 to-accent/40" />

              {phases.map((phase, idx) => (
                <Reveal key={phase.step} delay={idx * 0.1}>
                  <li className="relative">
                    {/* Node */}
                    <div className="absolute -left-7 top-1">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent bg-paper text-accent font-bold text-xs">
                        {phase.step}
                      </div>
                      <div className="absolute inset-0 rounded-full bg-accent/20 blur-lg opacity-50" />
                    </div>

                    {/* Content */}
                    <div className="mt-3 pl-4">
                      <h3 className="text-base font-semibold text-ink mb-1">
                        {phase.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
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
