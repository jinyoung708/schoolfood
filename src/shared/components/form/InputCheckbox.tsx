import { ReactNode, useState, useId } from 'react';
import { cn } from '~/shared/utils';
import { Icon } from '../Icon';

interface InputCheckboxProps {
  children?: ReactNode;
  className?: string;
}

export const InputCheckbox = ({ children, className }: InputCheckboxProps) => {
  const [checked, setChecked] = useState(false);
  const id = useId();

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={handleChange}
        className="sr-only"
      />
      <label
        htmlFor={id}
        className={cn('inline-flex items-center gap-[4px] cursor-pointer', className)}
      >
        {checked ? <Icon src="checkbox_check.svg" /> : <Icon src="checkbox.svg" />}
        {children}
      </label>
    </>
  );
};
