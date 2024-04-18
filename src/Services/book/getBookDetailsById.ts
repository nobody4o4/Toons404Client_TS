// this service is used to get book by id
import { useEffect, useState } from "react";
import {getBookDetailsByIdurl } from "./endPoint.book.services";
import {  bookPageDetails } from "@/types";

function GetBookDetails(id: string) {
    
    const [data, setdata] = useState<bookPageDetails>();
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState("");

    useEffect(() => {
       const fetchData = async () => {
            try {
                const response = await getBookDetailsByIdurl(id);
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

export default  GetBookDetails;