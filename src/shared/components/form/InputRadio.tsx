/**
 * Component: InputRadio.tsx
 * Description: 라디오 버튼 입력 컴포넌트
 * Props:
 *  - options: string[] (라디오 버튼 항목 리스트)
 *  - defaultValue?: string (기본 선택값, 생략 시 첫 번째 항목 선택)
 * Usage:
 *  <InputRadio options={['옵션1', '옵션2']} defaultValue="옵션1" />
 */
import { useState } from 'react';
import styles from '~/shared/css/Form.module.css';
import { cn } from '~/shared/utils';

interface InputRadioProps {
  label?: string;
  required?: boolean;
  options: string[];
  defaultValue?: string;
  className?: string;
}

export const InputRadio = ({
  label,
  required,
  options,
  defaultValue,
  className,
}: InputRadioProps) => {
  const [selected, setSelected] = useState(defaultValue ?? options[0]);

  return (
    <div className={cn(styles.radioWrap, className)}>
      {label && <p className={cn(required ? styles.required : '', styles.label)}>{label}</p>}
      <div role="radiogroup" className="flex gap-x-[40px] gap-y-[16px] flex-wrap">
        {options.map((option, index) => {
          const id = `input-radio-${index}`;
          return (
            <label
              key={option}
              htmlFor={id}
              className="flex items-center cursor-pointer select-none gap-[8px]"
            >
              <input
                id={id}
                type="radio"
                name="input-radio"
                value={option}
                checked={selected === option}
                onChange={() => setSelected(option)}
                className="hidden"
              />
              <span className={cn(styles.ico, selected === option ? styles.check : '')} />
              {option}
            </label>
          );
        })}
      </div>
    </div>
  );
};
