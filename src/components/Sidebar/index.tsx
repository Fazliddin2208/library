import LogoImg from "@/assets/images/logo.png";
import {Link, useLocation} from "react-router-dom";
import {sidebarLinks} from "@/data/sidebar";

export default function SidebarComponent() {
  const location = useLocation();
  const currentUrl = location?.pathname?.split("/")[1];

  const SideBarLinks = sidebarLinks.map((link) => {
    const Icon = link.icon;
    const color = `/${currentUrl}` === link.url ? "#4D4D4D" : "#8A8A8A";
    const textColor = `/${currentUrl}` === link.url ? "text-[#4D4D4D]" : "text-[#8A8A8A]";
    return (
      <li key={link.url} className={`${textColor}`}>
        <Link to={link.url} className={`flex items-center gap-2 ${textColor}`}>
          <Icon color={color} />
          {link.title}
        </Link>
      </li>
    );
  });
  return (
    <div className="min-w-[300px] bg-light py-7 flex flex-col justify-between pl-16">
      <div className="space-y-24">
        <img src={LogoImg} className="w-[50%]" alt="Logo" />
        <ul className="mt-auto space-y-4">{SideBarLinks}</ul>
      </div>
      <div className="flex flex-col gap-3">
        <Link to="/about" className="text-text hover:text-primary">
          About
        </Link>
        <Link to="/support" className="text-text hover:text-primary">
          Support
        </Link>
        <Link to="/terms" className="text-text hover:text-primary">
          Terms and conditions
        </Link>
      </div>
    </div>
  );
}
