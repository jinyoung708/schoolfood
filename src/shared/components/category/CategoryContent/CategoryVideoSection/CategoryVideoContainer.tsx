import { cn } from '~/shared/utils';

interface CategoryVideoContainerProps {
  videoId: string;
  isVertical?: boolean;
  className?: string;
}

export const CategoryVideoContainer = ({
  videoId,
  isVertical,
  className,
}: CategoryVideoContainerProps) => {
  return (
    <div
      className={cn(
        isVertical
          ? 'w-[66%] lg:w-[415px] aspect-[227/404] lg:aspect-[415/738]'
          : 'w-full lg:w-[626px] aspect-[343/202] lg:aspect-[626/369]',
        className,
      )}
    >
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?&modestbranding=1`}
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="YouTube"
      />
    </div>
  );
};
