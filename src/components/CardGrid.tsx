import { Fragment } from "react";
import Toonscard from "./Toonscard";
import { bookCard } from "@/types";
import AllBookCard from "@/Services/book/getAllBookCard.services";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

function CardGrid() {
  const { data, loading } = AllBookCard();
  //   const [hover, setHover] = useState<number | null>(null);

  if (loading) {
    return <p>Loading...</p>; //  render a loading indicator while fetching data
  }

  //   const handleHover = (index: number) => {
  //     setHover(index);
  //   };

  //   const handleLeave = () => {
  //     setHover(null);
  //   };

  return (
    <Fragment>
      <Card className=" mx-auto max-w-[1100px] gap-y-4 border-0 bg-transparent  shadow-none sm:grid-cols-3  lg:mt-5 lg:grid-cols-4 lg:gap-x-5">
        <CardHeader>
          <CardTitle> Books </CardTitle>
        </CardHeader>
        <CardContent className="grid  grid-cols-2 gap-x-5 gap-y-4 border-0 bg-transparent px-2 pb-10 sm:grid-cols-3 sm:px-8  lg:grid-cols-4 lg:gap-x-5 lg:px-5">
          {Array.isArray(data) &&
            data?.map((book: bookCard, index: number) => (
              <Toonscard {...book} key={index} />
            ))}
        </CardContent>
      </Card>
    </Fragment>
  );
}
export default CardGrid;
