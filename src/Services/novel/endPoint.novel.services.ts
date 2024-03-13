import { url } from "../index/index.services";

function getNovelsurl() {
  return url.get(`/novel/all`);
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

function createNovelurl(novel: object) {
  return url.post(`/novel/add`, novel);
}

function updateNovelByIdurl(id: string, novel: object) {
  return url.patch(`/novel/update/${id}`, novel);
}

function deleteNovelByIdurl(id: string) {
  return url.delete(`/novel/delete/${id}`);
}

export {
  getNovelsurl,
  getNovelCardsurl,
  getNovelByTitleurl,
  getNovelByIdurl,
  createNovelurl,
  updateNovelByIdurl,
  deleteNovelByIdurl,
  getNovelDetailsByIdurl,

};

