interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export default function SectionHeading({ title, subtitle, centered = true }: SectionHeadingProps) {
  return (
    <div className={`space-y-2 mb-8 ${centered ? "text-center" : ""}`}>
      {subtitle && (
        <p className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">{subtitle}</p>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
    </div>
  )
}
