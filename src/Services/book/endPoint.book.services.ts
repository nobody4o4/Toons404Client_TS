import { url } from "../index/index.services";

function getAllBooksurl() {
  return url.get(`/book/all`);
}

function getBookDetailsurl(){
  return url.get(`/book/fulldetail`);
}
function getReadingListurl(){
  return url.get(`/book/reading-list`);
}   

function getBookCardsurl() { 
  return url.get(`/book/bookcard`);
}

function getBookByIdurl(id: string) {
  return url.get(`/book/${id}`);
}
function getBookDetailsByIdurl(id: string) {
  return url.get(`/book/bookpage/${id}`);
}

function getBookByTitleurl(title: string) {
  console.log(title,'hh');
  return url.get(`/book/${title}`);
}

function createBookurl(book: FormData) {
  console.log(book, "book urlll")
  return url.post(`/book/add`, book);
}

function updateBookByIdurl(id: string, book: FormData) {
  return url.patch(`/book/update/${id}`, book);
}

function deleteBookByIdurl(id: string) {
  return url.delete(`/book/delete/${id}`);
}

export {
  getReadingListurl,
  getAllBooksurl,
  getBookCardsurl,
  getBookByTitleurl,
  getBookDetailsurl,
  getBookByIdurl,
  createBookurl,
  updateBookByIdurl,
  deleteBookByIdurl,
  getBookDetailsByIdurl,

};

