import {useBookViewContext} from "@/context/useBookViewContext";

export default function OverviewComponent() {
  const {book} = useBookViewContext();
  return (
    <div className="bg-light rounded-lg p-8">
      <h2 className="text-lg font-[600]">Description</h2>
      <p>{book?.description}</p>
    </div>
  );
}
