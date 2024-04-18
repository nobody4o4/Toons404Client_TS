// this service is used to get book by id
import { useEffect, useState } from "react";
import {  getUserProfileUrl} from "./endpoint.user.services";
import { UserProfile } from "@/types";

function GetUserProfile(username : string) {
    
    const [data, setdata] = useState<UserProfile>();
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState("");

    useEffect(() => {
       const fetchData = async () => {
            try {
                const response = await getUserProfileUrl(username);
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
    },[username]);

    return { data, loading, error };

}

export default GetUserProfile;