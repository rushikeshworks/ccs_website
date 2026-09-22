import Reveal from './Reveal'
import FeatureCard from './FeatureCard'

export default function FeatureGrid({ features }) {
  return (
    <Reveal>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 items-stretch">
        {features.map((feature, i) => (
          <FeatureCard key={feature.title} {...feature} featured={i === 0} />
        ))}
      </div>
    </Reveal>
  )
}
