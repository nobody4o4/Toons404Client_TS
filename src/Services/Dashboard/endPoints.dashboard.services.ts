import {url} from "../index/index.services";

export function getStats() {
  return url.get(`/dashboard/stats`);
}

export function getRegisteredCountUrl(){
  return url.get(`/dashboard/registredCount`)
}