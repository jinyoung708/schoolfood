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
        <div className="flex flex-col lg:flex-row justify-between pt-[20px] lg:pt-[40px] pb-[calc(60px+var(--safeArea-b))] lg:pb-[80px]">
          <div className={styles.leftBox}>
            <p className="text-xs lg:text-lg font-medium mb-[8px] lg:mb-[20px]">고객 상담 센터</p>
            <p className="text-22 text-primary lg:text-[42px] font-semibold mb-[8px] lg:mb-[26px]">
              1600-0000
            </p>
            <p className="text-xs lg:text-lg text-gray-500 mb-[4px] lg:mb-[8px] ">
              월~금 07:00 ~ 18:00
            </p>
            <p className="text-xs lg:text-lg text-gray-500">공휴일 07:00 ~ 13:00(일요일 휴무)</p>
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
            <p className={styles.textList}>
              <span>법인명 (상호) : 튼튼스쿨</span>
              <span>사업자등록번호 : 000-00-00000</span>
              <span>
                <Link to="/" className="underline font-medium">
                  사업자정보 확인
                </Link>
              </span>
            </p>
            <p className={styles.textList}>
              <span>통신판매업 : 제 2000-서울강남-00000 호</span>
            </p>
            <p className={styles.textList}>
              <span>주소 : 서울특별시 강남구 테헤란로 000, 00층(역삼동)</span>
              <span>대표이사 : 홍길동</span>
            </p>
            <p className={styles.textList}>
              <span>메일문의 : abcde123@gmail.com</span>
              <span>팩스: 070 - 0000 - 0000</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
