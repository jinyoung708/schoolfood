import { ImageGallery } from './ImageGallery/ImageGallery';
import { ProductInfo } from './ProductInfo/ProductInfo';

export const CategoryTop = () => {
  return (
    <div className="lg:w-full flex flex-col lg:flex-row gap-[24px] lg:gap-[48px] mx-[-16px] lg:mx-0">
      <div className="w-full lg:w-[50%]">
        <ImageGallery
          items={[
            {
              thumbSrc: '/images/img/product01.jpg',
              mainSrc: '/images/img/productMain01.jpg',
              badges: ['HACCP'],
            },
            {
              thumbSrc: '/images/img/product02.jpg',
              mainSrc: '/images/img/product02.jpg',
            },
            {
              thumbSrc: '/images/img/product03.jpg',
              mainSrc: '/images/img/product03.jpg',
            },
            {
              thumbSrc: '/images/img/product04.jpg',
              mainSrc: '/images/img/product04.jpg',
            },
            {
              thumbSrc: '/images/img/product05.jpg',
              mainSrc: '/images/img/product05.jpg',
            },
          ]}
        />
      </div>
      <div className="px-[16px] lg:px-0 lg:w-[46.875%]">
        <ProductInfo />
      </div>
    </div>
  );
};
