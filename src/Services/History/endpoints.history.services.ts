// import { genre } from "@/types";
import {url} from "../index/index.services";

export function getHistoryUrl( )  {
  return url.get(`/history/my-history`);
}

export function removeLikesurl(type : string, likedItemId: string)  {
  return url.post(`/like/remove`, {type, likedItemId});
}



