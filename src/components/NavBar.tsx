import { Button } from "./ui/button";
import logo from "/ToonsLogov2.png";

import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { clearUserData, getUserData } from "../utils/authStorage";
import { Link } from "react-router-dom";
import { ModeToggle } from "./mode_toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function NavBar() {
  const [userData, setUserData] = useState({
    username: "",
    avatar: "",
    token: "",
  });

  const { username, avatar } = userData;

  useEffect(() => {
    const userDataFromStorage = getUserData();
    setUserData(userDataFromStorage);
  }, [username]);

  const handleLogout = () => {
    clearUserData();
    setUserData({ username: "", avatar: "", token: "" });
  };

  return (
    <header className="sticky top-0 z-20 flex w-full items-center justify-between gap-5 border-b-2 border-gray-200 bg-background px-9 py-4 text-text max-md:max-w-full max-md:flex-wrap max-md:px-5">
      <Link to="/" className="navbar">
        {/* <h1 className="my-auto grow self-stretch whitespace-nowrap font-logoFont  text-4xl">
          TOONS<span className="text-primary">404</span>
        </h1> */}
        <div className=" w-[100px] ">
          <img src={logo} alt="logo" className=" h-full w-full object-cover" />
        </div>
      </Link>
      <nav className="my-auto flex justify-between gap-5 self-stretch">
        <Link to="#" className="link">
          Comics
        </Link>
        <Link to="#" className="link">
          Novels
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
            {/* <div className="text-lg text-black">{username}</div> */}
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
                    <DropdownMenuItem>
                      {/* <User className="mr-2 h-4 w-4" /> */}
                      Profile
                    </DropdownMenuItem>
                  </Link>
                  {/* <DropdownMenuItem>
                    <span>Billing</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Keyboard shortcuts</span>
                  </DropdownMenuItem> */}
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <Link to="/dashboard/admin">
                    <DropdownMenuItem>
                      {/* <Users className="mr-2 h-4 w-4" /> */}
                      <Link to="/dashboard/admin">Dashboard</Link>
                    </DropdownMenuItem>
                  </Link>
                  {/* <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <span>Invite users</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>
                          <span>Email</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <span>Message</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <span>More...</span>
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuItem>
                    <span>New Team</span>
                    <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                  </DropdownMenuItem> */}
                </DropdownMenuGroup>

                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  {/* <LogOut className="mr-2 h-4 w-4" /> */}
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
