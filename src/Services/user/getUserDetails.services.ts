// this service is used to get novel by id
import { useEffect, useState } from "react";

import { getUserByIdUrl } from "./endpoint.user.services";
import { UserDetail } from "@/types";

function GetUserDetailsAdmin(id : string) {
    
    const [data, setdata] = useState<UserDetail>();
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState("");

    useEffect(() => {
       const fetchData = async () => {
            try {
                const response = await getUserByIdUrl(id);
                setdata(response.data);
                console.log(response.data);
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
    },[id]);

    return { data, loading, error };

}

export default GetUserDetailsAdmin;