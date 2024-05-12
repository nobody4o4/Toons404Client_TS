 //Get data of all the books from the database through the API
 import { useEffect, useState } from "react";
 import { getBookCardsurl } from "./endPoint.book.services";
 import { bookCard} from "@/types";
 
 function AllBookCard(){
 
     const [data, setdata] = useState<bookCard[]>();
     const [loading, setloading] = useState(true);
     const [error, seterror] = useState("");
 
     useEffect(() => {
        const fetchData = async () => {
             try {
                 const response = await getBookCardsurl();
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
 
 export default AllBookCard;