import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'ghost' | 'link'
  size?: 'sm' | 'md' | 'lg' | 'icon' | 'icon-sm' | 'icon-lg'
  asChild?: boolean
}

const variantClasses = {
  primary:
    'bg-accent text-accent-foreground shadow hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]',
  secondary:
    'border border-border bg-card text-foreground hover:bg-secondary hover:border-primary/20',
  tertiary: 'text-primary hover:bg-primary/10',
  danger: 'bg-danger text-white hover:opacity-90 hover:scale-[1.02]',
  ghost: 'hover:bg-secondary',
  link: 'text-primary underline-offset-4 hover:underline',
}

const sizeClasses = {
  sm: 'h-9 px-3 text-xs',
  md: 'h-10 px-4',
  lg: 'h-11 px-6 text-base',
  icon: 'h-10 w-10',
  'icon-sm': 'h-8 w-8',
  'icon-lg': 'h-12 w-12',
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      asChild = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(
          'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0',
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        ref={ref}
        disabled={disabled}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button }
