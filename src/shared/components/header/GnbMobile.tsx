/**
 * Component: GnbMobile.tsx
 * Description: 모바일 Gnb 컴포넌트
 */
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@headlessui/react';
import styles from '~/shared/css/Header.module.css';
import { Icon } from '~/shared/components/Icon';
import { ToggleList } from './ToggleList';
import { cn } from '~/shared/utils';
import { useScrollLock } from '~/shared/utils/useScrollLock';
import { BackBtn } from '~/shared/components/button/BackBtn';
import { useHeaderContext } from '~/shared/context/HeaderContext';

interface GnbMobileProps {
  scrollY: number;
  title?: string;
}

export const GnbMobile = ({ scrollY, title }: GnbMobileProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const { searchActive, toggleSearch } = useHeaderContext();
  const isActive = (index: number) => (activeIndex === index ? styles.active : '');
  const login = true; // 로그인 여부 (임시)
  const location = useLocation();

  useScrollLock(menuOpen, 'mo');

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
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
            {!title && (
              <h1 className={cn(styles.logo)}>
                <Link to="/">
                  <Icon src="logo.svg" alt="튼튼스쿨" width={36.44} height={28} />
                </Link>
              </h1>
            )}
            {title && <BackBtn />}
            {title && <h2 className={styles.subTitle}>{title}</h2>}
            <Button className="ml-auto mr-[16px]" onClick={toggleSearch}>
              <Icon src="search.svg" alt="통합검색" />
            </Button>
            <Button
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-expanded={false}
              aria-controls="mobile-menu-list"
              aria-label="메뉴 열기"
            >
              <Icon src="menu.svg" />
            </Button>
          </>
        )}
      </div>

      <div
        id="mobile-menu-list"
        aria-hidden={!menuOpen}
        className={cn(
          'bg-white transition-transform duration-500 ease-in-out',
          styles.menu,
          menuOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        {menuOpen && (
          <>
            <div className={styles.menuTop}>
              <h1 className={cn(styles.logo)}>
                <Link to="/">
                  <Icon src="logo.svg" alt="튼튼스쿨" width={36.44} height={28} />
                </Link>
              </h1>
              <Button
                className="ml-auto"
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-expanded
                aria-controls="mobile-menu-list"
                aria-label="메뉴 닫기"
              >
                <Icon src="close_mobile.svg" />
              </Button>
            </div>
            <div className={cn('flex items-center px-[20px] py-[24px]', styles.login)}>
              {login ? (
                <>
                  <Button className="flex items-center gap-[4px] font-medium">
                    김튼튼
                    <Icon src="setting.svg" />
                  </Button>
                  <Button className="btn-sm btn-border-gray ml-auto">로그아웃</Button>
                </>
              ) : (
                <>
                  <p className="text-gray-500">
                    <span className="font-medium text-gray-800">로그인</span>하고 회원 전용 혜택을
                    받아보세요
                  </p>
                  <Button className="btn-sm btn-primary ml-auto">로그인</Button>
                </>
              )}
            </div>
            <div className={cn(styles.menuList)}>
              <ul className={cn(styles.menuDepth1)}>
                <li>
                  <Button onClick={() => setActiveIndex(1)} className={isActive(1)}>
                    카테고리
                  </Button>
                </li>
                <li>
                  <Button onClick={() => setActiveIndex(2)} className={isActive(2)}>
                    신상품
                  </Button>
                </li>
                <li>
                  <Button onClick={() => setActiveIndex(3)} className={isActive(3)}>
                    레시피
                  </Button>
                </li>
                <li>
                  <Button onClick={() => setActiveIndex(4)} className={isActive(4)}>
                    주요행사
                  </Button>
                </li>
                <li>
                  <Button onClick={() => setActiveIndex(5)} className={isActive(5)}>
                    커뮤니티
                  </Button>
                </li>
                <li>
                  <Button onClick={() => setActiveIndex(6)} className={isActive(6)}>
                    이벤트
                  </Button>
                </li>
                <li>
                  <Button onClick={() => setActiveIndex(7)} className={isActive(7)}>
                    마이페이지
                  </Button>
                </li>
              </ul>
              {isActive(1) && (
                <ul className={cn(styles.menuDepth2, styles.category)}>
                  <ToggleList title="육가공" icon="category1">
                    <li>
                      <Link to="/category/list">3DEPTH</Link>
                    </li>
                    <li>
                      <Link to="/category/list">3DEPTH</Link>
                    </li>
                    <li>
                      <Link to="/category/list">3DEPTH</Link>
                    </li>
                  </ToggleList>
                  <ToggleList title="계육·수산가공" icon="category2">
                    <li>
                      <Link to="/category/list">3DEPTH</Link>
                    </li>
                  </ToggleList>
                  <ToggleList title="핫도그·만두·냉동기타" icon="category3">
                    <li>
                      <Link to="/category/list">3DEPTH</Link>
                    </li>
                  </ToggleList>
                  <ToggleList title="계란·치즈·두부·묵" icon="category4">
                    <li>
                      <Link to="/category/list">3DEPTH</Link>
                    </li>
                  </ToggleList>
                  <ToggleList title="음료류" icon="category5">
                    <li>
                      <Link to="/category/list">3DEPTH</Link>
                    </li>
                  </ToggleList>
                  <ToggleList title="후식류" icon="category6">
                    <li>
                      <Link to="/category/list">3DEPTH</Link>
                    </li>
                  </ToggleList>
                  <ToggleList title="소스·드레싱" icon="category7">
                    <li>
                      <Link to="/category/list">3DEPTH</Link>
                    </li>
                  </ToggleList>
                  <ToggleList title="가공기타·비식품" icon="category8">
                    <li>
                      <Link to="/category/list">3DEPTH</Link>
                    </li>
                  </ToggleList>
                  <ToggleList title="채식" icon="category9">
                    <li>
                      <Link to="/category/list">3DEPTH</Link>
                    </li>
                  </ToggleList>
                  <ToggleList title="분가공·분류" icon="category10">
                    <li>
                      <Link to="/category/list">3DEPTH</Link>
                    </li>
                  </ToggleList>
                  <ToggleList title="농산·수산·축산물" icon="category11">
                    <li>
                      <Link to="/category/list">3DEPTH</Link>
                    </li>
                  </ToggleList>
                  <ToggleList title="자연드림" icon="category12">
                    <li>
                      <Link to="/category/list">3DEPTH</Link>
                    </li>
                  </ToggleList>
                  <ToggleList title="중단상품" icon="category13">
                    <li>
                      <Link to="/category/list">3DEPTH</Link>
                    </li>
                  </ToggleList>
                </ul>
              )}
              {isActive(2) && (
                <ul className={cn(styles.menuDepth2)}>
                  <li>
                    <Link to="/product">메인상품</Link>
                  </li>
                  <li>
                    <Link to="/product/new">신상품</Link>
                  </li>
                </ul>
              )}
              {isActive(3) && (
                <ul className={cn(styles.menuDepth2)}>
                  <li>
                    <Link to="/recipe">추천 레시피</Link>
                  </li>
                  <li>
                    <Link to="/recipe/video">동영상 레시피</Link>
                  </li>
                </ul>
              )}
              {isActive(4) && (
                <ul className={cn(styles.menuDepth2)}>
                  <li>
                    <Link to="/monthly">월별 행사지</Link>
                  </li>
                </ul>
              )}
              {isActive(5) && (
                <ul className={cn(styles.menuDepth2)}>
                  <li>
                    <Link to="/archive">자료실</Link>
                  </li>
                  <li>
                    <Link to="/tip">상품사용 꿀팁</Link>
                  </li>
                  <li>
                    <Link to="/qna">Q&A</Link>
                  </li>
                  <li>
                    <Link to="/school">우리학교 급식자랑</Link>
                  </li>
                  <li>
                    <Link to="/notice">공지사항</Link>
                  </li>
                </ul>
              )}
              {isActive(6) && (
                <ul className={cn(styles.menuDepth2)}>
                  <li>
                    <Link to="/event">진행중 이벤트</Link>
                  </li>
                  <li>
                    <Link to="/endedEvent">지난 이벤트</Link>
                  </li>
                </ul>
              )}
              {isActive(7) && (
                <ul className={cn(styles.menuDepth2)}>
                  <li>
                    <Link to="/join">회원가입</Link>
                  </li>
                  <li>
                    <Link to="/login">로그인</Link>
                  </li>
                  <li>
                    <Link to="/mypage">관심상품</Link>
                  </li>
                  <li>
                    <Link to="/mypage/post">작성한 글</Link>
                  </li>
                  <li>
                    <Link to="/mypage/edit">개인정보 수정</Link>
                  </li>
                  <li>
                    <Link to="/modal">모달팝업</Link>
                  </li>
                  <li>
                    <Link to="/error1">에러1</Link>
                  </li>
                  <li>
                    <Link to="/error2">에러2</Link>
                  </li>
                  <li>
                    <Link to="/error3">에러3</Link>
                  </li>
                </ul>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};
