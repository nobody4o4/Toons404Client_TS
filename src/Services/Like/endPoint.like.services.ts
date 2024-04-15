// import { genre } from "@/types";
import {url} from "../index/index.services";

export function addLikesurl(type : string, likedItemId: string)  {
  return url.post(`/like/add`, {type,likedItemId});
}

export function removeLikesurl(type : string, likedItemId: string)  {
  return url.post(`/like/remove`, {type, likedItemId});
}



