// //Get data of all the books from the database through the API
// import { useEffect, useState } from "react";
// import { createGenreurl} from "./endPoint.genre.services";
// import { genre } from "@/types";


// function AddGenre(genre: FormData) {
//     const [data, setdata] = useState<genre>();
//     const [loading, setloading] = useState(true);
//     const [error, seterror] = useState("");

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await createGenreurl(genre);
//                 console.log(data);
//                 setdata(response.data);
//                 setloading(false);
//             } catch (error) {
//                 if (error instanceof Error) {
//                     console.log(error.message, "eror");
//                     seterror(error.message || "There was a problem");
//                 }
//                 setloading(false);
//             }
//         }
//         fetchData();
//     },[])
//     return { data, loading, error };
// }

// export default AddGenre;



import { useEffect, useState } from "react";
import { createGenreurl } from "./endPoint.genre.services";
import { genre } from "@/types"; // Assuming you have a Genre type defined

function useAddGenre(genreData: FormData) {
    const [data, setData] = useState<genre | null>(null); // Change genre to Genre
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await createGenreurl(genreData); // Use genreData instead of genre
                console.log(response.data); // Log the fetched data
                setData(response.data); // Set fetched data to state
                setLoading(false);
            } catch (error) {
                if (error instanceof Error) {
                    console.log(error.message, "error");
                    setError(error.message || "There was a problem");
                }
                setLoading(false);
            }
        };
        fetchData(); // Call fetchData inside useEffect
    }, [genreData]); // Add genreData as a dependency to useEffect

    return { data, loading, error };
}

export default useAddGenre;
