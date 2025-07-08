import { Icon } from '~/shared/components/Icon';
import { Tooltip } from './Tooltip';

export const DetailProductInfo = () => {
  return (
    <dl className="flex flex-col lg:flex-row lg:flex-wrap gap-y-[12px] lg:gap-y-[30px]">
      <div className="flex items-center gap-[12px] lg:w-[33.33%]">
        <Icon src="productInfo_code.svg" className="shrink-0 w-[40px] lg:w-auto" />
        <div className="flex flex-col">
          <dt className="flex items-center gap-[4px]">
            <span className="text-xs lg:text-base text-gray-500">품목코드</span>
            <button type="button">
              <Icon
                src="copy.svg"
                alt="복사"
                className="w-[12px] h-[12px] lg:w-[16px] lg:h-[16px]"
              />
            </button>
          </dt>
          <dd className="text-sm font-medium">
            <span>359441</span>
          </dd>
        </div>
      </div>
      <div className="flex items-center gap-[12px] lg:w-[33.33%]">
        <Icon src="productInfo_standard.svg" className="shrink-0 w-[40px] lg:w-auto" />
        <div className="flex flex-col">
          <dt className="flex items-center gap-[4px]">
            <span className="text-xs lg:text-base text-gray-500">규격</span>
            <button type="button">
              <Icon
                src="copy.svg"
                alt="복사"
                className="w-[12px] h-[12px] lg:w-[16px] lg:h-[16px]"
              />
            </button>
          </dt>
          <dd className="text-sm font-medium">
            <span>1kg</span>
            <span className="text-gray-600"> (10~12g*44ea 이상)</span>
          </dd>
        </div>
      </div>
      <div className="flex items-center gap-[12px] lg:w-[33.33%]">
        <Icon src="productInfo_perBox.svg" className="shrink-0 w-[40px] lg:w-auto" />
        <div className="flex flex-col">
          <dt className="flex items-center gap-[4px]">
            <span className="text-xs lg:text-base text-gray-500">박스입수량</span>
          </dt>
          <dd className="text-sm font-medium">
            <span>8ea</span>
          </dd>
        </div>
      </div>
      <div className="flex items-center gap-[12px] lg:w-[33.33%]">
        <Icon src="productInfo_storage.svg" className="shrink-0 w-[40px] lg:w-auto" />
        <div className="flex flex-col">
          <dt className="flex items-center gap-[4px]">
            <span className="text-xs lg:text-base text-gray-500">저장조건</span>
          </dt>
          <dd className="text-sm font-medium">
            <span>냉동</span>
          </dd>
        </div>
      </div>
      <div className="flex items-center gap-[12px] lg:w-[33.33%]">
        <Icon src="productInfo_expiration.svg" className="shrink-0 w-[40px] lg:w-auto" />
        <div className="flex flex-col">
          <dt className="flex items-center gap-[4px]">
            <span className="text-xs lg:text-base text-gray-500">유통기한(일)</span>
          </dt>
          <dd className="text-sm font-medium">
            <span>345일</span>
          </dd>
        </div>
      </div>
      <div className="flex items-center gap-[12px] lg:w-[33.33%]">
        <Icon src="productInfo_allergy.svg" className="shrink-0 w-[40px] lg:w-auto" />
        <div className="flex flex-col">
          <dt className="flex items-center gap-[4px]">
            <span className="text-xs lg:text-base text-gray-500">알러지 정보</span>
            <Tooltip title="알러지 정보">
              ①난류 ②우유 ③ 메밀 ④땅콩 ⑤대두 ⑥밀 ⑦고등어 ⑧게 ⑨새우 ⑩돼지고기 ⑪복숭아 ⑫토마토
              ⑬아황산염 ⑭호두 ⑮닭고기 ⑯쇠고기 ⑰오징어 ⑱조개류(굴,전복,홍합 포함) ⑲잣
            </Tooltip>
          </dt>
          <dd className="text-sm font-medium">
            <span>⑤대두 ⑥밀 ⑩돼지고기</span>
          </dd>
        </div>
      </div>
    </dl>
  );
};
