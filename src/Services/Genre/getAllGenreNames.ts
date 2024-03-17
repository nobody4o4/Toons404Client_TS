import { useEffect, useState } from "react";
import { getAllGenreNameurl} from "./endPoint.genre.services";


function AllGenreNames(){
    const [genre, setgenre] = useState<{id: string, name:string}>();
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllGenreNameurl();
                setgenre(response.data);
                console.log(genre);
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
    return { genre, loading, error };
}

export default AllGenreNames;