/**
 * Component: Bookmark.tsx
 * Description: 북마크 아이콘 토글 버튼 컴포넌트
 * Props:
 *  - className: string (버튼에 추가할 CSS 클래스명, 선택적)
 * Usage:
 *  <Bookmark />
 */
import { useState } from 'react';
import { Button } from '@headlessui/react';
import { Icon } from './Icon';

interface BookmarkProps {
  className?: string;
}

export const Bookmark = ({ className = '' }: BookmarkProps) => {
  const [bookmark, setBookmark] = useState('OFF');

  return (
    <Button
      className={`${className}`}
      onClick={() => {
        setBookmark(bookmark === 'ON' ? 'OFF' : 'ON');
      }}
    >
      {bookmark === 'ON' ? (
        <Icon src="bookmark.svg" alt="북마크" />
      ) : (
        <Icon src="bookmark_white.svg" alt="북마크" />
      )}
    </Button>
  );
};
