import { useEffect, useState } from "react";
import { Post } from "@/types";
import { getPostUrl } from "./endpoint.post.services";

export default function GetAllPost() {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPostUrl();
        setData(response.data);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message || "There was a problem");
        }
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}