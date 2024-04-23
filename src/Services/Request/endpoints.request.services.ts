// import { series } from "@/types";
import {url} from "../index/index.services";

export function getAllRequestUrl() {
  return url.get(`/request/all`);
}

export function requestUrl() {
  return url.post(`/request/`);
}

export function acceptRequestUrl(id: string) {
  return url.post(`/request/accept/${id}`);
}

export function rejectRequestUrl(id: string) {
  return url.post(`/request/reject/${id}`);
}
