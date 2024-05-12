// import { genre } from "@/types";
import {url} from "../index/index.services";

export function addCommenturl(commentedItemId : string, content :{comment: string , type: string})  {
  return url.post(`/comment/add/${commentedItemId}`, content);
}

export function removeCommenturl(commentId : string)  {
  return url.post(`/comment/remove/${commentId}`);
}

export function getCommentsurl(chapterId : string, type : string)  {
  console.log(chapterId,"jsdncdjhsncks")
  return url.get(`/comment/get/${chapterId}/${type}`);
}



