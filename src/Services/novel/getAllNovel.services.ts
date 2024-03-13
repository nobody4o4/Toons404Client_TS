 //Get data of all the novels from the database through the API
import { useEffect, useState } from "react";
import { getNovelsurl } from "./endPoint.novel.services";
import { novelCard} from "@/types";

function AllNovel(){

    const [data, setdata] = useState<novelCard>();
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState("");

    useEffect(() => {
       const fetchData = async () => {
            try {
                const response = await getNovelsurl();
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
    }, []);

    return { data, loading, error };
}

export default AllNovel;