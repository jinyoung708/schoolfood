/**
 * Component: Favorites.tsx
 * Description: 관심상품 컴포넌트
 */
import { Button } from '@headlessui/react';
import { Subtop } from '../../shared/components/subtop';
import { ListTotalCount } from '~/shared/components/List/ListTotalCount';
import { ListTopContainer } from '~/shared/components/List/ListTopContainer';
import { ProductList } from '~/shared/components/List/ProductList';
import { ComPagination } from '~/shared/ui/ComPagination';
import { Icon } from '~/shared/components/Icon';
import { InputCheckbox } from '~/shared/components/form/InputCheckbox';
import { AllCheck } from '~/shared/components/modal/AllCheck';

export const Favorites = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-[30px] lg:gap-[80px]">
        <Subtop
          pageTitle="마이페이지"
          breadcrumb={['HOME', '마이페이지']}
          submenu={['관심상품', '작성한 글', '개인정보 수정']}
        />
        <ListTopContainer
          leftChildren={
            <div className="flex flex-col gap-[8px] lg:gap-[12px]">
              <ListTotalCount count={100} type="product" />
              <div className="flex items-center gap-[4px] lg:gap-[8px] h-[40px]">
                <AllCheck title="전체상품">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-[8px] lg:gap-y-[20px]">
                    <InputCheckbox type2 className="h-[48px] lg:h-auto">
                      전체상품
                    </InputCheckbox>
                    <InputCheckbox type2 className="h-[48px] lg:h-auto">
                      육가공
                    </InputCheckbox>
                    <InputCheckbox type2 className="h-[48px] lg:h-auto">
                      계육·수산가공
                    </InputCheckbox>
                    <InputCheckbox type2 className="h-[48px] lg:h-auto">
                      핫도그·만두·냉동기타
                    </InputCheckbox>
                    <InputCheckbox type2 className="h-[48px] lg:h-auto">
                      계란·치즈·두부·묵
                    </InputCheckbox>
                    <InputCheckbox type2 className="h-[48px] lg:h-auto">
                      음료류
                    </InputCheckbox>
                  </div>
                </AllCheck>
                <span className="w-[1px] h-[10px] bg-gray-300 mx-[12px] lg:mx-[16px]" />
                <InputCheckbox
                  className="text-sm lg:text-base font-medium"
                  iconSize="w-[20px] lg:w-auto"
                >
                  전체선택
                </InputCheckbox>
                <span className="w-[1px] h-[10px] bg-gray-300 mx-[12px] lg:mx-[16px]" />
                <Button className="flex gap-[4px] items-center text-sm lg:text-base font-medium">
                  <Icon src="recycle_bin_black.svg" />
                  선택삭제
                </Button>
              </div>
            </div>
          }
          rightChildren={
            <Button className="gap-[4px] items-center hidden lg:flex text-base font-medium">
              <Icon src="excel.svg" />
              엑셀 다운로드
            </Button>
          }
        />
      </div>
      <div className="flex flex-col gap-[40px] lg:gap-[80px] mt-[12px] lg:mt-[24px]">
        <ul className="grid gap-x-[13px] lg:gap-x-[24px] gap-y-[30px] lg:gap-y-[60px] grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          <li className="relative">
            <InputCheckbox
              className="absolute left-[12px] top-[12px] lg:left-[20px] lg:top-[24px] z-[1]"
              iconSize="w-[24px] lg:w-[31px]"
            />
            <ProductList login />
          </li>
          <li className="relative">
            <InputCheckbox
              className="absolute left-[12px] top-[12px] lg:left-[20px] lg:top-[24px] z-[1]"
              iconSize="w-[24px] lg:w-[31px]"
            />
            <ProductList login />
          </li>
          <li className="relative">
            <InputCheckbox
              className="absolute left-[12px] top-[12px] lg:left-[20px] lg:top-[24px] z-[1]"
              iconSize="w-[24px] lg:w-[31px]"
            />
            <ProductList login />
          </li>
          <li className="relative">
            <InputCheckbox
              className="absolute left-[12px] top-[12px] lg:left-[20px] lg:top-[24px] z-[1]"
              iconSize="w-[24px] lg:w-[31px]"
            />
            <ProductList login />
          </li>
          <li className="relative">
            <InputCheckbox
              className="absolute left-[12px] top-[12px] lg:left-[20px] lg:top-[24px] z-[1]"
              iconSize="w-[24px] lg:w-[31px]"
            />
            <ProductList login />
          </li>
        </ul>
        <ComPagination />
      </div>
    </div>
  );
};
