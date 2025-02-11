import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import QuoteCard from "../ui/Quote/QuoteCard";
import {useQuotesList} from "@/services/other/queries";
import {SkeletonText} from "@/components/ui/skeleton";

interface QuoteType {
  author: string;
  id: number;
  quote: string;
}

export default function QuotesSection() {
  const {quotes, isLoading} = useQuotesList();

  const responsive = {
    superLargeDesktop: {
      breakpoint: {max: 4000, min: 3000},
      items: 1,
    },
    desktop: {
      breakpoint: {max: 3000, min: 1024},
      items: 1,
    },
    tablet: {
      breakpoint: {max: 1024, min: 464},
      items: 1,
    },
    mobile: {
      breakpoint: {max: 464, min: 0},
      items: 1,
    },
  };
  return (
    <div className="col-span-3 quote-carousel px-[23px] py-8">
      {isLoading ? (
        <div className="text-light space-y-2.5">
          <h2 className="text-lg">Today's Quote</h2>
          <SkeletonText noOfLines={2} gap="1" colorPalette={"orange"} />
          <SkeletonText noOfLines={1} width={150} className="ml-auto" />
        </div>
      ) : (
        <Carousel responsive={responsive} arrows={false} showDots dotListClass="quotes-dots" className="">
          {quotes?.map((quote: QuoteType) => (
            <QuoteCard quote={quote} key={quote?.id} />
          ))}
        </Carousel>
      )}
    </div>
  );
}
