/**
 * Component: SchoolWrite.tsx
 * Description: 우리학교 급식자랑 글쓰기 컴포넌트
 */

import { Button } from '@headlessui/react';
import { InputCheckbox } from '~/shared/components/form/InputCheckbox';
import { InputFileImage } from '~/shared/components/form/InputFileImage';
import { InputText } from '~/shared/components/form/InputText';
import { InputTextarea } from '~/shared/components/form/InputTextarea';
import { WriteList } from '~/shared/components/List/WriteList';
import { Subtop } from '~/shared/components/subtop';

export const SchoolWrite = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-[30px] lg:gap-[80px] pt-[16px] lg:pt-0">
        <Subtop
          pageTitle="우리학교 급식자랑"
          breadcrumb={['HOME', '커뮤니티', '우리학교 급식자랑']}
        />
      </div>
      <div className="lg:mt-[80px]">
        <WriteList>
          <InputText label="제목" placeholder="제목을 입력해주세요." />
          <InputTextarea label="제목" placeholder="급식을 소개해주세요." />
          <InputFileImage label="급식 등록" />
          <InputCheckbox className="gap-[8px] items-start">
            <span className="text-base">
              본 게시글에 개인정보 (이름, 연락처, 주소 등)가 포함되지 않았음을 확인합니다.{' '}
              <em className="text-point-red not-italic">(필수)</em>
            </span>
          </InputCheckbox>
          <div className="text-center">
            <Button className="w-full lg:max-w-[374px] btn-primary btn-xl">등록하기</Button>
          </div>
        </WriteList>
      </div>
    </div>
  );
};
