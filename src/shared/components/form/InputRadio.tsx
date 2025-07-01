/**
 * Component: InputRadio.tsx
 * Description: 라디오 버튼 입력 컴포넌트
 * Props:
 *  - label?: string (라벨 텍스트)
 *  - required?: boolean (필수 항목 여부)
 *  - options: string[] (라디오 버튼 항목 리스트)
 *  - defaultValue?: string (기본 선택값, 생략 시 첫 번째 항목 선택)
 *  - className?: string (추가 스타일 클래스)
 *  - name?: string (radio 그룹의 name 속성, 고유해야 그룹이 분리됨)
 * Usage:
 *  <InputRadio
 *    label="연령대"
 *    name="ageGroup"
 *    required
 *    options={['10대', '20대', '30대']}
 *    defaultValue="20대"
 *  />
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
  name?: string;
}

export const InputRadio = ({
  label,
  required,
  options,
  defaultValue,
  className,
  name,
}: InputRadioProps) => {
  const [selected, setSelected] = useState(defaultValue ?? options[0]);

  return (
    <div className={cn(styles.radioWrap, className)}>
      {label && <p className={cn(required ? styles.required : '', styles.label)}>{label}</p>}
      <div role="radiogroup" className="flex gap-x-[40px] gap-y-[16px] flex-wrap">
        {options.map((option, index) => {
          const id = `${name}-${index}`;
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
