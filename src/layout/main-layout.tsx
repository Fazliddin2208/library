import {useLocalStorage} from "@/hooks/use-local-storage";
import {useEffect} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import HeaderComponent from "@/components/Header";
import SidebarComponent from "@/components/Sidebar";
import BgCover from "@/assets/images/login.png";

export const MainLayout = () => {
  const navigate = useNavigate();
  const token = useLocalStorage().getItem("token");

  useEffect(() => {
    !token && navigate("/login");
  });
  return (
    <>
      <img src={BgCover} alt="Cover" className="absolute z-0 left-0 top-0 h-full w-full" />
      <div className="flex h-screen font-inter relative z-10 p-6">
        <SidebarComponent />
        <div className="flex flex-col flex-1 bg-bg w-[calc(100%-300px)] px-[46px]">
          <HeaderComponent />
          <main className="overflow-y-auto layout scroll-smooth">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};
