import { useEffect, useState } from "react";
import { getAllGenresurl } from "./endPoint.genre.services";
import { genreDetails } from "@/types";

function AllGenreDetails(){
    const [data, setdata] = useState<genreDetails>();
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllGenresurl();
                setdata(response.data);
                console.log(data);
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

export default AllGenreDetails;