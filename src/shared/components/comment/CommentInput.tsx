import { Swiper, SwiperSlide } from 'swiper/react';
import { cn } from '~/shared/utils';
import { Icon } from '../Icon';
import { RatioImage } from '../RatioImage';

interface CommentInputProps {
  className?: string;
  placeholder?: string;
  hasAttachment?: boolean;
}

export const CommentInput = ({
  className,
  placeholder = '댓글을 남겨보세요',
  hasAttachment,
}: CommentInputProps) => {
  return (
    <div className={cn('flex flex-col items-end gap-[12px]', className)}>
      <div className="flex flex-col justify-start gap-[20px] w-full relative border border-gray-500 bg-white rounded-[8px] p-[16px] pb-[40px] overflow-hidden">
        {hasAttachment && (
          <Swiper slidesPerView="auto" spaceBetween={8} className="overflow-visible m-0">
            <SwiperSlide className="relative w-[100px]">
              <RatioImage
                ratio="1/1"
                isContain
                src="/schoolfood/images/img/product01.jpg"
                alt="상품 이미지"
                className="rounded-[16px]"
              />
              <button type="button" className="absolute top-[-8px] right-[-8px]">
                <Icon src="delete_attachment.svg" />
              </button>
            </SwiperSlide>
            <SwiperSlide className="relative w-[100px]">
              <RatioImage
                ratio="1/1"
                isContain
                src="/schoolfood/images/img/product01.jpg"
                alt="상품 이미지"
                className="rounded-[16px]"
              />
              <button type="button" className="absolute top-[-8px] right-[-8px]">
                <Icon src="delete_attachment.svg" />
              </button>
            </SwiperSlide>
            <SwiperSlide className="relative w-[100px]">
              <RatioImage
                ratio="1/1"
                isContain
                src="/schoolfood/images/img/product01.jpg"
                alt="상품 이미지"
                className="rounded-[16px]"
              />
              <button type="button" className="absolute top-[-8px] right-[-8px]">
                <Icon src="delete_attachment.svg" />
              </button>
            </SwiperSlide>
            <SwiperSlide className="relative w-[100px]">
              <RatioImage
                ratio="1/1"
                isContain
                src="/schoolfood/images/img/product01.jpg"
                alt="상품 이미지"
                className="rounded-[16px]"
              />
              <button type="button" className="absolute top-[-8px] right-[-8px]">
                <Icon src="delete_attachment.svg" />
              </button>
            </SwiperSlide>
            <SwiperSlide className="relative w-[100px]">
              <RatioImage
                ratio="1/1"
                isContain
                src="/schoolfood/images/img/product01.jpg"
                alt="상품 이미지"
                className="rounded-[16px]"
              />
              <button type="button" className="absolute top-[-8px] right-[-8px]">
                <Icon src="delete_attachment.svg" />
              </button>
            </SwiperSlide>
            <SwiperSlide className="relative w-[100px]">
              <RatioImage
                ratio="1/1"
                isContain
                src="/schoolfood/images/img/product01.jpg"
                alt="상품 이미지"
                className="rounded-[16px]"
              />
              <button type="button" className="absolute top-[-8px] right-[-8px]">
                <Icon src="delete_attachment.svg" />
              </button>
            </SwiperSlide>
            <SwiperSlide className="relative w-[100px]">
              <RatioImage
                ratio="1/1"
                isContain
                src="/schoolfood/images/img/product01.jpg"
                alt="상품 이미지"
                className="rounded-[16px]"
              />
              <button type="button" className="absolute top-[-8px] right-[-8px]">
                <Icon src="delete_attachment.svg" />
              </button>
            </SwiperSlide>
          </Swiper>
        )}

        <textarea
          placeholder={placeholder}
          className="w-full resize-none placeholder:text-placeholder border-none p-0 h-[72px]"
        />
        <div className="absolute right-[16px] bottom-[16px] text-right">
          <p className="text-base text-gray-400">
            <span className="text-gray-800">0</span>/500
          </p>
        </div>
      </div>
      <div className="flex items-center gap-[8px]">
        {hasAttachment && (
          <button className="btn-gray-400 btn-md flex items-center gap-[4px]" type="button">
            <span>이미지 추가</span>
            <Icon src="plus_16.svg" />
          </button>
        )}
        <button className="btn-primary btn-md" type="button">
          등록
        </button>
      </div>
    </div>
  );
};
