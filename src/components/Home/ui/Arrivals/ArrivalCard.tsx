import BookImage from "@/assets/images/harry.png";

type Props = {};

export default function ArrivalCard({}: Props) {
  return (
    <div className="rounded-[10px] p-4" style={{
        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)"
    }}>
      <img src={BookImage} alt="book image" className="w-full h-full object-top object-fill" />
    </div>
  );
}
