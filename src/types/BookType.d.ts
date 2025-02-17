import {BookCategory} from "@/globals/constants";

export type ImageType = {
  Bucket: string;
  Key: string;
  Location: string;
};

export interface BookType {
  author: string;
  category: BookCategory;
  description: string;
  _id: string;
  images: ImageType[];
  title: string;
  price?: number;
}
