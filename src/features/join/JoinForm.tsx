/**
 * Component: JoinForm.tsx
 * Description: 회원가입 폼 컴포넌트
 */
import { Button } from '@headlessui/react';
import { useMediaQuery } from 'react-responsive';
import { InputRadio } from '~/shared/components/form/InputRadio';
import { InputSearch } from '~/shared/components/form/InputSearch';
import { TermsOfService } from '~/shared/components/form/TermsOfService';
import { InputText } from '~/shared/components/form/InputText';
import styles from '~/shared/css/Join.module.css';
import { cn } from '~/shared/utils';
import { InputEmail } from '~/shared/components/form/InputEmail';
import { Subtop } from '~/shared/components/subtop';
import { WriteList } from '~/shared/components/List/WriteList';

export const JoinForm = () => {
  const isPC = useMediaQuery({ minWidth: 1024 });

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-[30px] lg:gap-[80px] pt-[16px] lg:pt-0">
        <Subtop pageTitle="회원가입" />
      </div>
      <div className="lg:mt-[80px] w-full max-w-[756px] mx-auto">
        <p className="text-gray-500 text-xs text-right mb-[-8px] lg:mb-[6px]">
          <span className="text-point-red">*</span> 필수입력사항
        </p>
        <WriteList className={styles.joinWrap}>
          <div className={cn(styles.form)}>
            <div>
              <InputText label="이름" placeholder="실명을 사용해주세요." required />
            </div>
            <div>
              <InputText
                label="아이디"
                placeholder="아이디를 입력해주세요."
                required
                btnName="중복확인"
                desc="5~12자 영문 소문자, 숫자 가능"
                errorMessage="사용 불가능한 아이디입니다."
                successMessage="사용 가능한 아이디입니다."
              />
            </div>
            <div>
              <InputText
                label="비밀번호"
                placeholder="비밀번호를 입력해주세요."
                required
                desc="8자 이상 영문, 숫자, 특수문자 조합"
              />
            </div>
            <div>
              <InputText
                label="비밀번호 확인"
                placeholder="비밀번호를 한번 더 입력해주세요."
                required
              />
            </div>
            <div>
              <InputText
                label="휴대폰"
                placeholder={isPC ? '전화번호를 입력해주세요.' : '전화번호 입력'}
                required
                btnName="인증번호 전송"
              />
              <InputText
                placeholder={isPC ? '인증번호를 입력해주세요.' : '인증번호 입력'}
                required
                time
                btnName="인증번호 확인"
                btnColor="btn-gray-400"
                errorMessage="인증번호를 잘못 입력했습니다. 다시 확인해주세요."
                successMessage="인증번호가 일치합니다."
                className="mt-[8px]"
              />
            </div>
            <div>
              <InputEmail label="이메일 주소" required />
            </div>
            <div>
              <InputRadio
                name="ageGroup"
                label="연령대"
                required
                options={['20대 이하', '30대', '40대', '50대', '60대 이상']}
                defaultValue="20대 이하"
              />
            </div>
            <div>
              <InputSearch />
            </div>
            <div>
              <InputText
                label="식수"
                placeholder="식수를 숫자만 입력해주세요."
                required
                type="number"
              />
            </div>
            <div>
              <InputRadio
                name="joinPath"
                label="가입경로"
                required
                options={['담당 영업사원', 'sns', '검색', '기타']}
                defaultValue="담당 영업사원"
              />
            </div>
            <div className="pt-[25px] lg:pt-[30px] border-t-[2px] border-gray-800">
              <TermsOfService />
            </div>
          </div>
          <div className="w-full max-w-[375px] mx-auto mt-[10px] lg:mt-[50px]">
            <Button className="w-full btn-primary btn-xl">회원가입</Button>
          </div>
        </WriteList>
      </div>
    </div>
  );
};
