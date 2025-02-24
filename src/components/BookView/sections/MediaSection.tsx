import {useBookViewContext} from "@/context/useBookViewContext";
import DefaultImage from "@/assets/images/book.jpg";
import ActionComponent from "../ui/Media/ActionComponent";



export default function MediaSection() {
  const {book} = useBookViewContext();
  return (
    <div className="bg-light rounded-md px-8 py-6 col-span-2">
      <img src={book?.images[0]?.Location ?? DefaultImage} alt="book image" className="w-full border" />
      <ActionComponent />
      
    </div>
  );
}
