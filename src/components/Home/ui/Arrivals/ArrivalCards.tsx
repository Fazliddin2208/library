import {useNewBooksList} from "@/services/book/queries";
import ArrivalCard from "./ArrivalCard";
import {BookType} from "@/types/BookType";

type Props = {};

export default function ArrivalCards({}: Props) {
  const {books, isPending, isError} = useNewBooksList();
  console.log(books, isPending, isError);

  return (
    <div className="bg-light flex-1 rounded-r-[10px] grid grid-cols-4 py-3 px-4 gap-5">
      {books?.map((book: BookType) => (
        <ArrivalCard book={book} key={book?._id} />
      ))}
    </div>
  );
}
