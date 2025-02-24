import { useBookViewContext } from "@/context/useBookViewContext";

export default function TitleComponent() {
    const {book} = useBookViewContext();
  return (
    <div>
        <h1>{book?.title}</h1>
    </div>
  )
}