import { Link, useSearchParams } from "react-router-dom";
import SuccessSUBimg from "../assets/SuccessSUB.png";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";
import { KhaltiCallBack } from "@/types";
import { useMemo } from "react";
import ConfirmSubscription from "@/Services/Subscription/confirmSubcription.services";
import Loading from "./Loading";

export default function CongratsForSub() {
  const [searchParams] = useSearchParams();
  const pidx = searchParams.get("pidx");
  const status = searchParams.get("status");
  const purchase_order_id = searchParams.get("purchase_order_id");

  const paymentData = useMemo(
    () => ({
      pidx,
      status,
      purchase_order_id,
    }),
    [pidx, status, purchase_order_id],
  ) as KhaltiCallBack;

  const { data, loading, error } = ConfirmSubscription(paymentData);
  console.log(data, "data");
  console.log(loading, "loading");
  console.log(error, "error");

  if (loading) return <Loading />;

  return (
    <div className=" bg-background py-12 text-text md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 md:gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Subscription Activated
              </h1>
              <p className="max-w-[500px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                You've unlocked exclusive access to our premium content. Get
                ready to dive into the best tips, tricks, and tutorials.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link className="inline-flex text-sm font-medium  " to="/">
                <Button>
                  Explore
                  <FaArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
          <img
            alt="Image"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
            height="540"
            src={SuccessSUBimg}
            width="960"
          />
        </div>
      </div>
    </div>
  );
}
