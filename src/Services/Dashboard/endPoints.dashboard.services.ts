import {url} from "../index/index.services";

export function getStats() {
  return url.get(`/dashboard/stats`);
}

