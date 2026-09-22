// Consistent set of technical line-glyphs for the Features readout section
// Built with identical 1.5px stroke weight, 24x24 viewBox, and single-line outline treatment

export function EngineeringIcon({ className = 'h-4 w-4' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="5" r="2.5" />
      <circle cx="5" cy="18" r="2.5" />
      <circle cx="19" cy="18" r="2.5" />
      <line x1="12" y1="7.5" x2="6.8" y2="15.8" />
      <line x1="12" y1="7.5" x2="17.2" y2="15.8" />
      <line x1="7.5" y1="18" x2="16.5" y2="18" strokeDasharray="2 2" />
    </svg>
  )
}

export function ComplianceIcon({ className = 'h-4 w-4' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 3L4 6.5V12C4 16.5 7.5 20.2 12 21.5C16.5 20.2 20 16.5 20 12V6.5L12 3Z" />
      <path d="M9 12L11 14L15 10" />
    </svg>
  )
}

export function IntegrationIcon({ className = 'h-4 w-4' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 3L3 7.5L12 12L21 7.5L12 3Z" />
      <path d="M3 12L12 16.5L21 12" />
      <path d="M3 16.5L12 21L21 16.5" />
    </svg>
  )
}

export function ReliabilityIcon({ className = 'h-4 w-4' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M7 12H9.5L11 9L13 15L14.5 12H17" />
    </svg>
  )
}
