import {useBookViewContext} from "@/context/useBookViewContext";
import {RatingGroup} from "@chakra-ui/react";

export default function TitleComponent() {
  const {book} = useBookViewContext();
  const rating = book?.price ? book?.price / 2 : 0;

  return (
    <div>
      <h1>{book?.title}</h1>
      <p>By {book?.author}</p>

      <RatingGroup.Root count={5} value={rating} size="sm" colorPalette={"yellow"} readOnly allowHalf>
        <RatingGroup.Control>
          {Array.from({length: 5}).map((_, index) => (
            <RatingGroup.Item key={index} index={index + 1}>
              <RatingGroup.ItemIndicator />
            </RatingGroup.Item>
          ))}
        </RatingGroup.Control>
      </RatingGroup.Root>
    </div>
  );
}
