import { Button } from "@/components/ui/button";

import GetSubscriptionById from "@/Services/Subscription/getSubscriptionById.services";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Loading from "./Loading";

import { Plans } from "@/types";
import InternalError from "./error/InternalError";
import GetAllPlans from "@/Services/Plan/getAllPlans.plan.services";
import PlanCard from "@/components/PlanCard";

export default function Subscribtion() {
  const { data, loading } = GetSubscriptionById();

  const { plans, isLoading, error } = GetAllPlans();

  console.log("data", data?.message);

  if (data?.message === "Active") {
    return (
      <div className="w-full py-6">
        <div className="container flex flex-col items-center gap-4 px-4 md:px-6">
          <FaCheck className="h-16 w-16 rounded-full bg-gray-100 dark:bg-gray-800" />
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-3xl font-bold tracking-tighter">
              Subscription Confirmation
            </h1>
            <p className="text-gray-500/relaxed max-w-[600px] dark:text-gray-400">
              You are already subscribed to our plan. Thank you for choosing our
              service!
            </p>
            <Link to="/" className="mt-4">
              <Button>Back to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return <Loading />;
  }
  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <InternalError />;
  }

  return (
    <div className="h-screen w-full">
      <div className="relative overflow-hidden">
        <main className="flex h-screen flex-col justify-between px-4  md:px-6">
          <section className="container space-y-6 py-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Subscribe to our Comics</h1>
              <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get access to our exclusive web comics by subscribing to one of
                our plans.
              </p>
            </div>
            <div className="mx-auto grid max-w-sm gap-4 lg:max-w-4xl lg:grid-cols-2 xl:gap-8">
              {plans.map((plan: Plans) => (
                <PlanCard {...plan} />
              ))}
            </div>
          </section>
          <section className="bottom-0 border-b border-t py-6">
            <div className="container space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">FAQs</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Have a question? Check out our FAQs.
                </p>
              </div>
              <div className="space-y-4">
                <details>
                  <summary className="list-none font-medium">
                    What's the difference between the monthly and annual
                    subscription?
                  </summary>
                  <p>
                    The monthly subscription gives you access to the web comics
                    for 30 days. The annual subscription provides access for a
                    full year and includes additional exclusive content.
                  </p>
                </details>
                <details>
                  <summary className="list-none font-medium">
                    Can I cancel my subscription at any time?
                  </summary>
                  <p>
                    Yes, you can cancel your subscription at any time. Your
                    access will continue until the end of the current billing
                    period.
                  </p>
                </details>
                <details>
                  <summary className="list-none font-medium">
                    Are the web comics suitable for all ages?
                  </summary>
                  <p>
                    Our web comics are family-friendly and suitable for readers
                    of all ages. We focus on fun and entertaining stories that
                    everyone can enjoy.
                  </p>
                </details>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
