'use client';

import { forwardRef, ButtonHTMLAttributes, ReactElement, isValidElement, ElementType, ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

type PolymorphicProps<C extends ElementType> = {
  as?: C;
  asChild?: boolean;
} & Omit<ComponentPropsWithoutRef<C>, 'as'>;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  fullWidth?: boolean;
}

export type ButtonPolymorphicProps<C extends ElementType = 'button'> = PolymorphicProps<C> & ButtonProps;

export const Button = forwardRef<HTMLButtonElement, ButtonPolymorphicProps>(
  ({ className, variant = 'primary', size = 'md', loading, fullWidth, disabled, children, as: Component = 'button', asChild = false, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variants = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-sm',
      secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200 focus:ring-slate-500 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700',
      outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20',
      ghost: 'text-slate-600 hover:bg-slate-100 focus:ring-slate-500 dark:text-slate-400 dark:hover:bg-slate-800',
      destructive: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-sm',
    };
    
    const sizes = {
      sm: 'px-3 py-1.5 text-sm gap-1.5',
      md: 'px-4 py-2 text-base gap-2',
      lg: 'px-6 py-3 text-lg gap-2',
      xl: 'px-8 py-4 text-xl gap-3',
    };

    // Handle asChild pattern - render the single child element with merged props
    if (asChild && isValidElement(children) && typeof children === 'object' && children !== null) {
      const child = children as ReactElement<any>;
      const childProps = child.props || {};
      
      return (
        <child.type
          ref={ref}
          className={cn(baseStyles, variants[variant], sizes[size], fullWidth && 'w-full', className, childProps.className)}
          disabled={disabled || loading}
          aria-disabled={disabled || loading}
          {...childProps}
          {...props}
        >
          {loading && (
            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          )}
          {child.props.children}
        </child.type>
      );
    }

    const componentType = Component as string;
    const isAnchor = componentType === 'a';
    const componentProps = isAnchor ? { href: (props as any).href } : {};

    return (
      <Component
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], fullWidth && 'w-full', className)}
        disabled={!isAnchor && (disabled || loading)}
        aria-disabled={isAnchor && (disabled || loading)}
        {...componentProps}
        {...props}
      >
        {loading && (
          <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        )}
        {children}
      </Component>
    );
  }
);

Button.displayName = 'Button';