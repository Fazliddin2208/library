import {useBookViewContext} from "@/context/useBookViewContext";
import {Button, RatingGroup} from "@chakra-ui/react";
import {LiaReadme} from "react-icons/lia";

export default function TitleComponent() {
  const {book} = useBookViewContext();
  const rating = book?.price ? book?.price / 2 : 0;

  return (
    <div className="flex flex-col items-start gap-8">
      <div>
        <h1 className="text-3xl">{book?.title}</h1>
        <p>By <span className="underline">{book?.author}</span></p>
      </div>

      <RatingGroup.Root count={5} value={rating} size="sm" colorPalette={"yellow"} readOnly allowHalf>
        <RatingGroup.Control>
          {Array.from({length: 5}).map((_, index) => (
            <RatingGroup.Item key={index} index={index + 1}>
              <RatingGroup.ItemIndicator />
            </RatingGroup.Item>
          ))}
        </RatingGroup.Control>
      </RatingGroup.Root>

      <Button className="border px-2.5 py-1.5 min-w-[200px] bg-success text-light flex items-center">
        Read now <LiaReadme />
      </Button>
    </div>
  );
}
