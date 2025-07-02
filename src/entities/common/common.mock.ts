import { Post, Category } from './common.types';

const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const imageList = [
  'https://images.unsplash.com/photo-1531564701487-f238224b7ce3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9zdHxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1521575107034-e0fa0b594529?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9zdHxlbnwwfHwwfHx8MA%3D%3D',
  'https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg',
  'https://images.pexels.com/photos/1842865/pexels-photo-1842865.jpeg',
  'https://cdn.pixabay.com/photo/2024/08/26/23/38/maranhao-sheets-9000410_1280.jpg',
  'https://cdn.pixabay.com/photo/2025/02/11/20/43/cormorant-9399801_640.jpg',
  'https://cdn.pixabay.com/photo/2024/12/27/14/58/owl-9294302_640.jpg',
  'https://media.istockphoto.com/id/897581054/photo/cute-woman-photographer.jpg?s=612x612&w=0&k=20&c=dxf3Ll516j9eY1b97uFeTaXJuW2XkQ8nDrTGifxSPCg=',
  'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
  'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
];

const category: Category[] = [
  {
    seq: 1,
    name: '자유',
  },
  {
    seq: 2,
    name: '질문',
  },
];

export const PostList: Post[] = Array.from({ length: 10 }, (_, index) => {
  return {
    seq: index,
    commentNumber: getRandomNumber(100, 1000),
    likeCount: getRandomNumber(100, 1000),
    description:
      `${index > 9 ? index : `0${index}`}` +
      ' 서초소방서 입니다. 항상 각자의 위치에서 안전에 최선을 다해 주시는 서초구 공동주택 아파트 관계인(대표자), 서초주민들께 감사드립니다. 서울특별시 소방재난본부에서는 아파트 화재대피 안내방송 홍보 안내문과 음원을 제작해서 배포 중입니다',
    title: '아파트 화재대피 안내방송 홍보 안내문과 음원(서초소방서)',
    images: [imageList[index]],
    categoryId: category[index % 2].seq,
    categoryName: category[index % 2].name,
    created: '2025/02/10 14:01:00',
  };
});
