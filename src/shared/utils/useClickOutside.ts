import { useEffect } from 'react';

/**
 * 특정 DOM 요소의 외부를 클릭했을 때 콜백 함수를 실행하는 커스텀 훅
 * @param {RefObject<HTMLElement>} ref - 감지할 영역을 참조하는 ref 객체
 * @param {() => void} callback - 외부 클릭 시 실행될 콜백 함수
 */
export const useClickOutside = (ref: React.RefObject<HTMLElement>, callback: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('pointerdown', handleClickOutside);
    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
    };
  }, [ref, callback]);
};
