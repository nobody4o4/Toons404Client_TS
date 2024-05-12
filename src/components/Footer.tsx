import logo from "/ToonsLogov2.png";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { requestUrl } from "@/Services/Request/endpoints.request.services";
import { getUserData } from "@/utils/authStorage";
import { Link } from "react-router-dom";
import { toast } from "sonner";
function Footer() {
  const userdata = getUserData();
  const userId = userdata?.id;

  const handleApply = async () => {
    if (!userId) {
      toast.error("Please Login First");
      return;
    }
    try {
      await requestUrl();
      toast.success("Request Sent Successfully");
    } catch {
      toast.error("Request Failed");
      console.log("Error");
    }
    console.log("Apply Now");
  };

  return (
    <div className=" max-w-screen-xla flex w-full flex-col border-t-2 border-gray-300 bg-white px-4 py-4 dark:bg-gray-900 sm:px-6 lg:px-32">
      <div className="flex flex-col items-center gap-4 rounded-lg bg-primary p-6 shadow-lg sm:flex-row sm:justify-between">
        <strong className="text-xl text-white sm:text-xl">
          Make Your Next Career Move! Become a Author
        </strong>

        <AlertDialog>
          <AlertDialogTrigger
            asChild
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white bg-white px-8 py-3 text-primary hover:bg-transparent hover:text-white focus:outline-none focus:ring active:bg-white/90"
          >
            <span className="text-lg font-medium"> Apply Now</span>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="dark:text-text">
                Want to Become a Author?
              </AlertDialogTitle>
              <AlertDialogDescription>
                Share you infinite creativity with the world. Join us now!!
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="dark:text-text">
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction onClick={handleApply} className="bg-primary">
                Apply
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        {/* <span className="text-sm font-medium"> Apply Now</span> */}
      </div>

      <footer className="pt-10">
        <div className="mx-auto max-w-screen-xl px-4 text-gray-600 md:px-8">
          <div className="justify-between sm:flex">
            <div className="space-y-6">
              <img src={logo} className="w-32" />
              <p className="max-w-md">
                Nulla auctor metus vitae lectus iaculis, vel euismod massa
                efficitur.
              </p>
              <ul className="flex flex-wrap items-center gap-4 text-sm sm:text-base">
                <li className="text-gray-800 duration-150 hover:text-gray-500">
                  <Link to="">Home</Link>
                </li>
                <li className="text-gray-800 duration-150 hover:text-gray-500">
                  <Link to="/Subscription">Subscription</Link>
                </li>
                <li className="text-gray-800 duration-150 hover:text-gray-500">
                  <Link to="">Novel</Link>
                </li>
                <li className="text-gray-800 duration-150 hover:text-gray-500">
                  <Link to="">Club</Link>
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <p className="font-semibold text-gray-700">Get the app</p>
              <div className="mt-3 flex items-center gap-3 sm:block"></div>
            </div>
          </div>
          <div className="mt-10 border-t py-10 md:text-center">
            <p>© 2024 Toons404. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
