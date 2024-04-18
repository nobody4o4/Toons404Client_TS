//Get data of all the books from the database through the API
import { useEffect, useState } from "react";
import { getAllChaptersByBookIdUrl } from "./endPoint.chapter.services";
import { chapterCard } from "@/types";

function GetAllChaptersByBookId(bookId: string, type : string) {
  const [data, setdata] = useState<chapterCard>();
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllChaptersByBookIdUrl(bookId , type);
        console.log(data);
        setdata(response.data);
        setloading(false);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message, "eror");
          seterror(error.message || "There was a problem");
        }
        setloading(false);
      }
    };
    fetchData();
  }, []);

  return { data, loading, error };
}

export default GetAllChaptersByBookId;
