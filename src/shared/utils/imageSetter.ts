import DefaultImage from "@/assets/images/book.jpg";

export const imageSetter = (image?: string) => {
  return image || DefaultImage;
};
