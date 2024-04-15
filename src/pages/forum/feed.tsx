import PostCard from "@/components/Forum/PostCard";
import SidebarForum from "@/components/Forum/SideBar.forum";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { FaUser } from "react-icons/fa6";

export default function Feed() {
  return (
    <>
      <div className="flex justify-center bg-background text-text ">
        <div className="flex space-x-6 overflow-hidden ">
          {/* side Panel */}
          <div className=" sticky top-0 flex h-screen w-72 flex-col p-4 ">
            <SidebarForum />
          </div>
          {/* home feed*/}
          <div className=" w-[600px]">
            <div className=" flex flex-col   p-4 pb-0">
              <div className="flex h-12 flex-initial pt-4">
                <h1 className="w-full text-center font-semibold underline decoration-blue-500 decoration-4 underline-offset-[11px] hover:bg-slate-300/10">
                  Popular
                </h1>
                <h1 className="w-full text-center font-semibold hover:bg-slate-300/10">
                  Following
                </h1>
              </div>
            </div>
            <div className=" mb-5  space-y-4 rounded-md border p-4 ">
              <div className="flex ">
                <FaUser className="m-4 h-6 w-6 " />
                {/* <Textarea
                  placeholder="What is happening?!"
                  className="m-4 mt-0 border-0 bg-transparent focus:border-0"
                ></Textarea> */}
                <form className=" relative mx-4 w-full overflow-hidden rounded-lg bg-background">
                  <Label htmlFor="message" className="sr-only">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Type your message here..."
                    className="min-h-12 resize-none border-0 bg-transparent p-3 shadow-none outline-none focus-visible:ring-0"
                  />
                  <div className="flex items-center p-3 pt-0">
                    <Button type="submit" size="sm" className="ml-auto gap-1.5">
                      Post
                    </Button>
                  </div>
                </form>
              </div>
            </div>
            {/* post */}
            <div className="flex flex-col space-y-5">
              <PostCard />
              <PostCard />
              <PostCard />
            </div>
            {/* <div className="border-b-3 flex border border-solid border-gray-700 p-4">
              <div className="mr-3"></div>
              <div className="flex w-full flex-col">
                <div className="flex justify-between">
                  <div className="flex">
                    <h1 className="font-bold">Samir</h1>
                    <p className="pl-1 font-thin">@samir · 2h</p>
                  </div>
                  <div className="">
                    <p>···</p>
                  </div>
                </div>
                <div>
                  You can also use variant modifiers to target media queries
                  like responsive breakpoints, dark mode,
                  prefers-reduced-motion, and more. For example, use
                  md:decoration-4 to ap ply the decoration-4 utility at only
                  medium screen sizes and above.
                </div>
                <div className="pt-2 font-thin">
                  <ul className="flex justify-between">
                    <li className="flex rounded-lg p-2 hover:bg-blue-500/30 hover:text-blue-500">
                      1
                    </li>
                    <li className="flex rounded-lg p-2 hover:bg-green-500/30 hover:text-green-500">
                      5
                    </li>
                    <li className="flex rounded-lg p-2 hover:bg-red-500/30 hover:text-red-500">
                      100
                    </li>
                    <li className="flex rounded-lg p-2 hover:bg-blue-500/30 hover:text-blue-500"></li>
                    <li className="flex rounded-lg p-2 hover:bg-blue-500/30 hover:text-blue-500"></li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>

          {/* Explore Panel */}
          <div className=" w-96 space-y-4  p-4">
            <div className="flex rounded-full bg-white/20 p-2 pl-4 text-lg text-neutral-500">
              Search
            </div>
            <div className="flex flex-col space-y-2 rounded-2xl bg-white/20 p-4 pl-4  ">
              <h1 className="text-xl font-bold">Subscribe to Premium</h1>
              <p className="font-semibold">
                Subscribe to unlock new features and if eligible, receive a
                share of ads revenue.
              </p>
              <button className=" h-10 w-fit rounded-3xl bg-blue-500 px-4 font-bold text-white hover:bg-blue-600">
                Subscribe
              </button>
            </div>

            <div className="flex flex-col space-y-2  rounded-2xl bg-white/20 pt-4 ">
              <h1 className="pl-4 text-xl font-bold">Trends for you</h1>
              <div className="p-4 py-2 hover:bg-slate-300/10">
                <div className="flex justify-between text-neutral-500">
                  <p className="text-sm">Action games·Trending</p>
                  ···
                </div>
                <h1 className="font-bold">Valorant</h1>
                <p className="text-sm text-neutral-500">1.2M posts</p>
              </div>
              <div className="p-4 py-2 hover:bg-slate-300/10">
                <div className="flex justify-between text-neutral-500">
                  <p className="text-sm">Action games·Trending</p>
                  ···
                </div>
                <h1 className="font-bold">Valorant</h1>
                <p className="text-sm text-neutral-500">1.2M posts</p>
              </div>

              <div className="hover:bg-slate-300/10">
                <h1 className="p-4 text-blue-500">Show more</h1>
              </div>
            </div>

            <div className="flex flex-col space-y-2  rounded-2xl bg-white/20 pt-4 ">
              <h1 className="pl-4 text-xl font-bold">Who to follow</h1>
              {/* user */}
              <div className="mt-auto flex justify-between p-4 py-2 hover:bg-slate-300/10">
                <div className="flex">
                  <div className="m-auto">
                    <FaUser />
                  </div>
                  <div className="ml-3">
                    <h1>Samir</h1>
                    <p className="mt-0 font-thin">@Samir</p>
                  </div>
                </div>
                <div>
                  <button className=" h-10 w-fit rounded-3xl bg-white px-4 font-bold text-black">
                    Follow
                  </button>
                </div>
              </div>
              {/* user */}
              <div className="mt-auto flex justify-between p-4 py-2 hover:bg-slate-300/10">
                <div className="flex">
                  <div className="m-auto">
                    <FaUser />
                  </div>
                  <div className="ml-3">
                    <h1>Samir</h1>
                    <p className="mt-0 font-thin">@Samir</p>
                  </div>
                </div>
                <div>
                  <button className=" h-10 w-fit rounded-3xl bg-white px-4 font-bold text-black">
                    Follow
                  </button>
                </div>
              </div>
              {/* user */}
              <div className="mt-auto flex justify-between p-4 py-2 hover:bg-slate-300/10">
                <div className="flex">
                  <div className="m-auto">
                    <FaUser />
                  </div>
                  <div className="ml-3">
                    <h1>Samir</h1>
                    <p className="mt-0 font-thin">@Samir</p>
                  </div>
                </div>
                <div>
                  <button className=" h-10 w-fit rounded-3xl bg-white px-4 font-bold text-black">
                    Follow
                  </button>
                </div>
              </div>

              <div className="hover:bg-slate-300/10">
                <h1 className="p-4 text-blue-500">Show more</h1>
              </div>
            </div>

            <div className="text-neutral-500">
              Terms of Service Privacy Policy Cookie Policy Accessibility Ads
              info More © 2023 X Corp.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
