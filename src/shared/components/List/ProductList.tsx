/**
 * Component: ProductList.tsx
 * Description: 상품 리스트 컴포넌트
 * Props:
 *  - login?: boolean (로그인 여부, 기본값 false)
 *  - stop?: boolean (중단 상품 여부, 기본값 false)
 *  - noPrice?: boolean (단가 미제공 여부, 기본값 false)
 *  - noUnitPrice?: boolean (유닛 단가 미제공 여부, 기본값 false)
 *  - ingPrice?: boolean (단가 정보 준비중 상태, 기본값 false)
 *  - small?: boolean (축소형 UI 여부, 기본값 false)
 * Usage:
 *  <ProductList />
 *  <ProductList login />
 *  <ProductList stop noPrice />
 */
import { Link } from 'react-router-dom';
import { Button } from '@headlessui/react';
import { cn } from '~/shared/utils';
import { Bookmark } from '../Bookmark';
import { RatioImage } from '../RatioImage';
import styles from '~/shared/css/ProductList.module.css';
import { Icon } from '../Icon';

interface ProductProps {
  login?: boolean;
  stop?: boolean;
  noPrice?: boolean;
  noUnitPrice?: boolean;
  ingPrice?: boolean;
  small?: boolean;
}

export const ProductList = ({
  login = false,
  stop = false,
  noPrice = false,
  noUnitPrice = false,
  ingPrice = false,
  small = false,
}: ProductProps) => {
  const renderPriceSection = () => {
    if (!login) {
      return (
        <Button className={styles.BtnLogin}>
          로그인 후 단가 확인
          <Icon src="lock.svg" />
        </Button>
      );
    }

    if (noPrice) {
      return (
        <>
          <div className={cn('mt-[8px] lg:mt-[16px]')}>
            <p className={styles.productPrice} />
            <p className={styles.productDiscount}>
              <span className={styles.noPriceText}>단가 미제공 상품</span>
            </p>
          </div>
          <hr className={styles.dividerLine} />
          <div className={styles.tagBox}>
            <span>#풍미가득</span>
            <span>#진한맛</span>
            <span>#향긋함</span>
          </div>
        </>
      );
    }

    if (noUnitPrice) {
      return (
        <div className={cn('lg:mt-[16px]', small ? 'mt-[12px]' : 'mt-[8px]')}>
          <p className={cn(styles.productPrice, small ? 'text-sm lg:text-base' : '')}>
            <span className="">규격단가</span>
            <s>10,290원</s>
          </p>
          <p className={styles.productDiscount}>
            <span className={cn(styles.percent)}>15%</span>
            <strong>8,790원</strong>
          </p>
        </div>
      );
    }

    if (ingPrice) {
      return (
        <>
          <div className="mt-[8px] lg:mt-[16px]">
            <p className={styles.productPrice} />
            <p className={styles.productDiscount}>
              <span className={styles.ingPriceText}>단가 정보 준비중</span>
            </p>
          </div>
          <hr className={styles.dividerLine} />
          <div className={styles.tagBox}>
            <span>#풍미가득</span>
            <span>#진한맛</span>
            <span>#향긋함</span>
          </div>
        </>
      );
    }

    return (
      <>
        <div className="mt-[8px] lg:mt-[16px]">
          <p className={styles.productPrice}>
            <span>규격단가</span>
            <s>10,290원</s>
          </p>
          <p className={styles.productDiscount}>
            <span className={styles.percent}>15%</span>
            <strong>8,790원</strong>
          </p>
        </div>
        <hr className={styles.dividerLine} />
        <div className={styles.unitPriceBox}>
          <div className={styles.unitRow}>
            <span className={styles.unit}>kg당</span>
            <span className={styles.unit}>개당</span>
          </div>
          <div className={styles.originalPriceRow}>
            <s className={styles.originalPrice}>10,290원</s>
            <s className={styles.originalPrice}>10,290원</s>
          </div>
          <div className={styles.discountPriceRow}>
            <strong className={styles.discountPrice}>8,790원</strong>
            <strong className={styles.discountPrice}>879원</strong>
          </div>
        </div>
        <div className={styles.tagBox}>
          <span>#풍미가득</span>
          <span>#진한맛</span>
          <span>#향긋함</span>
        </div>
      </>
    );
  };

  const priceSection = renderPriceSection();

  return stop ? (
    <div className={cn(small ? styles.small : '')}>
      <div
        className={cn(
          'relative rounded-[8px] lg:rounded-[16px] overflow-hidden',
          small ? `mb-[12px] border-2 ${styles.thumb}` : 'mb-[12px] lg:mb-[24px]',
        )}
      >
        <Bookmark
          className={cn(
            'absolute',
            small
              ? 'w-[24px] top-[12px] right-[8px]'
              : 'w-[24px] lg:w-[32px] top-[12px] lg:top-[24px] right-[8px] lg:right-[20px]',
          )}
        />
        <Link to="/category/detail" className="block">
          <RatioImage
            src="/schoolfood/schoolfood/images/img/product01.jpg"
            alt="백설 바질 토마토 파스타소스"
            ratio={small ? '1/1' : '4/5'}
            isContain
            className="bg-gray-150"
          />
          <span
            className={cn(
              'flex items-center justify-center absolute left-0 top-0 w-full h-full',
              styles.stopItem,
            )}
          >
            중단상품
          </span>
        </Link>
      </div>
      <Link to="/category/detail" className="block px-[4px] lg:px-[8px]">
        <p className="text-sm lg:text-22 font-medium lg:mb-[2px] truncate">
          백설 바질 토마토 파스타소스
        </p>
        <p className="text-xs lg:text-lg text-gray-500">1병 365g</p>
      </Link>
    </div>
  ) : (
    <div className={cn(small ? styles.small : '')}>
      <div
        className={cn(
          'relative rounded-[8px] lg:rounded-[16px] overflow-hidden',
          small ? `mb-[12px] thumbnail` : 'mb-[12px] lg:mb-[24px]',
        )}
      >
        <Bookmark
          className={cn(
            'absolute',
            small
              ? 'w-[24px] top-[12px] right-[8px]'
              : 'w-[24px] lg:w-[32px] top-[12px] lg:top-[24px] right-[8px] lg:right-[20px]',
          )}
        />
        <Link to="/category/detail" className="block">
          <RatioImage
            src="/schoolfood/schoolfood/images/img/product01.jpg"
            alt="백설 바질 토마토 파스타소스"
            ratio={small ? '1/1' : '4/5'}
            isContain
            className="bg-gray-150"
          />
        </Link>
      </div>
      <Link
        to="/category/detail"
        className={cn('block', small ? 'px-[4px]' : 'px-[4px] lg:px-[8px]')}
      >
        <p
          className={cn(
            'font-medium truncate',
            small ? 'text-xl lg:text-22 mb-[2px]' : 'text-sm lg:text-22 lg:mb-[2px]',
          )}
        >
          백설 바질 토마토 파스타소스
        </p>
        <p className={cn('text-gray-500', small ? 'text-base lg:text-lg' : 'text-xs lg:text-lg')}>
          1병 365g
        </p>
        {priceSection}
      </Link>
    </div>
  );
};
