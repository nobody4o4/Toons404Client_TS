// this service is used to get novel by id
import { useEffect, useState } from "react";
import { getUserRoleById } from "./endpoint.user.services";

function GetUserRole() {
    
    const [data, setdata] = useState("");
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState("");

    useEffect(() => {
       const fetchData = async () => {
            try {
                const response = await getUserRoleById();
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
    }, [data, error, loading]);

    return { data, loading, error };

}

export default GetUserRole;