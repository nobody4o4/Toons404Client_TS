import { RxDashboard } from "react-icons/rx";
import { GiEvilBook, GiBookshelf } from "react-icons/gi";
import { BiCategory } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa6";
import { BsFilePost } from "react-icons/bs";
import { MdOutlineReport } from "react-icons/md";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from "../mode_toggle";
import { Logout } from "../Logout";
import { getUserData } from "@/utils/authStorage";

function SideBarAuthor() {
  const [userData, setUserData] = useState({
    username: "",
    avatar: "",
    token: "",
  });

  useEffect(() => {
    const userDataFromStorage = getUserData();
    setUserData(userDataFromStorage);
  }, []);

  // const handleLogout = () => {
  //   clearUserData();
  //   setUserData({ username: "", avatar: "", token: "" });
  // };

  const { username, avatar } = userData;
  return (
    <div>
      <aside className="flex h-screen w-64 flex-col overflow-y-auto border-r bg-white px-5 py-8 dark:border-gray-700 dark:bg-gray-900 rtl:border-l rtl:border-r-0">
        <Link to="/">
          <h1 className="my-auto grow self-stretch whitespace-nowrap font-logoFont  text-2xl">
            TOONS<span className="text-primary">404</span>
          </h1>
        </Link>
        <div className="mt-6 flex flex-1 flex-col justify-between">
          <nav className="-mx-3 flex-1 space-y-3 ">
            <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200"
              to="/dashboard/author/"
            >
              <RxDashboard className="h-5 w-5" />
              <span className="mx-2 text-lg font-medium">Dashboard</span>
            </Link>
            <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200"
              to="/dashboard/author/book"
            >
              <GiEvilBook className="h-5 w-5" />
              <span className="mx-2 text-lg font-medium">Book</span>
            </Link>
            <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200"
              to="#"
            >
              <BsFilePost className="h-5 w-5" />
              <span className="mx-2 text-lg font-medium">Fan Club</span>
            </Link>

            {/* <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200"
              to="#"
            >
              <MdOutlineReport className="h-5 w-5" />
              <span className="mx-2 text-lg font-medium">Report</span>
            </Link> */}
          </nav>
          <div className="mt-6 w-1/2">
            <ModeToggle />
          </div>
          <div className="mt-3 border-t border-gray-300">
            <div className="mt-6 flex items-center justify-between">
              <Link to="/" className="flex items-center gap-x-2">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src={avatar}
                  alt="avatar"
                />
                <span className="text-lg font-medium text-gray-700 dark:text-gray-200">
                  {username}
                </span>
              </Link>

              <Logout />
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
export default SideBarAuthor;
