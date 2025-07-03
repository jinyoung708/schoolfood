/**
 * Component: Footer.tsx
 * Description: 사이트 하단에 위치하는 Footer 컴포넌트
 */
import { Button } from '@headlessui/react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '~/shared/css/Footer.module.css';
import { FooterLogo } from '~/shared/components/footer/FooterLogo';
import { FooterNotice } from '~/shared/components/footer/FooterNotice';
import { Icon } from '~/shared/components/Icon';
import { cn } from '~/shared/utils';

export const Footer = () => {
  const [isFloatingBtnVisible, setIsFloatingBtnVisible] = useState(false);
  const floatingBtnRef = useRef<HTMLDivElement>(null);
  const footerElementRef = useRef<HTMLElement>(null);
  const defaultBottomOffset = 20;

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;
      setIsFloatingBtnVisible(scrollY > 0);

      const floatingEl = floatingBtnRef.current;
      const footerEl = footerElementRef.current;

      if (!floatingEl || !footerEl) return;

      const footerTop = footerEl.getBoundingClientRect().top + window.scrollY;
      const windowBottom = scrollY + window.innerHeight;

      if (windowBottom > footerTop) {
        const overlapAmount = windowBottom - footerTop + defaultBottomOffset;
        floatingEl.style.bottom = `${overlapAmount}px`;
      } else {
        floatingEl.style.bottom = `${defaultBottomOffset}px`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <footer ref={footerElementRef} className="w-full mt-[30px] lg:mt-[120px]">
      <div
        ref={floatingBtnRef}
        className={cn(
          'z-[var(--footer-z)]',
          isFloatingBtnVisible
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none',
          styles.floatingBtn,
        )}
        style={{ bottom: `${defaultBottomOffset}px` }}
      >
        <Button>
          <Icon src="chatbot.svg" alt="챗봇" />
        </Button>
        <Link to="">
          <Icon src="bookmark_gray.svg" className="mb-[-2px]" />
          관심상품
        </Link>
        <Button onClick={handleScrollToTop}>
          <Icon src="arrow_top.svg" className="mb-[-2px]" />
          TOP
        </Button>
      </div>

      <FooterNotice />

      <FooterLogo />

      <div className="container max-w-screen-lg mx-auto">
        <div className="flex flex-col-reverse lg:flex-row justify-between pt-[20px] lg:pt-[40px] pb-[calc(60px+var(--safeArea-b))] lg:pb-[80px] lg:gap-[10px]">
          <div className={styles.leftBox}>
            <p className={styles.textList}>
              <span>상호명 : 씨제이프레시웨이주식회사</span>
              <span>대표자명 : 이건일</span>
              <span>사업자등록번호 : 603-81-11270</span>
              <span>사이트 이용 문의 : noreply</span>
            </p>
            <p className={styles.textList}>
              <span>
                주소 : 경기도 용인시 기흥구 기곡로 32(하갈동)(주사무소 : 서울시 마포구 월드컵북로
                54길 25 S-city)
              </span>
            </p>
            <p className="mt-[20px] lg:mt-[24px] text-sm lg:text-lg text-gray-500">
              COPYRIGHT© CJ FRESHWAY. ALL RIGHTS RESERVED.
            </p>
          </div>
          <div className={styles.rightBox}>
            <div className={styles.linkList}>
              <Link to="/legal/privacy" className="font-semibold">
                개인정보처리방침
              </Link>
              <Link to="/legal/terms">이용약관</Link>
              <Link to="/legal/notice">법적고지</Link>
              <Link to="/legal/email">이메일 무단수집 거부</Link>
              <Link to="/">온라인제보</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
