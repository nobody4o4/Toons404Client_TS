//Get data of all the novels from the database through the API
import { useEffect, useState } from "react";
import { getGenreByIdurl } from "./endPoint.genre.services";
import { Genre } from "@/types";



function GenreById(id: string) {

    const [data, setdata] = useState<Genre>();
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getGenreByIdurl(id);
                console.log(data);
                setdata(response.data);
                setloading(false);
            } catch (error) {
                if (error instanceof Error) {
                    console.log(error.message, "eror");
                    seterror(error.message || "There was a problem");
                }
                setloading(false);
            }
        }
        fetchData();
    },[])
    return { data, loading, error };
}

export default GenreById;