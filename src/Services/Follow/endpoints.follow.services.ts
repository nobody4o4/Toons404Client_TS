// import { genre } from "@/types";
import {url} from "../index/index.services";

export function followUrl(userId : string)  {
  return url.post(`/follow/follow/${userId}`);
}

export function unfollowUrl(userId : string)  {
  return url.post(`/follow/unfollow/${userId}`);
}

