import BookImage from "@/assets/images/harry.png";
import {BookType} from "@/types/BookType";
import {Link} from "react-router-dom";

type Props = {
  book?: BookType;
};

export default function RecommendedCard({book}: Props) {
  const imageSrc = book?.images[0]?.Location;
  return (
    <Link to={`/books/${book?._id}`} className="bg-light p-3 rounded-[10px]">
      <img src={imageSrc ?? BookImage} alt="book image" className="w-full h-[150px] object-top object-fill" />
      <h4 className="text-xs line-clamp-1">{book?.title}</h4>
      <p className="text-[10px] line-clamp-1">{book?.author}</p>
      <p className="text-[10px]">
        {book?.price}
        <span className="text-light-foreground">/10</span>
      </p>
    </Link>
  );
}
