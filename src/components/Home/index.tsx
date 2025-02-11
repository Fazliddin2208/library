import QuotesSection from "./sections/QuotesSection";

export default function HomeComponent() {
  return (
    <div className="grid grid-cols-8 gap-10">
      <QuotesSection />

      <div className="col-span-5 border">salom</div>
    </div>
  );
}
