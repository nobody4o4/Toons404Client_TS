import { Link } from "react-router-dom";
import { Avatar } from "./ui/avatar";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

function RegisterForm() {
  return (
    <div className="w-full space-y-6 py-6">
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Create an account</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Already have an account?
            <Link className="underline" to="#">
              Sign in
            </Link>
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 shadow-sm dark:border-gray-800">
          <div className="grid grid-cols-1 gap-0 sm:grid-cols-3">
            <div className="flex items-center justify-center p-6 sm:p-10">
              <Avatar className="h-24 w-24 border" />
            </div>
            <div className="space-y-4 p-6 sm:p-10">
              <div className="space-y-2">
                <Label htmlFor="avatar">Avatar</Label>
                <Input accept="image/*" id="avatar" type="file" />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" placeholder="Lee" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" placeholder="Robinson" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="leerobinson" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="m@example.com"
              required
              type="email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="birthday">Birthday</Label>
            <Input id="birthday" required type="date" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone number</Label>
            <Input id="phone" placeholder="+19876543210" required type="tel" />
          </div>
          <div className="space-y-2">
            <Label>Gender</Label>
            <div className="space-x-4">
              <Label
                className="inline-block cursor-pointer"
                htmlFor="gender-male"
              >
                <Input
                  id="gender-male"
                  name="gender"
                  required
                  type="radio"
                  value="male"
                />
                <span className="ml-1">Male</span>
              </Label>
              <Label
                className="inline-block cursor-pointer"
                htmlFor="gender-female"
              >
                <Input
                  id="gender-female"
                  name="gender"
                  required
                  type="radio"
                  value="female"
                />
                <span className="ml-1">Female</span>
              </Label>
              <Label
                className="inline-block cursor-pointer"
                htmlFor="gender-other"
              >
                <Input
                  id="gender-other"
                  name="gender"
                  required
                  type="radio"
                  value="other"
                />
                <span className="ml-1">Other</span>
              </Label>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="about">About us</Label>
            <Textarea
              id="about"
              placeholder="Tell us about yourself"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea id="bio" placeholder="Enter your bio" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" required type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input id="confirm-password" required type="password" />
          </div>
          <Button className="w-full" type="submit">
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
}
export default RegisterForm;
