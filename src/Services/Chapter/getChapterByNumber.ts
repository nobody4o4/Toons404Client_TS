// this service is used to get novel by id
import { useEffect, useState } from "react";
import { getChapterByNumberUrl } from "./endPoint.chapter.services";
import { chapterCard } from "@/types";

function GetChapterByNumber(novelId:string, number : number) {
    const [data, setdata] = useState<chapterCard>();
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState("");
    

    useEffect(() => {
       const fetchData = async () => {
            try {
                console.log(novelId,number,"novelId, number")
                const response = await getChapterByNumberUrl(novelId,number);
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
    }, []);

    return { data, loading, error };

}

export default GetChapterByNumber;