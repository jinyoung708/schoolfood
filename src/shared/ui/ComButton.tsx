/* eslint-disable react/require-default-props */
import { ButtonHTMLAttributes } from 'react';
import { cn } from '~/shared/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnId?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  label: string;
  icon?: {
    position: string;
    name: string;
  };
  variant?: 'primary' | 'outline' | 'ghost';
}

export const ComButton = ({
  btnId,
  type,
  className,
  label,
  icon,
  variant,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type ?? 'button'}
      id={btnId}
      className={cn(
        'rounded-xl px-4 h-8 text-center text-sm font-medium shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 relative z-10 flex items-center gap-x-1',
        {
          'bg-gray-700 hover:bg-black text-white': variant === 'primary',
          'border border-blue-900 text-blue-900 hover:border-blue-800 hover:text-blue-800 focus:text-blue-800':
            variant === 'outline',
          'border-0 px-0 font-bold text-blue-900 hover:text-blue-800 focus:text-blue-800':
            variant === 'ghost',
          [className || '']: className,
        },
      )}
      {...props}
    >
      {label}
    </button>
  );
};
