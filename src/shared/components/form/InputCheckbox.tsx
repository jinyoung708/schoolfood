import { ReactNode, useState, useId } from 'react';
import { cn } from '~/shared/utils';
import { Icon } from '../Icon';

interface InputCheckboxProps {
  children?: ReactNode;
  className?: string;
  iconSize?: string;
  type2?: boolean;
}

export const InputCheckbox = ({ children, className, iconSize, type2 }: InputCheckboxProps) => {
  const [checked, setChecked] = useState(false);
  const id = useId();

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <label
      htmlFor={id}
      className={cn(
        'inline-flex items-center gap-[4px] cursor-pointer',
        className,
        type2 && checked && 'font-medium text-secondary lg:font-normal lg:text-gray-800',
      )}
    >
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={handleChange}
        className="sr-only"
      />
      {checked ? (
        <Icon src="checkbox_check.svg" className={cn(iconSize)} />
      ) : (
        <Icon src="checkbox.svg" className={cn(iconSize)} />
      )}
      {children}
    </label>
  );
};
