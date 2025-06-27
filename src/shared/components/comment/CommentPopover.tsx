import { Button } from '@headlessui/react';
import { Icon } from '../Icon';
import { cn } from '~/shared/utils';
import { Dropdown, DropdownContent, DropdownTrigger } from '../Dropdown';

interface CommentPopoverProps {
  className?: string;
}

export const CommentPopover = ({ className }: CommentPopoverProps) => {
  return (
    <Dropdown
      horizontal="start"
      vertical={{ top: 0 }}
      className={cn('relative h-[24px]', className)}
    >
      <DropdownTrigger>
        <Icon src="dots.svg" alt="더보기" />
      </DropdownTrigger>
      <DropdownContent>
        <Button className="flex items-center justify-center h-[32px] px-[12px] bg-white border border-gray-300 rounded-[6px]">
          <span className="text-xs text-gray-500">댓글 삭제</span>
        </Button>
      </DropdownContent>
    </Dropdown>
  );
};
