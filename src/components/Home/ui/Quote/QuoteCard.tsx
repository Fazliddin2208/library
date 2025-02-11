interface QuoteType {
  author: string;
  id: number;
  quote: string;
}

type Props = {
  quote: QuoteType;
};

export default function QuoteCard({quote}: Props) {
  return (
    <div className="text-light space-y-2.5">
      <h2 className="text-lg">Today's Quote</h2>
      <p className="text-sm">{quote?.quote}</p>
      <p className="text-sm text-end"> -{quote?.author}</p>
    </div>
  );
}
