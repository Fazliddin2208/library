import {useLocalStorage} from "@/hooks/use-local-storage";
import {useEffect} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import HeaderComponent from "@/components/Header";
import SidebarComponent from "@/components/Sidebar";

export const MainLayout = () => {
  const navigate = useNavigate();
  const token = useLocalStorage().getItem("token");

  useEffect(() => {
    !token && navigate("/login");
  });
  return (
    <div className="flex h-screen font-inter relative z-10 p-6">
      <SidebarComponent />
      <div className="flex flex-col flex-1 bg-bg">
        <HeaderComponent />
        <main className="border">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
