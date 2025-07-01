/**
 * Component: EditProfile.tsx
 * Description: 개인정보 수정 컴포넌트
 */
import { Button } from '@headlessui/react';
import { Subtop } from '../../shared/components/subtop';
import { WriteList } from '~/shared/components/List/WriteList';
import { InputText } from '~/shared/components/form/InputText';
import { InputEmail } from '~/shared/components/form/InputEmail';
import { InputRadio } from '~/shared/components/form/InputRadio';
import { InputSearch } from '~/shared/components/form/InputSearch';
import styles from '~/shared/css/Join.module.css';
import { cn } from '~/shared/utils';
import { InputCheckbox } from '~/shared/components/form/InputCheckbox';
import { Icon } from '~/shared/components/Icon';

export const EditProfile = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-[30px] lg:gap-[80px] pt-[16px] lg:pt-0">
        <Subtop
          pageTitle="마이페이지"
          breadcrumb={['HOME', '마이페이지']}
          submenu={['관심상품', '작성한 글', '개인정보 수정']}
        />
      </div>

      {/* 1) 비밀번호 재확인 */}
      <div className="mt-[30px] lg:mt-[80px] w-full max-w-[756px] mx-auto">
        <p className="text-xl font-medium mb-[4px]">비밀번호 재확인</p>
        <p className="text-base text-gray-500 mb-[24px]">
          고객 정보를 안전하게 보호하기 위해 비밀번호를 다시 한 번 확인해주세요.
        </p>
        <WriteList className={cn(styles.joinWrap)}>
          <div className={cn(styles.form, 'border-b-0 pb-0')}>
            <div>
              <InputText
                label="아이디"
                placeholder="아이디를 입력해주세요."
                value="cjfw1234"
                readOnly
              />
            </div>
            <div>
              <InputText label="비밀번호 확인" placeholder="비밀번호를 한번 더 입력해주세요." />
            </div>
          </div>
          <div className="w-full max-w-[375px] mx-auto mt-[10px] lg:mt-[50px]">
            <Button className="w-full btn-primary btn-xl">비밀번호 확인</Button>
          </div>
        </WriteList>
      </div>

      {/* 2) 개인정보 수정 */}
      <div className="mt-[30px] lg:mt-[80px] w-full max-w-[756px] mx-auto">
        <WriteList className={cn(styles.joinWrap, 'gap-0')}>
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
                placeholder="전화번호를 입력해주세요."
                required
                btnName="인증번호 전송"
              />
              <InputText
                placeholder="인증번호를 입력해주세요."
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
            <div className="border-t-2 border-gray-800 pt-[24px] lg:pt-[30px]">
              <p className="mb-[12px] text-base font-medium">마케팅 수신 동의</p>
              <div className="flex gap-[40px] mb-[12px] lg:mb-[16px]">
                <InputCheckbox className="gap-[8px] text-base">SMS</InputCheckbox>
                <InputCheckbox className="gap-[8px] text-base">이메일</InputCheckbox>
              </div>
              <p className="text-sm text-gray-500">
                선택 동의 항목 동의를 거부하는 경우에도 튼튼스쿨 서비스를 이용할 수 있으나, 이벤트
                및 할인정보 수신 등의 부가 혜택 및 서비스는 제공받지 못할 수 있습니다.
              </p>
            </div>
          </div>
          <div className="text-right mt-[8px]">
            <Button className="inline-flex gap-[4px] items-center text-sm font-medium text-gray-500">
              탈퇴하기
              <Icon src="breadcrumb_arrow.svg" />
            </Button>
          </div>
          <div className="w-full max-w-[375px] mx-auto mt-[10px] lg:mt-[50px]">
            <Button className="w-full btn-primary btn-xl">회원정보 수정</Button>
          </div>
        </WriteList>
      </div>
    </div>
  );
};
