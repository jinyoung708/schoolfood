/**
 * Component: Textarea.tsx
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

import { Field, Label } from '@headlessui/react';
import { cn } from '~/shared/utils';
import styles from '~/shared/css/Form.module.css';

interface InputEditorProps {
  label?: string;
  required?: boolean;
  className?: string;
}
export const InputEditor = ({ label, required, className }: InputEditorProps) => {
  return (
    <Field className={cn(styles.textareaWrap, className)}>
      {label && (
        <Label className={cn(required ? styles.required : '', styles.label)}>{label}</Label>
      )}
      <div className="h-[500px] lg:h-[544px]">에디터영역</div>
    </Field>
  );
};
