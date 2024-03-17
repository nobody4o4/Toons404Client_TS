// import { series } from "@/types";
import {url} from "../index/index.services";

function getAllSeriesurl() {
  return url.get(`/series/all`);
}
function getAllSeriesNameurl() {
  return url.get(`/series/select`);
}

function getSeriesByIdurl(id: string) {
  return url.get(`/series/${id}`);
}

function createSeriesurl(series:FormData) {
  return url.post(`/series/add`, series);
}

function updateSeriesByIdurl(id: string, series: object) {
  return url.patch(`/series/update/${id}`, series);
}

function deleteSeriesByIdurl(id: string) {
  return url.delete(`/series/delete/${id}`);
}

export {
  getAllSeriesurl,
  getAllSeriesNameurl,
  getSeriesByIdurl,
  createSeriesurl,
  updateSeriesByIdurl,
  deleteSeriesByIdurl,
};