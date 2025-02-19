import {useNewBooksList} from "@/services/book/queries";
import ArrivalCard from "./ArrivalCard";
import {BookType} from "@/types/BookType";
import {Skeleton} from "@/components/ui/skeleton";

type Props = {};

export default function ArrivalCards({}: Props) {
  const {books, isPending} = useNewBooksList();

  return (
    <div className="bg-light flex-1 rounded-r-[10px] grid grid-cols-4 py-3 px-4 gap-5">
      {isPending
        ? Array.from({length: 4}).map((_, index) => <Skeleton key={index} />)
        : books?.map((book: BookType) => <ArrivalCard book={book} key={book?._id} />)}
    </div>
  );
}
