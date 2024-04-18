// this service is used to get book by id
import { useEffect, useState } from "react";
import { getChapterByNumberUrl } from "./endPoint.chapter.services";
import { chapter } from "@/types";

function GetChapterByNumber(bookId:string, number : number, type: string) {
    const [data, setdata] = useState<chapter>();
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState("");
    

    useEffect(() => {
       const fetchData = async () => {
            try {
                console.log(bookId,number,"bookId, number")
                const response = await getChapterByNumberUrl(bookId,number,type);
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
    }, [number]);

    return { data, loading, error };

}

export default GetChapterByNumber;