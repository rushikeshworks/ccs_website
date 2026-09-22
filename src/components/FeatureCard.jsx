export default function FeatureCard({ code, icon: Icon, title, text, className = '' }) {
  return (
    <div
      className={`group relative flex flex-col justify-between rounded-[4px] border border-slate/15 border-t-2 border-t-accent bg-slate/[0.04] backdrop-blur-sm p-6 sm:p-7 transition-all duration-200 hover:border-accent/50 hover:bg-slate/[0.08] hover:shadow-xl hover:shadow-accent/15 ${className}`}
    >
      <div>
        {/* Header Row: Category Label (DM Sans 500) + Icon */}
        <div className="flex items-center justify-between pb-4 border-b border-line">
          <span className="text-[11px] font-medium tracking-wider text-muted">
            {code}
          </span>
          <div className="flex h-8 w-8 items-center justify-center rounded-[4px] border border-line bg-paper text-accent transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-white">
            <Icon className="h-4 w-4" />
          </div>
        </div>

        {/* Feature Title (DM Sans 500) */}
        <h3 className="mt-4 text-lg font-medium tracking-[-0.02em] text-ink">
          {title}
        </h3>

        {/* Feature Description (DM Sans 400) */}
        <p className="mt-2 text-sm font-normal leading-relaxed text-muted text-justify">
          {text}
        </p>
      </div>
    </div>
  )
}
