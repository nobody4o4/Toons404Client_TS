import { Plans } from "@/types";
import { Button } from "./ui/button";
import { createSubscriptionurl } from "@/Services/Subscription/endPoints.services.subscription";

function PlanCard(plan: Plans) {
  const handleClick = async () => {
    const response = await createSubscriptionurl(plan.id);
    console.log(response);
    window.location.href = response.data.data.payment_url;
    console.log("Clicked");
  };

  return (
    <div>
      {" "}
      <div
        key={plan.id}
        className="relative flex flex-col items-center space-y-2 rounded-lg border border-gray-200 p-4 dark:border-gray-800"
      >
        <div className="absolute inset-x-0 top-0 -mt-6 flex items-center justify-center p-2">
          <div className="h-6 w-6 text-blue-600" />
        </div>
        <h2 className="font-semibold">{plan.name}</h2>
        <div className="text-2xl font-bold">${plan.price}</div>
        <ul className="list-inside list-disc text-sm text-gray-500 dark:text-gray-400">
          {plan.description}
        </ul>
        <Button onClick={handleClick} className="w-full max-w-xs">
          Subscribe
        </Button>
      </div>
    </div>
  );
}
export default PlanCard;
