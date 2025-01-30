import ChangeLangComponent from "./ui/ChangeLang";
import ProfileComponent from "./ui/ProfileSection";
import SearchComponent from "./ui/SearchComponent";
import TimeComponent from "./ui/TimeComponent";

export default function HeaderComponent() {
  return (
    <div className="px-[46px] py-[25px] grid grid-cols-8 gap-6">
      <SearchComponent />
      <ChangeLangComponent />
      <TimeComponent />
      <ProfileComponent />
    </div>
  );
}
