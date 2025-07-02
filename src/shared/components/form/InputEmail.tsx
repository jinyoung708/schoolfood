/**
 * Component: InputText.tsx
 * Description: 텍스트 입력 컴포넌트
 * Props:
 *  - label?: string (입력 필드 라벨)
 *  - required?: boolean (필수 입력 여부, 라벨에 표시)
 *  - type?: string (input 타입, 기본 'text')
 *  - placeholder?: string (플레이스홀더 텍스트)
 *  - desc?: string (입력 필드 아래 설명 텍스트)
 *  - successMessage?: string (성공 메시지)
 *  - errorMessage?: string (에러 메시지)
 *  - btnName?: string (입력 필드 옆 버튼 텍스트)
 * Usage:
 *  <InputText label="아이디" required placeholder="아이디를 입력주세요." btnName="중복확인" desc="5~12자 영문 소문자, 숫자 가능" successMessage="사용 가능한 아이디입니다." errorMessage="사용 불가능한 아이디입니다." />
 */

import { Field, Input, Label } from '@headlessui/react';
import { cn } from '~/shared/utils';
import styles from '~/shared/css/Form.module.css';

interface InputEmailProps {
  label?: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  desc?: string;
  successMessage?: string;
  errorMessage?: string;
  className?: string;
}
export const InputEmail = ({
  label,
  required,
  type = 'text',
  placeholder,
  desc,
  successMessage,
  errorMessage,
  className,
}: InputEmailProps) => {
  return (
    <Field className={cn(styles.textWrap, className)}>
      {label && (
        <Label className={cn(required ? styles.required : '', styles.label)}>{label}</Label>
      )}
      <div className="flex gap-[8px] items-center">
        <div className="flex-1">
          <Input name="full_name" type={type} placeholder={placeholder} className="w-full" />
        </div>
        <span className="text-gray-500">@</span>
        <div className="flex-1">
          <select name="" id="" className="w-full">
            <option value="">직접입력</option>
          </select>
        </div>
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
