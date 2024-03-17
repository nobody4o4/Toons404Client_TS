import { useEffect, useState } from "react";
import { getAllSeriesNameurl} from "./endPoint.series.services";

function AllSeriesNames(){
    const [series, setSeries] = useState<{id:string,title:string}>();
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllSeriesNameurl();
                setSeries(response.data);
                console.log(series);
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
    return { series, loading, error };
}

export default AllSeriesNames;