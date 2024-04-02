import { useSearchParams } from "react-router-dom";

function Test() {
  const [searchParams] = useSearchParams();

  searchParams.get("id");
  console.log(searchParams.get("id"));

  return <div>Test</div>;
}
export default Test;
