import { Button } from "@/components/ui/button";
import { createSubscriptionurl } from "@/Services/Subscription/endPoints.services.subscription";

export default function Subscribtion() {
  const planId: string = "b14b54ca-47a3-499a-84d4-a04d32a94ecf";
  const handleClick = async () => {
    const response = await createSubscriptionurl(planId);
    console.log(response);
    window.location.href = response.data.data.payment_url;
    console.log("Clicked");
  };
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
              <div className="relative flex flex-col items-center space-y-2 rounded-lg border border-gray-200 p-4 dark:border-gray-800">
                <div className="absolute inset-x-0 top-0 -mt-6 flex items-center justify-center p-2">
                  <div className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="font-semibold">Monthly</h2>
                <div className="text-2xl font-bold">$5</div>
                <ul className="list-inside list-disc text-sm text-gray-500 dark:text-gray-400">
                  <li>Access to all web comics</li>
                  <li>Exclusive behind-the-scenes content</li>
                  <li>Monthly Q&A with our artists</li>
                </ul>
                <Button onClick={handleClick} className="w-full max-w-xs">
                  Subscribe
                </Button>
              </div>
              <div className="relative flex flex-col items-center space-y-2 rounded-lg border border-gray-200 p-4 dark:border-gray-800">
                <div className="absolute inset-x-0 top-0 -mt-6 flex items-center justify-center p-2">
                  <div className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="font-semibold">Annual</h2>
                <div className="text-2xl font-bold">$50</div>
                <ul className="list-inside list-disc text-sm text-gray-500 dark:text-gray-400">
                  <li>Access to all web comics</li>
                  <li>Exclusive behind-the-scenes content</li>
                  <li>Monthly Q&A with our artists</li>
                </ul>
                <Button className="w-full max-w-xs">Subscribe</Button>
              </div>
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
