import { cn } from '@/lib/utils'

interface SectionTitleProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  light?: boolean
  className?: string
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className,
}: SectionTitleProps) {
  const alignClass = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
  }[align]

  return (
    <div className={cn('flex flex-col gap-4', alignClass, className)}>
      {eyebrow && (
        <span
          className={cn(
            'font-inter text-sm font-semibold uppercase tracking-[0.2em]',
            light ? 'text-gold-light' : 'text-wine'
          )}
        >
          {eyebrow}
        </span>
      )}

      <h2
        className={cn(
          'font-playfair font-bold leading-tight',
          'text-display-sm md:text-display-md',
          light ? 'text-cream-50' : 'text-charcoal'
        )}
      >
        {title}
      </h2>

      {/* Decorative line */}
      <div
        className={cn(
          'flex',
          align === 'center' ? 'justify-center' : align === 'right' ? 'justify-end' : 'justify-start'
        )}
      >
        <div className="flex items-center gap-2">
          <div className="h-px w-8 bg-gold/40" />
          <div className="h-1 w-8 rounded-full bg-gold" />
          <div className="h-px w-8 bg-gold/40" />
        </div>
      </div>

      {subtitle && (
        <p
          className={cn(
            'font-lora text-lg leading-relaxed max-w-2xl',
            light ? 'text-cream-300' : 'text-brown/80'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
