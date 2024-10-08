import { useEffect, useState } from "react";
import { getAllSeriesurl } from "./endPoint.series.services";
import { seriesDetails } from "@/types";

function AllSeriesDetails(){
    const [data, setdata] = useState<seriesDetails>();
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllSeriesurl();
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

export default AllSeriesDetails;