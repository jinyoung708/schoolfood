/**
 * Component: RatioImage.tsx
 * Description: 비율에 맞춰 이미지를 표시하는 컴포넌트
 * Props:
 *  - src: string (이미지 경로, 필수)
 *  - alt: string (이미지 대체 텍스트, 기본 빈 문자열)
 *  - ratio: string (가로/세로 비율, 예: '16/9', '4/3', 기본 '16/9')
 *  - isContain: boolean (이미지 컨테이너에 맞춰 조정 여부, 기본 false)
 *  - className: string (추가 CSS 클래스명)
 *
 * Usage:
 *  <RatioImage src="/path/to/image.jpg" ratio="4/3" alt="샘플 이미지" />
 */
import { cn } from '~/shared/utils';

interface RatioImageProps {
  src: string;
  alt?: string;
  ratio?: string;
  isContain?: boolean;
  className?: string;
}

export const RatioImage = ({
  src,
  alt = '',
  ratio = '16/9',
  isContain,
  className = '',
}: RatioImageProps) => {
  const aspectClass = `aspect-[${ratio}]`;

  return (
    <div className={cn(aspectClass, 'w-full overflow-hidden', className)}>
      <img
        src={src}
        alt={alt}
        className={cn('w-full h-full object-cover', isContain && 'object-contain')}
      />
    </div>
  );
};
