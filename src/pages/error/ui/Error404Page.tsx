import { Button } from '@headlessui/react';
import { Icon } from '~/shared/components/Icon';

/* eslint-disable jsx-a11y/anchor-is-valid */
export const Error404Page = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col pb-[30px] lg:pb-[120px] pt-[40px] lg:pt-[140px]">
        <div className="mb-[30px] lg:mb-[40px] text-center">
          <Icon src="error2.svg" className="inline-block" />
        </div>
        <div className="text-center">
          <p className="text-22 lg:text-34 font-medium mb-[8px]">
            요청하신 페이지를 <br className="block lg:hidden" />
            찾을 수 없습니다.
          </p>
          <p className="text-base lg:text-22 text-gray-500">
            입력하신 문구가 잘못 되었거나, 접근 권한이 없거나, 요청하신 페이지가 존재하지 않을 수
            있습니다.
          </p>
        </div>
        <div className="flex gap-[8px] w-full max-w-[756px] mx-auto mt-[40px] lg:mt-[80px]">
          <Button className="btn-border-primary btn-xl flex-1 px-[10px]">이전 페이지로</Button>
          <Button className="btn-primary btn-xl flex-1 px-[10px]">메인으로</Button>
        </div>
      </div>
    </div>
  );
};
