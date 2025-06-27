/**
 * Component: ToggleOption.tsx
 * Description: 드롭다운 컴포넌트
 * Props:
 *  - sortOptions?: string[] (선택 가능한 정렬 옵션 배열)
 * Usage:
 *  <ToggleOption sortOptions={['기본순', '낮은가격순', '높은가격순', '할인순']} />
 */
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { useState } from 'react';
import { cn } from '~/shared/utils';
import { Icon } from '../Icon';

interface ToggleOptionProps {
  sortOptions?: string[];
}

export const ToggleOption = ({ sortOptions = [] }: ToggleOptionProps) => {
  const [selected, setSelected] = useState(sortOptions[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <ListboxButton className="flex items-center gap-[8px] h-[40px] px-[8px] lg:px-[16px] text-sm lg:text-base font-medium text-[#333]">
            {selected}
            <Icon src="arrow_down2_gray.svg" className={cn(open ? '-rotate-180' : 'rotate-0')} />
          </ListboxButton>

          <ListboxOptions
            anchor="bottom"
            modal={false}
            className="border border-gray-300 rounded-[8px]"
          >
            {sortOptions.map((option) => (
              <ListboxOption
                key={option}
                value={option}
                className={({ selected, active }) =>
                  cn(
                    'p-[8px] lg:px-[16px] bg-white cursor-pointer text-gray-500 text-sm lg:text-base',
                    selected && 'bg-gray-100 text-gray-800 font-medium',
                    active && 'bg-gray-100',
                  )
                }
              >
                {option}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </>
      )}
    </Listbox>
  );
};
