import { Icon } from '~/shared/components/Icon';

/* eslint-disable jsx-a11y/anchor-is-valid */
export const Maintenance = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col pb-[30px] lg:pb-[120px] pt-[40px] lg:pt-[140px]">
        <div className="mb-[30px] lg:mb-[40px] text-center">
          <Icon src="error2.svg" className="inline-block" />
        </div>
        <div className="text-center">
          <p className="text-22 lg:text-34 font-medium mb-[8px]">서비스 점검 중입니다.</p>
          <p className="text-base lg:text-22 text-gray-500">점검시간 : 0000년 0월 0일 00~00시</p>
        </div>
      </div>
    </div>
  );
};
