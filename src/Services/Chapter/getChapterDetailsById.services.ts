// this service is used to get book by id
import { useEffect, useState } from "react";
import { getChapterByIdUrl} from "./endPoint.chapter.services";
import { chapter } from "@/types";

function GetChapterById(bookId:string) {
    const [data, setdata] = useState<chapter>();
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState("");
    

    useEffect(() => {
       const fetchData = async () => {
            try {
                console.log(bookId,"bookId")
                const response = await getChapterByIdUrl(bookId);
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
    }, []);

    return { data, loading, error };

}

export default GetChapterById;