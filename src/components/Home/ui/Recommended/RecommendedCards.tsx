import {useBooksList} from "@/services/book/queries";
import RecommendedCard from "./RecommendedCard";
import {BookType} from "@/types/BookType";
import {Skeleton} from "@/components/ui/skeleton";

export default function RecommendedCards() {
  const {books, isPending} = useBooksList();
  const limitedBooks = books?.slice(0, 8);

  return (
    <div className="grid grid-cols-8 gap-4">
      {isPending
        ? Array.from({length: 8}).map((_, index) => <Skeleton key={index} height={"200px"} />)
        : limitedBooks?.map((book: BookType) => <RecommendedCard book={book} key={book?._id} />)}
    </div>
  );
}
