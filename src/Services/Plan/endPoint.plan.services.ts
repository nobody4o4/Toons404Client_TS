// import { genre } from "@/types";
import {url} from "../index/index.services";

export function getPlansUrl()  {
  return url.get(`/plan/all`);
}

