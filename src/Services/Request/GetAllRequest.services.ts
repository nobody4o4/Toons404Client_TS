// this service is used to get book by id
import { RequestCardType } from "@/types";
import { useEffect, useState } from "react";
import { getReadingListurl } from "../book/endPoint.book.services";
import { getAllRequestUrl } from "./endpoints.request.services";


function AllRequests() {
    
    const [data, setdata] = useState<RequestCardType>();
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState("");

    useEffect(() => {
       const fetchData = async () => {
            try {
                const response = await  getAllRequestUrl();
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

export default AllRequests;