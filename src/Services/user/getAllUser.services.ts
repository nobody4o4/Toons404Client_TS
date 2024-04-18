// this service is used to get book by id
import { useEffect, useState } from "react";
import { getAllUsersUrl } from "./endpoint.user.services";
import { UserTable } from "@/types";

function AllUsersDetails() {
    
    const [data, setdata] = useState<UserTable>();
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState("");

    useEffect(() => {
       const fetchData = async () => {
            try {
                const response = await  getAllUsersUrl();
                console.log(response.data);
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

export default AllUsersDetails;