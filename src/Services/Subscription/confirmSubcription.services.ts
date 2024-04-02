// this service is used to get novel by id
import { useEffect, useState } from "react";
import { KhaltiCallBack } from "@/types";
import { ConfirmSubscriptionUrl } from "./endPoints.services.subscription";

function ConfirmSubscription( paymentDetails : KhaltiCallBack) {
    
    const [data, setdata] = useState<KhaltiCallBack>();
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState("");

    useEffect(() => {
       const fetchData = async () => {
            try {
                const response = await ConfirmSubscriptionUrl(paymentDetails);
                console.log(data);
                setdata(response.data);
                setloading(false);
            } catch (error ) {
                if(error instanceof Error){
                    console.log(error.message,"eror");
                seterror(error.message || "There was a problem");
            }
                setloading(false);
            }
        }
        fetchData();
    },[]);

    return { data, loading, error };

}

export default ConfirmSubscription;