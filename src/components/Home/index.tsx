import ArrivalsSection from "./sections/ArrivalsSection";
import QuotesSection from "./sections/QuotesSection";
import RecommendedSection from "./sections/RecommendedSection";

export default function HomeComponent() {
  return (
    <div>
      <div className="grid grid-cols-8 gap-10">
        <QuotesSection />
        <ArrivalsSection />
      </div>

      <h2 className="text-3xl font-[600] mt-8 mb-4">Good Morning</h2>
      <RecommendedSection />
    </div>
  );
}
