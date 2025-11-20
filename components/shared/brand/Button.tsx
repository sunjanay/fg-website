import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-navy text-white hover:bg-navy/90',
        secondary: 'bg-blue text-white hover:bg-blue/90',
        teal: 'bg-teal text-white hover:bg-teal/90',
        orange: 'bg-orange text-white hover:bg-orange/90',
        outline: 'border-2 border-navy text-navy hover:bg-navy hover:text-white',
        ghost: 'hover:bg-gray-100',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6',
        lg: 'h-13 px-8 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
