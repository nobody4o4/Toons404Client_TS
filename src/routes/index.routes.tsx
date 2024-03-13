import { Fragment, ReactComponentElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthChecker from "./AuthChecker.routes";
import { allRoutes } from "./all.routes";

function MainWrapper({
  route,
  children,
}: {
  route: {
    hasHomeLayout: boolean;
    hasAdminLayout: boolean;
    requiredAuth: boolean;
    layout: ReactComponentElement<>;
  };
  children: React.ReactNode;
}) {
  const LayoutWrpper = route.layout;

  const PrivateWrapper = route.requiredAuth ? AuthChecker : Fragment;

  return (
    <PrivateWrapper>
      <LayoutWrpper>{children}</LayoutWrpper>
    </PrivateWrapper>
  );
}

export default function Router() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}
