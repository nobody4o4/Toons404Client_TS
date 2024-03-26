import { Button } from "@/components/ui/button";
import { AvatarImage, Avatar } from "@/components/ui/avatar";

export default function UserProfile() {
  return (
    <div key="1" className="bg-white p-8">
      <div className="grid grid-cols-4 gap-8">
        <div className="col-span-1">
          <div className="flex flex-col items-stretch space-y-4">
            <Button className="bg-blue-500 text-white">Profile</Button>
            <Button variant="outline">Edit Profile</Button>
            <Button variant="outline">Reading list</Button>
            <Button variant="outline">Continue Reading</Button>
            <Button variant="outline">Notification</Button>
            <Button variant="outline">Connection</Button>
            <Button variant="outline">Settings</Button>
          </div>
        </div>
        <div className="space-yß-8 col-span-3">
          <div className="flex items-center space-x-4">
            <Avatar className="h-32 w-32">
              <AvatarImage
                alt="Profile picture"
                src="/placeholder.svg?height=100&width=100"
              />
            </Avatar>
            <div className="flex flex-col space-y-4">
              <h1 className="text-3xl font-bold">Samir Gautam</h1>
              <p className="text-gray-500">@nbdyy404</p>
              <div className="flex space-x-8">
                <span>66 followers</span>
                <span>66 following</span>
              </div>
              <p>
                Milo, she must decide how far she's willing to go to protect her
                heart and her career when she finds herself falling deeper into
                his dangerous world. Milo, she must decide how far she's willing
                to go to protect her heart and her career when she finds herself
                falling deeper into his dangerous world.
              </p>
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-semibold">Favourites</h2>
            <div className="grid grid-cols-3 gap-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
