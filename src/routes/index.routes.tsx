import { Fragment, ReactComponentElement, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminChecker, AuthChecker } from "./AuthChecker.routes";
import { allRoutes } from "./all.routes";
import Loading from "@/pages/Loading";

function MainWrapper({
  route,
  children,
}: {
  route: {
    hasHomeLayout: boolean;
    hasAdminLayout: boolean;
    requiredAuth: boolean;
    layout: ReactComponentElement;
  };
  children: React.ReactNode;
}) {
  const LayoutWrpper = route.layout;

  const PrivateWrapper = route.requiredAuth ? AuthChecker : Fragment;
  const AdminWrapper = route.hasAdminLayout ? AdminChecker : Fragment;

  return (
    <PrivateWrapper>
      <AdminWrapper>
        <LayoutWrpper>{children}</LayoutWrpper>
      </AdminWrapper>
    </PrivateWrapper>
  );
}

export default function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          {allRoutes.map((route) => {
            return (
              <Route
                key={route.id}
                path={route.path}
                element={
                  <MainWrapper route={route}>
                    <route.component />
                  </MainWrapper>
                }
              />
            );
          })}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
