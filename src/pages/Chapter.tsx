import GetChapterByNumber from "@/Services/Chapter/getChapterByNumber";
import ReadingBlock from "@/components/Chapter/ReadingBlock";
import { useNavigate, useParams } from "react-router-dom";

function Chapter() {
  const params = useParams();
  const navigate = useNavigate();
  console.log(params);
  const number = params.number;
  console.log(number);
  const parsedNumber: number = Number(number);
  const novelId = params.id || "";
  console.log(novelId, parsedNumber, "novelId, parsedNumber");
  const { data, loading, error } = GetChapterByNumber(novelId, parsedNumber);
  if (loading) return <p>Loading...</p>;
  if (error) return navigate(-1);
  console.log(data);

  if (
    !data?.id ||
    !data?.title ||
    data?.number ||
    !data?.thumbnail ||
    !data?.createdAt
  ) {
    return <p>Data is incomplete</p>;
  }
  return (
    <div>
      <ReadingBlock {...data} />
    </div>
  );
}
export default Chapter;
