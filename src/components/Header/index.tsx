import ChangeLangComponent from "./ui/ChangeLang";
import ProfileComponent from "./ui/ProfileSection";
import SearchComponent from "./ui/SearchComponent";
import TimeComponent from "./ui/TimeComponent";

export default function HeaderComponent() {
  return (
    <div className="py-[25px] grid grid-cols-9 gap-6">
      <SearchComponent />
      <ChangeLangComponent />
      <TimeComponent />
      <ProfileComponent />
    </div>
  );
}
