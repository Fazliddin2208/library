import {useBookViewContext} from "@/context/useBookViewContext";
import ActionComponent from "../ui/Media/ActionComponent";
import {imageSetter} from "@/shared/utils/imageSetter";

export default function MediaSection() {
  const {book} = useBookViewContext();
  return (
    <div className="bg-light rounded-md px-8 py-6 col-span-2">
      <img src={imageSetter(book?.images[0]?.Location)} alt="book image" className="w-full border" />
      <ActionComponent />
    </div>
  );
}
