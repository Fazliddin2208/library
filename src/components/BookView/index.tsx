import NavigateBack from "@/shared/Components/NavigateBack";
import Wrapper from "./ui/Wrapper";
import {BookViewContext} from "@/context/useBookViewContext";
import {useParams} from "react-router-dom";
import {useBookById} from "@/services/book/queries";

export default function BookViewComponent() {
  const {id} = useParams();

  const {book, isPending} = useBookById(id ?? "");

  console.log(id, book, isPending);

  return (
    <div className="space-y-5">
      <NavigateBack title="Back to home" />
      <BookViewContext.Provider
        value={{
          book: book,
        }}
      >
        <Wrapper />
      </BookViewContext.Provider>
    </div>
  );
}
