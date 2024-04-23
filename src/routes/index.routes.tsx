import {
  Fragment,
  ReactComponentElement,
  Suspense,
  useEffect,
  useMemo,
} from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AdminChecker, AuthChecker, AuthorChecker } from "./AuthChecker.routes";
import { allRoutes } from "./all.routes";
import Loading from "@/pages/Loading";
import { useScrollCtx } from "@/ctx/scroller-context";

function MainWrapper({
  route,
  children,
}: {
  route: {
    hasHomeLayout: boolean;
    hasAdminLayout: boolean;
    requiredAuth: boolean;
    requireAuthor: boolean;
    layout: ReactComponentElement;
  };
  children: React.ReactNode;
}) {
  const LayoutWrpper = route?.layout ?? Fragment;
  const PrivateWrapper = route?.requiredAuth ? AuthChecker : Fragment;
  const AdminWrapper = route?.hasAdminLayout ? AdminChecker : Fragment;
  const AuthorWrapper = route?.requireAuthor ? AuthorChecker : Fragment;

  const { pathname } = useLocation();
  const { setPath, path } = useScrollCtx();

  const memoized = useMemo(() => path, [path]);

  useEffect(() => {
    setPath(pathname);
  }, [pathname, setPath]);

  useEffect(() => {
    if (pathname !== memoized) {
      //scroll to top
      window.scrollTo({ top: 0, behavior: "instant" });
      document.title = "Toons404";
    }
  }, [memoized, pathname]);

  return (
    <PrivateWrapper>
      <AdminWrapper>
        <AuthorWrapper>
          <LayoutWrpper>{children}</LayoutWrpper>
        </AuthorWrapper>
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
