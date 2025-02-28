import {useBooksList} from "@/services/book/queries";
import RecommendedCard from "./RecommendedCard";
import {BookType} from "@/types/BookType";
import {Skeleton} from "@/components/ui/skeleton";
import {useEffect} from "react";
import {toaster} from "@/components/ui/toaster";

export default function RecommendedCards() {
  const {books, isPending, isError, error} = useBooksList();
  const limitedBooks = books?.slice(0, 8);

  useEffect(() => {
    if (isError) {
      toaster.create({
        title: error?.message,
        type: "error",
      });
    }
  }, [isError, error]);

  return (
    <div className="grid grid-cols-8 gap-4">
      {isPending
        ? Array.from({length: 8}).map((_, index) => <Skeleton key={index} height={"200px"} />)
        : limitedBooks?.map((book: BookType) => <RecommendedCard book={book} key={book?._id} />)}
    </div>
  );
}
