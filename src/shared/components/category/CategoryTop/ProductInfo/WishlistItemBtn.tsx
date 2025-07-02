import { Icon } from '~/shared/components/Icon';
import { cn } from '~/shared/utils';

interface WishlistItemBtnProps {
  wishlisted?: boolean;
  onClick?: () => void;
  className?: string;
}

export const WishlistItemBtn = ({ wishlisted, onClick, className }: WishlistItemBtnProps) => {
  return (
    <button
      type="button"
      className={cn(
        'btn-xl btn-icon flex items-center justify-center gap-[4px]',
        wishlisted ? 'btn-border-primary' : 'btn-primary',
        className,
      )}
      onClick={onClick}
    >
      <span>관심상품 {wishlisted ? '해제' : '담기'}</span>
      <Icon src={wishlisted ? 'wishlist_filled.svg' : 'wishlist.svg'} />
    </button>
  );
};
