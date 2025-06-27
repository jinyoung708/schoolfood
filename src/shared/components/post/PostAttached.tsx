import { cn } from '~/shared/utils';
import { InputCheckbox } from '../form/InputCheckbox';
import { DownloadBtn } from './DownloadBtn';

interface PostedAttachedProps {
  className?: string;
}

export const PostedAttached = ({ className }: PostedAttachedProps) => {
  return (
    <div className={cn('flex flex-col gap-[10px] lg:gap-[24px]', className)}>
      <div className="flex items-center justify-between">
        <span className="text-lg lg:text-2xl font-medium">첨부파일</span>
        <div className="flex items-center gap-[4px] lg:gap-[8px]">
          <DownloadBtn onClick={() => {}}>전체저장</DownloadBtn>
          <DownloadBtn onClick={() => {}}>선택저장</DownloadBtn>
        </div>
      </div>
      <div className="bg-gray-50 rounded-[4px] lg:rounded-[8px] px-[20px] py-[16px] flex flex-col gap-[16px]">
        <InputCheckbox>첨부파일.pdf</InputCheckbox>
        <InputCheckbox>첨부파일.pdf</InputCheckbox>
      </div>
    </div>
  );
};
