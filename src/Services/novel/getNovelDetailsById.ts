// this service is used to get novel by id
import { useEffect, useState } from "react";
import {getNovelDetailsByIdurl } from "./endPoint.novel.services";
import {  novelPageDetails } from "@/types";

function GetNovelDetails(id: string) {
    
    const [data, setdata] = useState<novelPageDetails>();
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState("");

    useEffect(() => {
       const fetchData = async () => {
            try {
                const response = await getNovelDetailsByIdurl(id);
                setdata(response.data);
                console.log(data)
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

export default  GetNovelDetails;