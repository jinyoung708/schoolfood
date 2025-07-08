import { useState } from 'react';
import { Icon } from '~/shared/components/Icon';
import { DetailPriceInfo } from './DetailPriceInfo';
import { PriceInfo } from './PriceInfo';
import { ProductTags } from './ProductTags';
import { DetailProductInfo } from './DetailProductInfo';
import { WishlistItemBtn } from './WishlistItemBtn';

const Divider = () => <div className="h-[1px] bg-gray-100 w-full" />;

export const ProductInfo = () => {
  const [wishlisted, setWishlisted] = useState(false);
  const toggleWishlist = () => {
    setWishlisted((prev) => !prev);
  };

  return (
    <div className="w-full lg:h-full flex flex-col gap-[24px] lg:gap-[30px]">
      <div className="flex flex-col lg:gap-[4px]">
        <div className="text-0">
          <span className="text-22 lg:text-34 font-medium align-middle">
            백설 바질 토마토 파스타소스
          </span>
          <button className="inline-block align-middle ml-[8px]" type="button">
            <Icon src="copy.svg" alt="복사" />
          </button>
        </div>
        <p className="flex gap-[8px] lg:gap-[4px] text-base lg:text-lg text-gray-500 lg:mb-[4px]">
          바질 토마토 파스타 소스
          <button type="button">
            <Icon src="copy.svg" alt="복사" className="w-[12px] h-[12px] lg:w-[16px] lg:h-[16px]" />
          </button>
        </p>
      </div>
      <PriceInfo />
      <Divider />
      <div className="lg:w-[395px] flex flex-col gap-[16px] lg:gap-[20px]">
        <DetailPriceInfo />
        <ProductTags tags={['풍미가득', '진한맛', '향긋함']} />
      </div>
      <Divider />
      <DetailProductInfo />
      <WishlistItemBtn
        wishlisted={wishlisted}
        onClick={() => toggleWishlist()}
        className="mt-auto lg:max-w-[360px]"
      />
    </div>
  );
};
