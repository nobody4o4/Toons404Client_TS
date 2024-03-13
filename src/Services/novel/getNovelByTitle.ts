// this service is used to get novel by id
import { useEffect, useState } from "react";
import {  getNovelByTitleurl } from "./endPoint.novel.services";
import { novelCard } from "@/types";

function GetNovelByTitle(title: string) {
    const [data, setdata] = useState<novelCard>();
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState("");

    useEffect(() => {
       const fetchData = async () => {
            try {
                const response = await getNovelByTitleurl(title);
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

export default GetNovelByTitle;