import {Route, Routes} from "react-router-dom";
import {RoutesList} from "./routes-list";
import LoginPage from "@/page/LoginPage";
import NotFoundPage from "@/page/NotFoundPage";
import {MainLayout} from "@/layout/main-layout";

// const loadPage = (page: ReactNode) => lazy(() => import(`@/pages/${page}`));
interface RouteTypes {
  path?: string;
  page?: React.ReactNode;
  icon?: React.ReactNode;
  permission?: string;
  children?: RouteTypes[];
}

export const ROUTES = () => {
  //   const user = useAppSelector((state) => state.userProfile.value);

  const mainRoutes = RoutesList.map((page: RouteTypes) => {
    return (
      <Route key={page.path} path={page.path} element={page.page}>
        {page.children &&
          page.children.map((child) => {
            return (
              <Route
                key={child.path}
                path={child.path}
                element={child.page}
                // element={user?.permissions?.includes(page?.permission ?? "") ? child.page : <NoAccessPage />}
              />
            );
          })}
      </Route>
    );
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {mainRoutes}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
};
