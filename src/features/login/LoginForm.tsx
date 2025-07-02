/**
 * Component: LoginForm.tsx
 * Description: 로그인 폼 컴포넌트
 */
import { Link } from 'react-router-dom';
import { Button, Input } from '@headlessui/react';
import { Icon } from '~/shared/components/Icon';
import { InputCheckbox } from '~/shared/components/form/InputCheckbox';
import styles from '~/shared/css/Login.module.css';
import { cn } from '~/shared/utils';
import { Subtop } from '~/shared/components/subtop';
import { Mobile, PC } from '~/shared/components/Responsive';

export const LoginForm = () => {
  return (
    <div className="container mx-auto">
      <Subtop pageTitle="로그인" />

      <div className="flex flex-col mt-[30px] lg:mt-[80px] max-w-[496px] mx-auto">
        <div className="block lg:hidden text-center text-[0px] mb-[30px]">
          <Link to="" className="inline-block">
            <Icon src="logo.svg" width={80} alt="튼튼스쿨" />
          </Link>
        </div>

        <Input placeholder="아이디를 입력해주세요." className={cn('mb-[8px]', styles.input)} />
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요."
          className={cn('mb-[8px]', styles.input)}
        />
        <div className="flex items-center">
          <InputCheckbox className={styles.check}>아이디 저장</InputCheckbox>
          <InputCheckbox className={styles.check}>로그인 유지</InputCheckbox>
          <PC>
            <ul className={cn('flex ml-auto', styles.linkList)}>
              <li>
                <Link to="">아이디찾기</Link>
              </li>
              <li>
                <Link to="">비밀번호 재설정</Link>
              </li>
            </ul>
          </PC>
        </div>
        <Button className="btn-primary btn-xl mt-[24px] lg:mt-[30px]">로그인</Button>
        <Mobile>
          <ul className={cn('flex justify-center mt-[40px] lg:mt-0', styles.linkList)}>
            <li>
              <Link to="">아이디찾기</Link>
            </li>
            <li>
              <Link to="">비밀번호 재설정</Link>
            </li>
          </ul>
        </Mobile>
        <p className="text-sm text-gray-500 mt-[16px] lg:mt-[40px] text-center">
          아직 튼튼스쿨 회원이 아니신가요?{' '}
          <Link to="" className="text-primary font-medium">
            회원가입
          </Link>
        </p>
      </div>
    </div>
  );
};
