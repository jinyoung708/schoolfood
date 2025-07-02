/**
 * Component: CategoryDropdown.tsx
 * Description: 카테고리 페이지 메뉴 드롭다운 컴포넌트
 */
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { cn } from '~/shared/utils';
import { Icon } from '../Icon';
import styles from '~/shared/css/Header.module.css';
import { useScrollLock } from '~/shared/utils/useScrollLock';

const PopoverContentWrapper = ({
  children,
  isOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
}) => {
  useScrollLock(isOpen, 'mo');
  return children;
};

export const CategoryDropdown = () => {
  return (
    <div className={styles.categoryHeader}>
      <p className={cn('hidden lg:block', styles.categoryTitle)}>핫도그·만두·냉동기타</p>
      <Popover className={styles.dropdownWrapper}>
        {({ open }) => {
          return (
            <>
              {open && <div className={styles.backdrop} aria-hidden="true" />}
              <PopoverButton className={cn(styles.toggleButton)}>
                <span className={cn('block lg:hidden', styles.categoryTitle)}>
                  핫도그·만두·냉동기타
                </span>
                <span className={cn(open && '-rotate-180')}>
                  <Icon src="arrow_down2.svg" />
                </span>
              </PopoverButton>
              <PopoverPanel anchor="bottom" className={styles.dropdownList}>
                <PopoverContentWrapper isOpen={open}>
                  <Link to="/">육가공</Link>
                  <Link to="/">계육·수산가공</Link>
                  <Link to="/">핫도그·만두·냉동기타</Link>
                  <Link to="/">계란·치즈·두부·묵</Link>
                  <Link to="/">음료류</Link>
                  <Link to="/">후식류</Link>
                  <Link to="/">소스·드레싱</Link>
                  <Link to="/">가공기타·비식품</Link>
                  <Link to="/">채식</Link>
                  <Link to="/">분가공·분류</Link>
                  <Link to="/">농산·수산·축산물</Link>
                  <Link to="/">자연드림</Link>
                  <Link to="/">중단상품</Link>
                </PopoverContentWrapper>
              </PopoverPanel>
            </>
          );
        }}
      </Popover>
    </div>
  );
};
