import BookImage from "@/assets/images/harry.png";
import { BookType } from "@/types/BookType";

type Props = {
  book?: BookType
};

export default function ArrivalCard({book}: Props) {
  console.log(book);
  
  return (
    <div className="rounded-[10px] p-4" style={{
        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)"
    }}>
      <img src={BookImage} alt="book image" className="w-full h-full object-top object-fill" />
    </div>
  );
}
