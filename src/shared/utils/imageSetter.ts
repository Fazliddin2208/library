import DefaultImage from "@/assets/images/book.jpg";

export const imageSetter = (image?: string): string => {
  return image || DefaultImage;
};
