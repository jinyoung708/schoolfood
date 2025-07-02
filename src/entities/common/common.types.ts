export type Post = {
  seq: number;
  title: string;
  description: string;
  images: string[];
  likeCount: number;
  commentNumber: number;
  categoryId: number;
  categoryName: string;
  created: string;
};

export type SelectBoxTypes = {
  value: string;
  label: string;
};

export type Category = {
  seq: number;
  name: string;
};
