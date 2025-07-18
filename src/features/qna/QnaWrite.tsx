/**
 * Component: QnaWrite.tsx
 * Description: Q&A 글쓰기 페이지 컴포넌트
 */
import { Button } from '@headlessui/react';
import { InputCheckbox } from '~/shared/components/form/InputCheckbox';
import { InputEditor } from '~/shared/components/form/InputEditor';
import { InputRadio } from '~/shared/components/form/InputRadio';
import { InputText } from '~/shared/components/form/InputText';
import { WriteList } from '~/shared/components/List/WriteList';
import { Subtop } from '~/shared/components/subtop';

export const QnaWrite = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-[30px] lg:gap-[80px] pt-[16px] lg:pt-0">
        <Subtop pageTitle="Q&A" breadcrumb={['HOME', '커뮤니티', 'Q&A']} />
      </div>
      <div className="lg:mt-[80px]">
        <WriteList>
          <InputRadio label="분류" options={['Q&A', '튼튼스쿨에 바라는 점']} defaultValue="Q&A" />
          <InputText label="제목" placeholder="제목을 입력해주세요." />
          <InputEditor label="내용" />
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
