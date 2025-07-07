import { useState } from 'react';
import { ComSwitch } from '~/shared/ui/ComSwitch';

export const PriceInfo = () => {
  const [enabled, setEnabled] = useState(true);
  return (
    <>
      {/* 회원/비회원 레이아웃 동일하고 내부 컨텐츠만 다름 */}
      {/* 회원 */}
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-[4px] lg:gap-[8px]">
          <div className="flex items-center gap-[8px] lg:gap-[16px]">
            <span className="lg:text-lg text-gray-500">규격단가</span>
            <span className="lg:text-lg text-placeholder line-through">
              <span className="sr-only">할인 전</span>10,200원
            </span>
          </div>
          <div className="flex items-center gap-[8px] lg:gap-[16px]">
            <span className="text-2xl lg:text-[32px] lg:leading-[46px] text-secondary font-semibold">
              <span className="sr-only">할인율</span>15%
            </span>
            <span className="text-2xl lg:text-[32px] lg:leading-[46px] font-semibold">
              <span className="sr-only">판매가</span>8,790원
            </span>
          </div>
        </div>
        <div className="flex items-center gap-[8px]">
          <span className="text-sm lg:text-sm text-gray-500">VAT 포함</span>
          <ComSwitch checked={enabled} onChange={setEnabled} />
        </div>
      </div>
      {/* 비회원 */}
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-[4px] lg:gap-[8px]">
          <div className="flex items-center gap-[8px] lg:gap-[16px]">
            <span className="lg:text-lg text-gray-500">규격단가</span>
          </div>
          <div className="flex items-center gap-[8px] lg:gap-[16px]">
            <span className="text-2xl lg:text-[32px] lg:leading-[46px] font-semibold">
              회원전용
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
