import { Button } from "./ui/button";
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

  useEffect(() => {
    const userDataFromStorage = getUserData();
    setUserData(userDataFromStorage);
  }, []);

  const handleLogout = () => {
    clearUserData();
    setUserData({ username: "", avatar: "", token: "" });
  };

  const { username, avatar } = userData;

  return (
    <header className="sticky top-0 z-20 flex w-full items-center justify-between gap-5 border-b-2 border-gray-200 bg-background px-9 py-4 text-text max-md:max-w-full max-md:flex-wrap max-md:px-5">
      <Link to="/" className="navbar">
        <h1 className="my-auto grow self-stretch whitespace-nowrap  text-4xl">
          TOONS<span className="text-primary">404</span>
        </h1>
      </Link>
      <nav className="my-auto flex justify-between gap-5 self-stretch">
        <Link to="#" className="link">
          Comics
        </Link>
        <Link to="#" className="link">
          Novels
        </Link>
        <Link to="#" className="link">
          Browse
        </Link>
        <Link to="#" className="link">
          Feed
        </Link>
      </nav>

      <div className="flex w-fit justify-between bg-background">
        <Input placeholder="Search" className="mr-3" />
        {avatar ? (
          <div className="flex justify-end">
            {/* <div className="text-lg text-black">{username}</div> */}
            <DropdownMenu>
              <DropdownMenuTrigger>
                {" "}
                {/* <img
                  src={avatar}
                  alt=""
                  className="aspect-square h-[41px] w-full rounded-full dark:bg-gray-500"
                /> */}
                <Avatar>
                  <AvatarImage
                    src={avatar}
                    alt="@shadcn"
                    className="h-full w-full object-cover"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>{username}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    {/* <User className="mr-2 h-4 w-4" /> */}
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    {/* <CreditCard className="mr-2 h-4 w-4" /> */}
                    <span>Billing</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    {/* <Settings className="mr-2 h-4 w-4" /> */}
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    {/* <Keyboard className="mr-2 h-4 w-4" /> */}
                    <span>Keyboard shortcuts</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <Link to="/dashboard/admin">
                    <DropdownMenuItem>
                      {/* <Users className="mr-2 h-4 w-4" /> */}
                      <Link to="/dashboard/admin">Dashboard</Link>
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      {/* <UserPlus className="mr-2 h-4 w-4" /> */}
                      <span>Invite users</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>
                          {/* <Mail className="mr-2 h-4 w-4" /> */}
                          <span>Email</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          {/* <MessageSquare className="mr-2 h-4 w-4" /> */}
                          <span>Message</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          {/* <PlusCircle className="mr-2 h-4 w-4" /> */}
                          <span>More...</span>
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuItem>
                    {/* <Plus className="mr-2 h-4 w-4" /> */}
                    <span>New Team</span>
                    <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                  </DropdownMenuItem>
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
        <div className="ml-3">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
