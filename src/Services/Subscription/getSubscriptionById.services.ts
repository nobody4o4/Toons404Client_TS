import { useEffect, useState } from "react";
import { getSubscriptionByIdurl } from "./endPoints.services.subscription";

function GetSubscriptionById() {
    const [data, setdata] = useState<{message:string}>();
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState("");
    

    useEffect(() => {
       const fetchData = async () => {
            try {
                const response = await getSubscriptionByIdurl();
                console.log(response.data,"response.data")
                setdata(response.data);
                console.log(data);
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
    }, []);

    return { data, loading, error };

}

export default GetSubscriptionById;