// this service is used to get novel by id
import { useEffect, useState } from "react";
import { Series } from "@/types";
import { getSeriesByIdurl } from "./endPoint.series.services";

function GetSeriesById(seriesId:string) {
    const [data, setdata] = useState<Series>();
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState("");
    

    useEffect(() => {
       const fetchData = async () => {
            try {
                console.log(seriesId,"seriesId")
                const response = await getSeriesByIdurl(seriesId);
                console.log(response.data,"response.data")
                setdata(response.data);
                console.log(data);
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

export default GetSeriesById;