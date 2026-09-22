import PageHero from '../components/PageHero'
import careerBg from '../assets/img.jpg'

export default function Careers() {
  return (
    <div className="relative min-h-[calc(100vh-73px)] min-h-[600px] w-full overflow-hidden bg-paper text-ink">
      {/* Background Image: img.jpg fitted */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src={careerBg}
          alt=""
          className="h-full w-full object-fill opacity-80 md:opacity-90"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10">
        <PageHero
          title="Careers at Centricore Systems"
          description="Join our engineering teams building robust, secure, and scalable digital solutions that enable a smarter and safer world."
        />

        {/* Coming Soon Banner */}
        <section className="px-6 py-8">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-lg border border-slate/20 bg-white/70 px-6 py-4 md:px-8 md:py-6 shadow-md">
              <p className="text-base md:text-lg font-medium text-ink text-center">
                <span className="text-2xl md:text-3xl" style={{ color: '#E11D48' }}>"</span>More career opportunities and detailed position descriptions are coming soon.<span className="text-2xl md:text-3xl" style={{ color: '#E11D48' }}>"</span>
                <span className="block mt-2 text-sm md:text-base font-normal text-muted">
                  Please check back shortly or contact us at <a href="mailto:admin@centricoresystems.com" className="text-[#E11D48] hover:text-[#C41E3A] underline transition-colors">admin@centricoresystems.com</a> for inquiries.
                </span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
