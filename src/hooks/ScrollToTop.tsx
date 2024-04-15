import { useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { ScrollToTopProps } from "@/types";

// Define the type for location state
interface LocationState {
  pathname: string;
}

// Combine ScrollToTopProps with RouteComponentProps<LocationState>
const ScrollToTop = ({
  children,
  location: { pathname },
}: ScrollToTopProps & RouteComponentProps<LocationState>) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return children || null;
};

export default withRouter(ScrollToTop);
