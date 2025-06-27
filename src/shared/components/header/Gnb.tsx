/**
 * Component: Gnb.tsx
 * Description: Gnb 컴포넌트 - 2Depth 최대 높이에 맞춰 배경 높이 적용
 */
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHeaderContext } from '~/shared/context/HeaderContext';
import styles from '~/shared/css/Header.module.css';
import { cn } from '~/shared/utils';
import { useClickOutside } from '~/shared/utils/useClickOutside';

export const Gnb = () => {
  const gnbRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState(0);
  const { setIsHeaderFixed, isHeaderFixed, isGnbVisible, setIsGnbVisible } = useHeaderContext();

  const handleMaxHeight = () => {
    const gnb = gnbRef.current;
    const lists = gnb?.querySelectorAll(`.${styles.gnbDepth2}`);
    let max = 0;
    lists?.forEach((el) => {
      const h = (el as HTMLElement).offsetHeight;
      if (h > max) max = h;
    });
    setMaxHeight(max);
  };
  const handleOnFocus = (visibility: boolean) => {
    setIsGnbVisible(visibility);
    if (visibility) {
      setIsHeaderFixed(true);
    }
  };
  useClickOutside(gnbRef, () => setIsGnbVisible(false));
  useEffect(() => {
    handleMaxHeight();
    if (!isHeaderFixed) {
      setIsGnbVisible(false);
    }
    window.addEventListener('resize', handleMaxHeight);
    return () => {
      window.removeEventListener('resize', handleMaxHeight);
    };
  }, [isHeaderFixed, setIsGnbVisible]);

  return (
    <div
      ref={gnbRef}
      aria-label="주요 메뉴"
      onMouseEnter={() => setIsGnbVisible(true)}
      onMouseLeave={() => setIsGnbVisible(false)}
      onFocus={() => handleOnFocus(true)}
      onBlur={(e) => {
        const next = e.relatedTarget as HTMLElement | null;
        if (!next || !gnbRef.current?.contains(next)) {
          setIsGnbVisible(false);
        }
      }}
      onMouseOver={() => setIsGnbVisible(true)}
      onMouseOut={() => setIsGnbVisible(false)}
      className={cn(styles.gnb, isGnbVisible && styles.gnbVisible)}
    >
      <ul className={cn('flex', styles.gnbDepth1)}>
        <li>
          <Link to="/category/list">신상품</Link>
          <ul className={cn(styles.gnbDepth2)} role="menu">
            <li>
              <Link to="/" className="rounded-full">
                메인상품
              </Link>
            </li>
            <li>
              <Link to="/" className="rounded-full">
                신상품
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/recipe">레시피</Link>
          <ul className={cn(styles.gnbDepth2)}>
            <li>
              <Link to="/" className="rounded-full">
                추천 레시피
              </Link>
            </li>
            <li>
              <Link to="/" className="rounded-full">
                동영상 레시피
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/">월간행사</Link>
          <ul className={cn(styles.gnbDepth2)}>
            <li>
              <Link to="/" className="rounded-full">
                월별 행사지
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/archive">커뮤니티</Link>
          <ul className={cn(styles.gnbDepth2)}>
            <li>
              <Link to="/" className="rounded-full">
                자료실
              </Link>
            </li>
            <li>
              <Link to="/" className="rounded-full">
                상품사용 꿀팁
              </Link>
            </li>
            <li>
              <Link to="/" className="rounded-full">
                Q&A
              </Link>
            </li>
            <li>
              <Link to="/" className="rounded-full">
                우리학교 급식자랑
              </Link>
            </li>
            <li>
              <Link to="/" className="rounded-full">
                공지사항
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/event">이벤트</Link>
          <ul className={styles.gnbDepth2}>
            <li>
              <Link to="/" className="rounded-full">
                진행중 이벤트
              </Link>
            </li>
            <li>
              <Link to="/" className="rounded-full">
                지난 이벤트
              </Link>
            </li>
          </ul>
        </li>
      </ul>
      <div className={styles.bg} style={{ height: `${maxHeight}px` }} />
    </div>
  );
};
