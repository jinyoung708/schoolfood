import { Switch } from '@headlessui/react';
import { cn } from '../utils';

interface ComSwitchProps {
  checked?: boolean;
  onChange: (value: boolean) => void;
}

export const ComSwitch = ({ checked, onChange }: ComSwitchProps) => {
  return (
    <Switch
      checked={checked}
      onChange={onChange}
      className={cn(
        'flex w-[38px] h-[20px] lg:w-[48px] lg:h-[24px] items-center rounded-full transition',
        checked ? 'bg-secondary' : 'bg-gray-400',
      )}
    >
      <span
        className={cn(
          'size-4 lg:size-5 rounded-full bg-white transition',
          checked ? 'translate-x-[20px] lg:translate-x-[26px]' : 'translate-x-[2px]',
        )}
      />
    </Switch>
  );
};
