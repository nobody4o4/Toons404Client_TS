import { useParams, Link } from "react-router-dom";
import { format } from "date-fns";
import { FaArrowLeft } from "react-icons/fa";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import GetUserDetailsAdmin from "@/Services/user/getUserDetails.services";
import Toonscard from "@/components/Toonscard";

const AdminUserDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = GetUserDetailsAdmin(id || "");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  const books = data?.books;

  const formattedCreatedAt = format(data?.createdAt, "MMM-dd, yyyy");
  const formattedUpdatedAt = format(data?.updatedAt, "MMM-dd, yyyy");

  return (
    <div className="px-4">
      <div className="flex items-center justify-between space-x-4 pb-8">
        <Link className="text-lg font-semibold" to="/dashboard/admin/book">
          <Button className="text-base" variant="outline">
            <FaArrowLeft className="mr-2 text-lg" /> Back to Books
          </Button>
        </Link>
        <Link
          className="text-lg font-semibold"
          to={`/dashboard/admin/edit/book/${id}`}
        >
          <Button className="text-base">Edit</Button>
        </Link>
      </div>

      <Card>
        <div className="flex">
          <figure className="flex items-center justify-center p-8 pr-2">
            <img
              alt={`${data?.username}'s cover`}
              className="aspect-[1/1.3] h-[370px] rounded-lg object-cover"
              src={data?.avatar}
            />
          </figure>
          <div className="items-centera flex p-8">
            <div className="space-y-4">
              <div className="space-y-1.5">
                <h2 className="text-xl font-bold leading-none">
                  {data?.username}
                </h2>
                <div className="space-y-3">
                  <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                    Name: {data?.firstName} {data?.lastName}
                  </p>
                  <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                    Email: {data?.email}
                  </p>
                  <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                    Role: {data?.role}
                  </p>
                  <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                    Created at: {formattedCreatedAt}
                  </p>
                  <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                    Updated at: {formattedUpdatedAt}
                  </p>
                  <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                    Followers: {data?._count.Followers}
                  </p>
                  <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                    Followings: {data?._count.Followings}
                  </p>
                  <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                    Books: {data?._count.Books}
                  </p>
                  <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                    Series: {data?._count.Series}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="mt-4">
        <CardHeader className="font-bold">Bio</CardHeader>
        <CardContent>
          <p>{data?.bio}</p>
        </CardContent>
      </Card>

      <Card className="mt-4">
        <CardHeader className="font-bold">Books</CardHeader>
        <CardContent className="grid grid-cols-2 gap-x-10 gap-y-4 px-2 pb-20 sm:grid-cols-3 sm:px-8 lg:mt-10 lg:grid-cols-4 lg:gap-x-10 lg:px-0">
          {Array.isArray(books) &&
            books.map((book, index) => (
              <Toonscard
                key={index}
                id={book.id}
                genre={book.genre}
                series={book.series}
                Likes={book._count?.Likes}
                _count={book._count}
                subGenre={book.subGenre}
                title={book.title}
                coverImage={book.coverImage}
              />
            ))}
          {Array.isArray(books) && books.length === 0 && (
            <div className="p-4">The user has no books.</div>
          )}
        </CardContent>
      </Card>

      <Card className="mt-4">
        <CardHeader className="font-bold">Series</CardHeader>
        <CardContent>
          {Array.isArray(data?.Series) &&
            data?.Series.map((seriesItem, index) => (
              <div key={index} className="flex items-start gap-4 pr-3">
                <div className="mx-5 flex items-center justify-center">
                  <img
                    alt={`${seriesItem.title} cover`}
                    className="w-28 rounded-lg"
                    height="100"
                    src={seriesItem.coverImage}
                    style={{
                      aspectRatio: "1/1.3",
                      objectFit: "cover",
                    }}
                    width="100"
                  />
                </div>
                <div className="col-span-2 space-y-2">
                  <h3 className="text-xl font-bold leading-none">
                    {seriesItem.title}
                  </h3>
                  <div className="prose prose-sm">
                    <p>{seriesItem.description}</p>
                  </div>
                </div>
              </div>
            ))}
          {Array.isArray(data?.Series) && data?.Series.length === 0 && (
            <div className="p-4">The user has no series.</div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminUserDetails;
