/**
 * Component: HeaderContent.tsx
 * Description: 헤더 내 모바일 Gnb 및 카테고리 메뉴, 검색창, 사용자 메뉴를 포함하는 컴포넌트
 */
import { Link } from 'react-router-dom';
import { Button } from '@headlessui/react';
import { Icon } from '~/shared/components/Icon';
import styles from '~/shared/css/Header.module.css';
import { Gnb } from './Gnb';
import { CategoryMenu } from './CategoryMenu';
import { cn } from '~/shared/utils';
import { Dropdown, DropdownContent, DropdownTrigger } from '../Dropdown';
import { useHeaderContext } from '~/shared/context/HeaderContext';

export const HeaderContent = () => {
  const { isHeaderFixed, searchActive, toggleSearch } = useHeaderContext();
  const isLoggedIn = true; // 로그인 여부 (임시)

  return (
    <div
      className={cn(
        'flex items-center max-w-[1656px] m-auto bg-white rounded-full',
        styles.headerContent,
      )}
    >
      <div className={cn(styles.logo)}>
        <Link to="/">
          <Icon src="logo.svg" alt="튼튼스쿨" />
        </Link>
      </div>

      <CategoryMenu />

      <Gnb />

      <div className={cn('flex items-center', styles.searchArea)}>
        {searchActive ? (
          <Button className={styles.searchCloseBtn} onClick={toggleSearch}>
            <Icon src="close.svg" alt="닫기" />
          </Button>
        ) : (
          <>
            <button
              type="button"
              onClick={toggleSearch}
              className={cn('rounded-full', styles.searchBtn)}
            >
              <span>검색어를 입력해주세요.</span>
            </button>
            {isLoggedIn ? (
              <div className={cn(styles.userMenu, 'shrink-0')}>
                <Dropdown horizontal="center" vertical={{ top: '100%' }}>
                  <DropdownTrigger>
                    {(open) => (
                      <div className="flex items-center gap-1">
                        김튼튼
                        <span className={cn(open && 'rotate-180')}>
                          <Icon src="arrow_down.svg" />
                        </span>
                      </div>
                    )}
                  </DropdownTrigger>
                  {isHeaderFixed && (
                    <DropdownContent>
                      <div className="bg-white mt-2 px-4 py-3 rounded-lg border border-gray-100 shadow-lg flex flex-col">
                        <Link to="/">관심상품</Link>
                        <Link to="/">작성한 글</Link>
                        <Link to="/">개인정보 수정</Link>
                        <Link to="/">로그아웃</Link>
                      </div>
                    </DropdownContent>
                  )}
                </Dropdown>
              </div>
            ) : (
              <Link to="/login" className={cn(styles.btnUser, 'shrink-0')}>
                로그인
              </Link>
            )}
          </>
        )}
      </div>
    </div>
  );
};
