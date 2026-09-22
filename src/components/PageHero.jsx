import { motion, useReducedMotion } from 'framer-motion'

export default function PageHero({ title, description, videoSrc }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-16 text-center border-b border-line/40">
      {videoSrc && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover opacity-50 md:opacity-60"
            src={videoSrc}
          />
        </div>
      )}

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="relative z-10 mx-auto max-w-3xl"
      >
        <h1 className="text-3xl md:text-5xl font-normal tracking-[-0.03em] text-white drop-shadow-sm" style={{color: '#FFFFFF'}}>
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-sm md:text-base font-normal leading-relaxed text-white max-w-2xl mx-auto" style={{color: '#FFFFFF'}}>
            {description}
          </p>
        )}
      </motion.div>
    </section>
  )
}
