import { cn } from '../utils';

/**
 * Component: Icon.tsx
 * Description: 아이콘 이미지를 렌더링하는 컴포넌트
 * Props:
 *  - src?: string (아이콘 이미지 파일명, `/schoolfood/schoolfood/images/icon/` 경로 기준)
 *  - width?: number (아이콘 너비, 기본 'auto')
 *  - height?: number (아이콘 높이, 기본 'auto')
 *  - alt?: string (이미지 alt 텍스트)
 *  - className?: string (추가 클래스 이름)
 * Usage:
 *  <Icon src="bookmark.svg" width={24} height={24} alt="북마크 아이콘" />
 */
interface IconProps {
  src?: string;
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
}

export const Icon = ({ width, height, src, alt = '', className }: IconProps) => {
  const style =
    width || height
      ? {
          ...(width && { width: `${width}px` }),
          ...(height && { height: `${height}px` }),
        }
      : undefined;

  return (
    <img
      src={`/schoolfood/schoolfood/images/icon/${src}`}
      alt={alt}
      className={cn('object-contain', className)}
      style={style}
      aria-hidden="true"
    />
  );
};
