// import { genre } from "@/types";
import {url} from "../index/index.services";

function getAllGenresurl() {
  return url.get(`/genre/all`);
}

function getAllGenreNameurl() {
  return url.get(`/genre/select`);
}

function getGenreByIdurl(id: string) {
  return url.get(`/genre/${id}`);
}

function createGenreurl(genre:FormData) {
  return url.post(`/genre/add`, genre);
}

function updateGenreByIdurl(id: string, genre: object) {
  return url.patch(`/genre/update/${id}`, genre);
}

function deleteGenreByIdurl(id: string) {
  return url.delete(`/genre/delete/${id}`);
}

export {
  getAllGenresurl,
  getGenreByIdurl,
  getAllGenreNameurl,
  createGenreurl,
  updateGenreByIdurl,
  deleteGenreByIdurl,
};