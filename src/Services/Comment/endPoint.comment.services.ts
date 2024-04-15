// import { genre } from "@/types";
import {url} from "../index/index.services";

export function addCommenturl(chapterId : string, content :{comment: string})  {
  return url.post(`/comment/add/${chapterId}`, content);
}

export function removeCommenturl(commentId : string)  {
  return url.post(`/comment/remove/${commentId}`);
}

export function getCommentsurl(chapterId : string)  {
  return url.get(`/comment/get/${chapterId}`);
}



