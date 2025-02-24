import {BookType} from "@/types/BookType";
import {createContext, useContext} from "react";

interface BookViewType {
  book?: BookType;
}

export const BookViewContext = createContext<BookViewType | undefined>(undefined);

export const useBookViewContext = () => {
  const context = useContext(BookViewContext);
  if (!context) {
    throw new Error("useBookViewContext must be used within a BookViewProvider");
  }
  return context;
};
