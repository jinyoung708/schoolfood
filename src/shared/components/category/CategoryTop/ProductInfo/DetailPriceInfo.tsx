import { Icon } from '~/shared/components/Icon';

export const DetailPriceInfo = () => {
  return (
    <dl className="flex flex-col gap-[2px]">
      {/* 회원/비회원 레이아웃 동일하고 내부 컨텐츠만 다름 */}
      {/* 회원 */}
      <div className="w-full flex items-center justify-between gap-[8px]">
        <dt className="flex items-center gap-[6px] text-gray-500">
          <span>면·과세</span>
        </dt>
        <dd className="flex items-center gap-[16px]">
          <span className="text-lg font-medium">과세상품</span>
        </dd>
      </div>
      <div className="w-full flex items-center justify-between gap-[8px]">
        <dt className="flex items-center gap-[6px] text-gray-500">
          <span>kg당</span>
          <Icon src="copy.svg" alt="복사" />
        </dt>
        <dd className="flex items-center gap-[16px]">
          <span className="text-gray-400 line-through">8,760원</span>
          <span className="text-lg font-medium">8,760원</span>
        </dd>
      </div>
      <div className="w-full flex items-center justify-between gap-[8px]">
        <dt className="flex items-center gap-[6px] text-gray-500">
          <span>개당</span>
        </dt>
        <dd className="flex items-center gap-[16px]">
          <span className="text-gray-400 line-through">8,760원</span>
          <span className="text-lg font-medium">8,760원</span>
        </dd>
      </div>
      {/* 비회원 */}
      <div className="w-full flex items-center justify-between gap-[8px]">
        <dt className="flex items-center gap-[6px] text-gray-500">
          <span>kg당</span>
          <Icon src="copy.svg" alt="복사" />
        </dt>
        <dd className="flex items-center gap-[16px]">
          <span className="text-lg font-medium">회원전용</span>
        </dd>
      </div>
      <div className="w-full flex items-center justify-between gap-[8px]">
        <dt className="flex items-center gap-[6px] text-gray-500">
          <span>개당</span>
        </dt>
        <dd className="flex items-center gap-[16px]">
          <span className="text-lg font-medium">회원전용</span>
        </dd>
      </div>
    </dl>
  );
};
