// import { genre } from "@/types";
import {url} from "../index/index.services";

export function addPostUrl(content :{content: string, title: string})  {
  return url.post(`/post/add`, content);
}

export function getPostByIdUrl(id: string){
  return url.get(`/post/${id}`);
}

export function removeCommenturl(commentId : string)  {
  return url.post(`/comment/remove/${commentId}`);
}

export function getPostUrl()  {
  return url.get(`/post/all`);
}

export function getFollowingPost(){
    return url.get(`/post/following`);
}



