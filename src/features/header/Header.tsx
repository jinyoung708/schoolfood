/**
 * Component: Header.tsx
 * Description: PC/모바일 GNB, 카테고리 메뉴, 검색창 등을 포함하는 반응형 헤더 컴포넌트
 * Props:
 *  - title?: string (모바일 헤더에서 표시될 타이틀)
 *  - category?: boolean (모바일 헤더에서 카테고리 드롭다운을 표시할지 여부)
 */

import { useRef, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@headlessui/react';
import styles from '~/shared/css/Header.module.css';
import { HeaderContent } from '~/shared/components/header/HeaderContent';
import { SearchOverlay } from '~/shared/components/header/SearchOverlay';
import { GnbMobile } from '~/shared/components/header/GnbMobile';
import { cn } from '~/shared/utils';
import { Icon } from '~/shared/components/Icon';
import { CategoryDropdown } from '~/shared/components/header/CategoryDropdown';
import { useScrollLock } from '~/shared/utils/useScrollLock';
import { useHeaderContext } from '~/shared/context/HeaderContext';
import { BackBtn } from '~/shared/components/button/BackBtn';

interface HeaderProps {
  title?: string;
  category?: boolean;
}

export const Header = ({ title, category }: HeaderProps) => {
  const location = useLocation();
  const isMainPage = location.pathname === '/';

  const [scrollY, setScrollY] = useState(0);
  const {
    isHeaderFixed,
    setIsHeaderFixed,
    isCategoryTabFixed,
    searchActive,
    toggleSearch,
    isGnbVisible,
  } = useHeaderContext();

  const lastScrollTopRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setScrollY(scrollTop);

      const threshold = 10;
      if (scrollTop <= 0) {
        setIsHeaderFixed(true);
        lastScrollTopRef.current = scrollTop;
        return;
      }

      if (Math.abs(scrollTop - lastScrollTopRef.current) > threshold) {
        setIsHeaderFixed(scrollTop < lastScrollTopRef.current);
        lastScrollTopRef.current = scrollTop;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setIsHeaderFixed]);

  useScrollLock(searchActive, 'all');

  const headerClasses = cn(
    'transition-[translate background] duration-300 z-[var(--header-z)]',
    styles.header,
    isMainPage && styles.main,
    !isHeaderFixed && `${styles.gnbVisible} lg:translate-y-[-100%]`,
    (isGnbVisible || isCategoryTabFixed) && `${styles.gnbVisible} bg-white`,
    searchActive && `${styles.searchActive} bg-white`,
  );

  return (
    <header className={cn(headerClasses)}>
      {/* PC 헤더 */}
      <div className="lg:block hidden px-[16px]">
        <HeaderContent />
      </div>

      {/* MO 헤더 */}
      <div className="block lg:hidden">
        {category ? (
          <div
            className={cn(
              'flex h-[60px] items-center',
              styles.headerContent,
              scrollY > 0 ? 'bg-white' : '',
            )}
            aria-label="모바일 주요 메뉴"
          >
            {searchActive ? (
              <>
                <h1 className={cn(styles.logo)}>
                  <Link to="/">
                    <Icon src="logo.svg" alt="튼튼스쿨" width={36.44} height={28} />
                  </Link>
                </h1>
                <Button className={cn('ml-auto', styles.searchCloseBtn)} onClick={toggleSearch}>
                  <Icon src="close.svg" alt="닫기" />
                </Button>
              </>
            ) : (
              <>
                <BackBtn />
                <CategoryDropdown />
                <Button className="ml-auto" onClick={toggleSearch}>
                  <Icon src="search.svg" alt="통합검색" />
                </Button>
              </>
            )}
          </div>
        ) : (
          <GnbMobile scrollY={scrollY} title={title} />
        )}
      </div>

      {/* 통합검색 */}
      <SearchOverlay />
    </header>
  );
};
