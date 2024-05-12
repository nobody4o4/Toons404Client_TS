import { useEffect, useState } from "react";

import { StatsCounts } from "@/types";
import { getRegisteredCountUrl } from "./endPoints.dashboard.services";



function RegisteredCount(){
    const [count, setdata] = useState<StatsCounts>();
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getRegisteredCountUrl();
                setdata(response.data);
                console.log(count);
                setloading(false);
            } catch (error) {
                if (error instanceof Error) {
                    console.log(error.message, "eror");
                    seterror(error.message || "There was a problem");
                }
                setloading(false);
            }
        }
        fetchData();
    },[])
    return { count, loading, error };
}

export default RegisteredCount;