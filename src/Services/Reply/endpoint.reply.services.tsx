// import { genre } from "@/types";
import { url } from "../index/index.services";

export function addReplyurl(replyedItemId: string, content: { reply: string }) {
  return url.post(`/reply/add/${replyedItemId}`, content);
}

export function removeReplyurl(replyId: string) {
  return url.post(`/reply/remove/${replyId}`);
}

export function getReplysurl(chapterId: string, type: string) {
  return url.get(`/reply/get/${chapterId}/${type}`);
}
