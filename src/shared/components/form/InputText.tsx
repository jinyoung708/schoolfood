/**
 * Component: InputText.tsx
 * Description: 텍스트 입력 컴포넌트로, 내부 상태로 입력값을 관리합니다.
 * Props:
 *  - label?: string (입력 필드 라벨)
 *  - required?: boolean (필수 입력 여부, 라벨에 표시)
 *  - type?: string (input 타입, 기본 'text')
 *  - placeholder?: string (플레이스홀더 텍스트)
 *  - desc?: string (입력 필드 아래 설명 텍스트)
 *  - successMessage?: string (성공 메시지)
 *  - errorMessage?: string (에러 메시지)
 *  - btnName?: string (입력 필드 옆 버튼 텍스트)
 *  - btnColor?: string (버튼 색상 클래스)
 *  - className?: string (추가 클래스)
 *  - time?: boolean (입력 필드 왼쪽에 시간 표시 여부)
 *  - value?: string (초기 입력값, 내부 상태로 관리됨)
 *  - disable?: boolean (비활성화 여부)
 *  - readOnly?: boolean (읽기 전용 여부)
 *
 * Usage:
 *  <InputText
 *    label="아이디"
 *    required
 *    placeholder="아이디를 입력주세요."
 *    btnName="중복확인"
 *    desc="5~12자 영문 소문자, 숫자 가능"
 *    successMessage="사용 가능한 아이디입니다."
 *    errorMessage="사용 불가능한 아이디입니다."
 *  />
 */
import { Button, Field, Input, Label } from '@headlessui/react';
import { useState } from 'react';
import { cn } from '~/shared/utils';
import styles from '~/shared/css/Form.module.css';

interface InputTextProps {
  label?: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  desc?: string;
  successMessage?: string;
  errorMessage?: string;
  btnName?: string;
  btnColor?: string;
  className?: string;
  time?: boolean;
  value?: string;
  disable?: boolean;
  readOnly?: boolean;
}

export const InputText = ({
  label,
  required,
  type = 'text',
  placeholder,
  desc,
  successMessage,
  errorMessage,
  btnName,
  btnColor,
  className,
  time,
  value,
  disable,
  readOnly,
}: InputTextProps) => {
  const [inputValue, setInputValue] = useState(value ?? '');

  return (
    <Field className={cn(styles.textWrap, className)}>
      {label && (
        <Label className={cn(required ? styles.required : '', styles.label)}>{label}</Label>
      )}
      <div className="flex gap-[8px]">
        <div className="relative grow">
          {time && <span className={styles.time}>02:00</span>}
          <Input
            name="full_name"
            type={type}
            placeholder={placeholder}
            className="w-full"
            disabled={disable}
            readOnly={readOnly}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        {btnName && (
          <Button className={cn('btn-lg shrink-0', btnColor || 'btn-gray-500')}>{btnName}</Button>
        )}
      </div>
      {(desc || errorMessage || successMessage) && (
        <div className="flex flex-wrap gap-x-[8px] mt-[8px]">
          {desc && <span className={styles.info}>{desc}</span>}
          {errorMessage && <span className={styles.error}>{errorMessage}</span>}
          {successMessage && <span className={styles.check}>{successMessage}</span>}
        </div>
      )}
    </Field>
  );
};
