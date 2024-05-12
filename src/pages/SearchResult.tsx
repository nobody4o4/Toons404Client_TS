import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { bookCard } from "@/types";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import InternalError from "@/pages/error/InternalError";
import Loading from "@/pages/Loading";
import { searchBookByTitleUrl } from "@/Services/book/endPoint.book.services";
import Toonscard from "@/components/Toonscard";

function BookSearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<bookCard[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSearch = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await searchBookByTitleUrl(searchQuery);
      setSearchResults(response.data);
    } catch (error: any) {
      setError(error);
    }

    setLoading(false);
  };

  const handleBookClick = (bookId: string) => {
    navigate(`/books/${bookId}`);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search books by title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-md border border-gray-300 px-4 py-2"
        />
        <button
          onClick={handleSearch}
          className="mt-2 rounded-md bg-primary px-4 py-2 text-white"
        >
          Search
        </button>
      </div>

      {loading ? (
        <Loading />
      ) : error ? (
        <div>No Book Found</div>
      ) : (
        <Card className="container mx-auto max-w-[1200px] gap-y-4 border-0 bg-transparent shadow-none sm:grid-cols-3 lg:mt-5 lg:grid-cols-4 lg:gap-x-5">
          <CardHeader>
            <CardTitle>Search Results</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-x-5 gap-y-4 border-0 bg-transparent px-2 pb-10 sm:grid-cols-3 sm:px-8 lg:grid-cols-4 lg:gap-x-5 lg:px-5">
            {searchResults.map((book) => (
              <Toonscard {...book} />
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default BookSearchPage;
