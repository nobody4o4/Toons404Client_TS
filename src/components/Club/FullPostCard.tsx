import { useParams } from "react-router-dom";
import GetPostById from "@/Services/post/getPostById.post.services";
import Loading from "@/pages/Loading";
import InternalError from "@/pages/error/InternalError";
import FullPostDetails from "./FullPostDetails";
import Comments from "./Comments";
import CommentForm from "./Comments";

function FullPostCard() {
  const params = useParams();
  const id = params.id;

  const { data, loading, error } = GetPostById(id);
  const post = data;
  console.log(post);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <InternalError />;
  }

  return (
    <div className="mx-64 my-20">
      <FullPostDetails post={post} />
      {/* <Comments comments={post?.Comments || []} postId={post.id} /> */}
      <CommentForm postId={post?.id ?? ""} />
    </div>
  );
}

export default FullPostCard;
