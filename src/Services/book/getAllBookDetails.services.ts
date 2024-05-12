 //Get data of all the books from the database through the API
 import { useEffect, useState } from "react";
 import { getBookDetailsurl } from "./endPoint.book.services";
 import {  BookDetails} from "@/types";
 
 function AllBookDetails(){
 
     const [data, setdata] = useState<BookDetails[]>();
     const [loading, setloading] = useState(true);
     const [error, seterror] = useState("");
 
     useEffect(() => {
        const fetchData = async () => {
             try {
                 const response = await getBookDetailsurl();
                 console.log(data);
                 setdata(response.data);
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
 
 export default AllBookDetails;