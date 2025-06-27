import { useEffect } from 'react';

/** 스크롤을 잠글 분기점 타입: 'pc' (lg 이상), 'mo' (lg 미만), 'all' (모든 화면) */
type Breakpoint = 'pc' | 'mo' | 'all';

/**
 * body 스크롤을 잠그거나 해제하는 커스텀 훅
 * @param {boolean} isLocked - true이면 스크롤을 잠급니다.
 * @param {Breakpoint} [breakpoint='all'] - 스크롤을 잠글 분기점을 지정합니다.
 */
export const useScrollLock = (isLocked: boolean, breakpoint: Breakpoint = 'all') => {
  useEffect(() => {
    const { body } = document;
    let className = '';

    switch (breakpoint) {
      case 'pc':
        className = 'lg:overflow-hidden';
        break;
      case 'mo':
        className = 'max-lg:overflow-hidden';
        break;
      case 'all':
      default:
        className = 'overflow-hidden';
        break;
    }

    if (isLocked) {
      body.classList.add(className);
    } else {
      body.classList.remove(className);
    }

    return () => {
      body.classList.remove(className);
    };
  }, [isLocked, breakpoint]);
};
