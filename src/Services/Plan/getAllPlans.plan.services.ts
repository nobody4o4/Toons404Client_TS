import { useEffect, useState } from "react";
import { Plans } from "@/types";

import { getPlansUrl } from "./endPoint.plan.services";

export default function GetAllPlans() {
    const [plans, setPlans] = useState<Plans[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await getPlansUrl();
          setPlans(response.data);
          setIsLoading(false);
        } catch (error) {
          if (error instanceof Error) {
            setError(error.message || "There was a problem");
          }
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    return { plans, isLoading, error };
}