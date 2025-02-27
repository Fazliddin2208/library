import OverviewComponent from "../ui/Info/OverviewComponent";
import TitleComponent from "../ui/Info/TitleComponent";

export default function InfoSection() {
  return (
    <div className="col-span-5 col-start 3 grid grid-cols-2">
      <TitleComponent />
      <OverviewComponent />
    </div>
  );
}
