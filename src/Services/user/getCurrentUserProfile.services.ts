// this service is used to get book by id
import { useEffect, useState } from "react";
import { getCurrentUserProfileUrl} from "./endpoint.user.services";
import { MyProfile } from "@/types";

function GetCurrentUserProfile() {
    
    const [data, setdata] = useState<MyProfile>();
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState("");

    useEffect(() => {
       const fetchData = async () => {
            try {
                const response = await getCurrentUserProfileUrl();
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

export default GetCurrentUserProfile;