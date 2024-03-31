import { useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

function ProfileSidebar() {
  const location = useLocation();
  const path = location.pathname;
  const isActive = (nav: string) => {
    return path.startsWith(nav) ? "bg-primary text-white" : "";
  };
  return (
    <>
      <div className="col-span-1">
        <div className="flex flex-col items-stretch space-y-4">
          <Link to="/my-profile">
            <Button
              variant="outline"
              className={`${isActive("/my-profile")} w-full`}
            >
              Profile
            </Button>
          </Link>
          <Link to="/edit-profile">
            <Button
              variant="outline"
              className={`${isActive("/edit-profile")} w-full`}
            >
              Edit Profile
            </Button>
          </Link>
          <Link to="#">
            <Button
              disabled
              variant="outline"
              className={`${isActive("/reading-list")} w-full`}
            >
              Reading list
            </Button>
          </Link>
          <Link to="#">
            <Button
              disabled
              variant="outline"
              className={`${isActive("/continue-reading")} w-full`}
            >
              Continue Reading
            </Button>
          </Link>
          <Link to="#">
            <Button
              disabled
              variant="outline"
              className={`${isActive("/notification")} w-full`}
            >
              Notification
            </Button>
          </Link>
          <Link to="#">
            <Button
              disabled
              variant="outline"
              className={`${isActive("/connection")} w-full`}
            >
              Connection
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default ProfileSidebar;
