// this service is used to get book by id
import { useEffect, useState } from "react";
import { Post } from "@/types";
import { getPostByIdUrl } from "./endpoint.post.services";


function GetPostById(postId:string) {
    const [data, setdata] = useState<Post>();
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState("");
    

    useEffect(() => {
       const fetchData = async () => {
            try {
                console.log(postId,"postId")
                const response = await getPostByIdUrl(postId);
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

export default GetPostById;