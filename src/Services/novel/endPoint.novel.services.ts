import { url } from "../index/index.services";

function getAllNovelsurl() {
  return url.get(`/novel/all`);
}

function getNovelDetailsurl(){
  return url.get(`/novel/fulldetail`);
}

function getNovelCardsurl() {
  return url.get(`/novel/novelcard`);
}

function getNovelByIdurl(id: string) {
  return url.get(`/novel/${id}`);
}
function getNovelDetailsByIdurl(id: string) {
  return url.get(`/novel/novelpage/${id}`);
}

function getNovelByTitleurl(title: string) {
  console.log(title,'hh');
  return url.get(`/novel/${title}`);
}

function createNovelurl(novel: FormData) {
  return url.post(`/novel/add`, novel);
}

function updateNovelByIdurl(id: string, novel: FormData) {
  return url.patch(`/novel/update/${id}`, novel);
}

function deleteNovelByIdurl(id: string) {
  return url.delete(`/novel/delete/${id}`);
}

export {
  getAllNovelsurl,
  getNovelCardsurl,
  getNovelByTitleurl,
  getNovelDetailsurl,
  getNovelByIdurl,
  createNovelurl,
  updateNovelByIdurl,
  deleteNovelByIdurl,
  getNovelDetailsByIdurl,

};

