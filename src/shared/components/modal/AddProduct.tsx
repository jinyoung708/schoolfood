/**
 * Component: AddProduct.tsx
 * Description: 상품 검색 및 선택을 위한 팝업 컴포넌트
 * Props:
 *  - left?: number (팝업 왼쪽 위치, % 단위)
 *  - top?: number (팝업 위쪽 위치, % 단위)
 *  - isOpen: boolean (팝업 열림 상태)
 *  - onToggle: () => void (팝업 열림/닫힘 토글 함수)
 *  - onClose?: () => void (팝업 닫기 함수, 선택적)
 * Usage:
 *  <AddProduct
 *    left={30}
 *    top={40}
 *    isOpen={isOpen}
 *    onToggle={handleToggle}
 *    onClose={handleClose}
 *  />
 */
import { useRef, useState } from 'react';
import { Button } from '@headlessui/react';
import styles from '~/shared/css/AddProduct.module.css';
import { Icon } from '../Icon';
import { ListSearchInput } from '../List/ListSearchInput';
import { RatioImage } from '../RatioImage';
import { cn } from '~/shared/utils';
import { useScrollLock } from '~/shared/utils/useScrollLock';
import { useClickOutside } from '~/shared/utils/useClickOutside';

interface AddProductProps {
  left?: number;
  top?: number;
  isOpen: boolean;
  onToggle: () => void;
  onClose?: () => void;
}

export const AddProduct = ({ left, top, isOpen, onToggle, onClose }: AddProductProps) => {
  const [searchValue, setSearchValue] = useState('');
  const wrapperRef = useRef<HTMLDivElement>(null);

  const style: React.CSSProperties = {
    ...(left !== undefined && { left: `${left}%` }),
    ...(top !== undefined && { top: `${top}%` }),
  };

  useClickOutside(wrapperRef, () => {
    if (isOpen) onClose?.();
  });

  useScrollLock(isOpen, 'mo');

  return (
    <div
      style={style}
      ref={wrapperRef}
      className={cn('absolute text-[0]', styles.btnWrap, isOpen && styles.active)}
    >
      {/* 버튼 */}
      <Button onClick={onToggle} className="-translate-x-1/2 -translate-y-1/2">
        <Icon
          src={isOpen ? 'plus_circle_org.svg' : 'plus_circle_white.svg'}
          className="min-w-[24px] w-[24px] lg:min-w-[32px] lg:w-[32px]"
        />
      </Button>

      {/* 팝업 모달 팝업 */}
      {isOpen && (
        <div className="lg:-translate-x-1/2 lg:-translate-y-1/2">
          <div className={styles.popupWrap}>
            <Button
              onClick={onToggle}
              className="block lg:hidden bg-black/40 absolute left-0 top-0 w-full h-full cursor-auto"
            />
            <div className={styles.popup}>
              <p className="flex gap-[8px] py-[14px] border-gray-800 justify-between lg:py-0 lg:pb-[16px] lg:mb-[30px] lg:border-b-2">
                <span className="text-base lg:text-2xl font-medium">상품검색</span>
                <Button onClick={onClose} className="ml-2 block lg:hidden">
                  <Icon src="close2.svg" alt="닫기" />
                </Button>
              </p>

              {/* 검색 */}
              <div className={styles.searchWrap}>
                <ListSearchInput
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onClick={() => {}}
                />
              </div>

              {/* 상품 리스트 */}
              <div className="scrollbar-custom max-h-[calc(100vh-400px)] lg:max-h-[332px] mt-[24px] lg:mt-[30px]">
                <ul className={styles.productList}>
                  {[...Array(4)].map((_, idx) => {
                    const inputId = `product-radio-${idx}`;
                    return (
                      <li key={inputId}>
                        <div>
                          <label htmlFor={inputId} className="flex gap-[12px] cursor-pointer">
                            <div className={styles.radio}>
                              <input type="radio" id={inputId} name="product" className="sr-only" />
                              <span />
                            </div>
                            <RatioImage
                              src="/schoolfood/images/img/product01.jpg"
                              ratio="1/1"
                              className="w-[80px] shrink-0 rounded-[8px]"
                            />
                            <div className="grow min-w-0">
                              <p className="flex gap-[8px] items-center">
                                <span className="truncate text-sm lg:text-22 font-medium">
                                  고메 탕수육
                                </span>
                                <small className="text-xs lg:text-lg font-normal text-gray-500 shrink-0">
                                  1팩 152g
                                </small>
                              </p>
                              <div className="mt-[4px] lg:mt-[8px]">
                                <p className="flex items-center gap-[8px] text-xs lg:text-base">
                                  <span className="text-gray-500">규격단가</span>
                                  <s className="text-gray-400">10,290원</s>
                                </p>
                                <p className="flex items-center gap-[8px] lg:mt-[2px] text-xl font-semibold">
                                  <span className="text-secondary">15%</span>
                                  <strong className="font-semibold">8,790원</strong>
                                </p>
                              </div>
                            </div>
                          </label>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* 등록 버튼 */}
              <Button className="w-full mt-[32px] lg:mt-[30px] btn-primary btn-lg">등록</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
