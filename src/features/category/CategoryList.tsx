import { useState } from 'react';
import { Subtop } from '../../shared/components/subtop';
import { ToggleOption } from '~/shared/components/form/ToggleOption';
import { ListTotalCount } from '~/shared/components/List/ListTotalCount';
import { ListSearchInput } from '~/shared/components/List/ListSearchInput';
import { ListTopContainer } from '~/shared/components/List/ListTopContainer';
import { ComSwitch } from '~/shared/ui/ComSwitch';
import { ProductList } from '~/shared/components/List/ProductList';

export const CategoryList = () => {
  const [enabled, setEnabled] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-[30px] lg:gap-[80px]">
        <Subtop
          showCategoryDropdown
          submenu={['핫도그', '만두', '냉동기타']}
          breadcrumb={['카테고리', '핫도그·만두·냉동기타', '냉동기타']}
        />
        <ListTopContainer
          leftChildren={
            <div className="flex flex-col gap-[8px] lg:gap-[12px]">
              <ListTotalCount count={100} type="product" />
              <div className="flex items-center gap-[4px] lg:gap-[8px] h-[40px]">
                <p className="text-sm lg:text-base">VAT 포함</p>
                <ComSwitch checked={enabled} onChange={setEnabled} />
              </div>
            </div>
          }
          rightChildren={
            <ToggleOption sortOptions={['기본순', '낮은가격순', '높은가격순', '할인순']} />
          }
          searchChildren={
            <ListSearchInput
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onClick={() => {}}
            />
          }
        />
      </div>
      <div className="mt-[20px] lg:mt-[24px]">
        <ul className="grid flex-wrap gap-x-[13px] lg:gap-x-[24px] gap-y-[30px] lg:gap-y-[60px] grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          <li>
            <ProductList login />
          </li>
          <li>
            <ProductList login />
          </li>
          <li>
            <ProductList login />
          </li>
          <li>
            <ProductList login />
          </li>
          <li>
            <ProductList login />
          </li>
        </ul>
      </div>
    </div>
  );
};
