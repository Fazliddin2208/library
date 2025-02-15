import ArrivalsSection from "./sections/ArrivalsSection";
import QuotesSection from "./sections/QuotesSection";

export default function HomeComponent() {
  return (
    <div className="grid grid-cols-8 gap-10 pr-[46px]">
      <QuotesSection />

      <ArrivalsSection />
    </div>
  );
}
