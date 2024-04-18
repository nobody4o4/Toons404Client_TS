// this service is used to get book by id
import { useEffect, useState } from "react";
import {  getBookByTitleurl } from "./endPoint.book.services";
import { bookCard } from "@/types";

function GetBookByTitle(title: string) {
    const [data, setdata] = useState<bookCard>();
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState("");

    useEffect(() => {
       const fetchData = async () => {
            try {
                const response = await getBookByTitleurl(title);
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

export default GetBookByTitle;