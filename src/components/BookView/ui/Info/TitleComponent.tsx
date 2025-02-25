import {useBookViewContext} from "@/context/useBookViewContext";
import {RatingGroup} from "@chakra-ui/react";

export default function TitleComponent() {
  const {book} = useBookViewContext();
  return (
    <div>
      <h1>{book?.title}</h1>
      <p>By {book?.author}</p>

      <RatingGroup.Root readOnly count={5} defaultValue={3} size="sm">
        <RatingGroup.HiddenInput />
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
