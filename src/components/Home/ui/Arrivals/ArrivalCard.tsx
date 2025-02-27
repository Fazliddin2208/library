import {imageSetter} from "@/shared/utils/imageSetter";
import {BookType} from "@/types/BookType";
import {Link} from "react-router-dom";

type Props = {
  book?: BookType;
};

export default function ArrivalCard({book}: Props) {
  return (
    <Link
      to={`/books/${book?._id}`}
      className="rounded-[10px] p-4"
      style={{
        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      <img src={imageSetter()} alt="book image" className="w-full h-full object-top object-fill" />
    </Link>
  );
}
