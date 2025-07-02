/**
 * Component: Subtop.tsx
 * Description: 서브페이지 상단 Subtop 컴포넌트
 * Props:
 *  - breadcrumb: string[] (breadcrumb 리스트)
 *  - showCategoryDropdown: boolean (카테고리 메뉴 노출)
 *  - submenu: string[] (서브메뉴 리스트)
 *  - pageTitle: string (페이지명)
 * Usage:
 *  <Subtop
      pageTitle="페이지명"
      submenu={['메뉴1', '메뉴2', '메뉴3']}
      breadcrumb={['HOME', '메뉴1', '메뉴2']}
    />
 */
import { Button } from '@headlessui/react';
import { CategoryDropdown } from '~/shared/components/header/CategoryDropdown';
import { cn } from '~/shared/utils';
import styles from '~/shared/css/Subtop.module.css';
import { Breadcrumb } from './Breadcrumb';

interface SubtopProps {
  breadcrumb?: string[];
  showCategoryDropdown?: boolean;
  submenu?: string[];
  pageTitle?: string;
}

export const Subtop = ({ breadcrumb, showCategoryDropdown, submenu, pageTitle }: SubtopProps) => {
  return (
    <div className={cn('pt-[16px] lg:pt-[84px] relative', submenu ? 'block' : 'hidden lg:block')}>
      {breadcrumb && (
        <div className="hidden lg:block absolute top-[16px] left-0">
          <Breadcrumb breadcrumb={breadcrumb} />
        </div>
      )}
      {showCategoryDropdown && (
        <div className="hidden lg:block">
          <CategoryDropdown />
        </div>
      )}
      {pageTitle && <p className={cn('hidden lg:block', styles.title)}>{pageTitle}</p>}
      {submenu && (
        <div className="tab-list lg:mt-[30px] justify-center flex-wrap">
          <Button className="active">전체</Button>
          {submenu?.map((item) => <Button key={item}>{item}</Button>)}
        </div>
      )}
    </div>
  );
};
