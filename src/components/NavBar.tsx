import { Button } from "./ui/button";
import logo from "/ToonsLogov2.png";

import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { clearUserData, getUserData, setUserData } from "../utils/authStorage";
import { Link } from "react-router-dom";
import { ModeToggle } from "./mode_toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function NavBar() {
  const [userData, setUserData] = useState({
    username: "",
    avatar: "",
    token: "",
    role: "",
    isSubscribed: false,
  });
  const { username, avatar, role, isSubscribed } = userData;

  useEffect(() => {
    const userDataFromStorage = getUserData();
    if (userDataFromStorage) {
      setUserData(userDataFromStorage);
    }
    console.log(role, "role");
  }, []);

  const handleLogout = () => {
    clearUserData();
  };

  return (
    <header className=" sticky top-0 z-20 flex w-full justify-between gap-5 border-b-2 border-gray-200 bg-background px-9 py-4 text-text max-md:max-w-full max-md:flex-wrap max-md:px-5">
      <Link to="/" className="h-14 ">
        <img src={logo} alt="logo" className=" h-full w-full object-cover" />
      </Link>
      <nav className="my-auto flex justify-between gap-5 self-stretch">
        <Link to="#" className="link">
          Comics
        </Link>
        <Link to="#" className="link">
          Books
        </Link>
        <Link to="/series" className="link">
          Series
        </Link>
        <Link to="/feed" className="link">
          Feed
        </Link>
      </nav>

      <div className="flex w-fit justify-between bg-background">
        <Input placeholder="Search" className="mr-3" />
        {avatar || username ? (
          <div className="flex justify-end">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage
                    src={avatar}
                    alt="@shadcn"
                    className="h-full w-full object-cover"
                  />
                  <AvatarFallback>{username}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>{username}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <Link to={`/my-profile`}>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                  </Link>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                {
                  /* If the user is an admin, show the admin dashboard link */
                  role === "ADMIN" && (
                    <DropdownMenuGroup>
                      <Link to="/dashboard/admin">
                        <DropdownMenuItem>
                          <Link to="/dashboard/admin">Dashboard</Link>
                        </DropdownMenuItem>
                      </Link>
                      <DropdownMenuSeparator />
                    </DropdownMenuGroup>
                  )
                }
                {role === "AUTHOR" && (
                  <DropdownMenuGroup>
                    <Link to="/dashboard/author">
                      <DropdownMenuItem>
                        <Link to="/dashboard/author">Dashboard</Link>
                      </DropdownMenuItem>
                    </Link>
                    <DropdownMenuSeparator />
                  </DropdownMenuGroup>
                )}
                <DropdownMenuItem onClick={handleLogout}>
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <Link to={"/login"}>
            <Button className="bg-sky-500 hover:bg-sky-300"> Sign In</Button>
          </Link>
        )}
        <Link to="/subscribtion" className="mx-2 ">
          <Button>Subscribtion</Button>
        </Link>
        <div className="ml-3">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
