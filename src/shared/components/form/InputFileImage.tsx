/**
 * Component: InputFileImage.tsx
 * Description: 이미지 파일 첨부 컴포넌트
 * Props:
 *  - label?: string (입력 필드 라벨)
 *  - required?: boolean (필수 입력 여부, 라벨에 표시)
 *  - className?: string (추가 클래스명)
 * Usage:
 *  <InputFileImage label="급식 등록" />
 */
import { useState } from 'react';
import { Button, Field, Label } from '@headlessui/react';
import { cn } from '~/shared/utils';
import styles from '~/shared/css/Form.module.css';
import { Icon } from '../Icon';
import { AddProduct } from '../modal/AddProduct';
import { AddProductTooltip } from '../modal/AddProductTooltip';

interface InputFileImageProps {
  label?: string;
  required?: boolean;
  className?: string;
}

interface ImageItem {
  id: number;
  file: File | null;
  previewUrl: string | null;
}

export const InputFileImage = ({ label, required, className }: InputFileImageProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const [images, setImages] = useState<ImageItem[]>([
    { id: Date.now(), file: null, previewUrl: null },
  ]);

  const handleFileChange = (index: number, file: File) => {
    const previewUrl = URL.createObjectURL(file);
    const newImages = [...images];
    newImages[index].file = file;
    newImages[index].previewUrl = previewUrl;
    setImages(newImages);
  };

  const handleAddImageBox = () => {
    const newImage = { id: Date.now(), file: null, previewUrl: null };
    setImages([...images, newImage]);
  };

  const handleRemoveImageBox = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
  };

  return (
    <Field className={cn(styles.fileWrap, className)}>
      {label && (
        <Label className={cn(required ? styles.required : '', styles.label)}>{label}</Label>
      )}

      {images.map((img, index) => (
        <div key={img.id} className="imgBox mb-[12px]">
          <input
            type="file"
            accept="image/*"
            id={`image-input-${img.id}`}
            style={{ display: 'none' }}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleFileChange(index, file);
            }}
          />
          <div
            className={cn(
              'flex items-center relative justify-center w-full border border-dashed border-gray-350 rounded-[8px] aspect-[4/3]',
              !img.previewUrl && 'cursor-pointer',
            )}
            {...(!img.previewUrl && {
              onClick: () => document.getElementById(`image-input-${img.id}`)?.click(),
            })}
          >
            {img.previewUrl ? (
              // 이미지 첨부 후
              <>
                <img
                  src={img.previewUrl}
                  alt={`첨부 이미지 미리보기 ${index + 1}`}
                  className="w-full object-contain h-full"
                />

                <div className="flex items-center gap-[11px] lg:justify-center absolute left-0 bottom-[13px] lg:bottom-[23px] w-full px-[12px] lg:px-[30px] ">
                  <span className="px-[12px] py-[2px] bg-black/60 rounded-[4px] text-sm text-gray-200 font-medium">
                    사진을 클릭하여 상품을 태그하세요.
                  </span>
                  <div className="lg:absolute lg:right-[30px] lg:top-1/2 lg:-translate-y-1/2 flex gap-[8px] items-center ml-auto">
                    <Button
                      className="flex items-center justify-center w-[40px] h-[40px] bg-black/60 rounded-[4px]"
                      onClick={() => document.getElementById(`image-input-${img.id}`)?.click()}
                    >
                      <Icon src="image.svg" alt="이미지 변경" />
                    </Button>
                    <Button
                      className="flex items-center justify-center w-[40px] h-[40px] bg-black/60 rounded-[4px]"
                      onClick={() => handleRemoveImageBox(index)}
                    >
                      <Icon src="recycle_bin.svg" alt="이미지 삭제" />
                    </Button>
                  </div>
                </div>

                {/* 상품 검색 모달 팝업 - left, top 값은 % 단위로 전달 */}
                <AddProduct
                  left={31}
                  top={30}
                  isOpen={openIndex === 0}
                  onToggle={() => setOpenIndex(openIndex === 0 ? null : 0)}
                  onClose={() => setOpenIndex(null)}
                />

                {/* 상품 정보 툴팁 팝업 - left, top 값은 % 단위로 전달 */}
                <AddProductTooltip
                  left={17}
                  top={65}
                  isOpen={openIndex === 1}
                  onToggle={() => setOpenIndex(openIndex === 1 ? null : 1)}
                  onClose={() => setOpenIndex(null)}
                  deleteBtn
                />
              </>
            ) : (
              // 이미지 첨부 전
              <div className="text-center p-[10px]">
                <Icon src="plus_circle.svg" className="mx-auto mb-[24px]" />
                <p className="text-base font-semibold text-gray-600 mb-[2px]">
                  대표 급식 이미지를 등록해주세요.
                </p>
                <p className="text-sm text-gray-500">*jpg, jpeg, png 확장자 가능</p>
              </div>
            )}
          </div>
        </div>
      ))}

      <Button
        type="button"
        onClick={handleAddImageBox}
        className="flex items-center gap-[4px] mt-[12px] btn-border-primary btn-lg btn-icon"
      >
        이미지 추가
        <Icon src="plus_brown.svg" />
      </Button>
    </Field>
  );
};
