import { useEffect, useState } from "react";
import {  getSeriesCardurl} from "./endPoint.series.services";
import { SeriesCard } from "@/types";

function GetSeriesCard(){
    const [series, setSeries] = useState<SeriesCard>();
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getSeriesCardurl();
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

export default GetSeriesCard;