'use client'

import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'whatsapp' | 'gold'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  href?: string
  external?: boolean
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-wine text-cream-50 hover:bg-wine-dark shadow-warm-md hover:shadow-warm-lg border border-wine hover:border-wine-dark',
  secondary:
    'bg-transparent text-wine border border-wine hover:bg-wine hover:text-cream-50',
  ghost:
    'bg-transparent text-brown hover:text-wine hover:bg-cream-300 border border-transparent',
  whatsapp:
    'bg-[#25D366] text-white hover:bg-[#1DAA54] shadow-md hover:shadow-lg border border-[#25D366]',
  gold:
    'bg-gold text-charcoal hover:bg-gold-dark shadow-gold hover:shadow-lg border border-gold',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-base gap-2',
  lg: 'px-8 py-4 text-lg gap-2.5',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      icon,
      iconPosition = 'left',
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-full font-inter font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-wine/30 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none'

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || loading}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {loading ? (
          <Loader2 className="animate-spin" size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />
        ) : (
          iconPosition === 'left' && icon && icon
        )}
        {children}
        {!loading && iconPosition === 'right' && icon && icon}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

interface LinkButtonProps extends Omit<ButtonProps, 'href'> {
  href: string
  external?: boolean
}

export function LinkButton({ href, external, ...props }: LinkButtonProps) {
  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'inline-flex items-center justify-center rounded-full font-inter font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-wine/30 focus:ring-offset-2 select-none',
        variants[props.variant || 'primary'],
        sizes[props.size || 'md'],
        props.className
      )}
    >
      {props.icon && props.iconPosition !== 'right' && props.icon}
      {props.children}
      {props.icon && props.iconPosition === 'right' && props.icon}
    </motion.a>
  )
}

export default Button
