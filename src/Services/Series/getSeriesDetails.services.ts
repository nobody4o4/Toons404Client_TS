// this service is used to get book by id
import { useEffect, useState } from "react";
import { Series } from "@/types";
import {  getSeriesDetailByIdurl } from "./endPoint.series.services";

function GetSeriesDetails(seriesId:string) {
    const [data, setdata] = useState<Series>();
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState("");
    
    useEffect(() => {
       const fetchData = async () => {
            try {
                console.log(seriesId,"seriesId")
                const response = await getSeriesDetailByIdurl(seriesId);
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

export default GetSeriesDetails;