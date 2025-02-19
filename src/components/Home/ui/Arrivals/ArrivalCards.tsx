import {useNewBooksList} from "@/services/book/queries";
import ArrivalCard from "./ArrivalCard";
import {BookType} from "@/types/BookType";
import {Skeleton} from "@/components/ui/skeleton";

type Props = {};

export default function ArrivalCards({}: Props) {
  const {books, isPending} = useNewBooksList();

  return (
    <>
      {isPending ? (
        <div className="bg-light flex-1 rounded-r-[10px] grid grid-cols-4 py-3 px-4 gap-5">
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <div className="bg-light flex-1 rounded-r-[10px] grid grid-cols-4 py-3 px-4 gap-5">
          {books?.map((book: BookType) => (
            <ArrivalCard book={book} key={book?._id} />
          ))}
        </div>
      )}
    </>
  );
}
