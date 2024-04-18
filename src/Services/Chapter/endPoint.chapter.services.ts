import {url} from "../index/index.services";

function getChaptersUrl() {
  return url.get(`/chapter`);
}

function getChapterByIdUrl(id: string){
    return url.get(`/chapter/${id}`);
}

function getChapterByNumberUrl(bookId:string,number: number , type: string){
    return url.get(`/chapter/${bookId}/${number}`, {params: {type: type}});
}

function createChapterUrl(chapter: FormData ,bookId: string){
    return url.post(`/chapter/${bookId}/add`, chapter);
}

function updateChapterByIdUrl(id: string, chapter: FormData){
    return url.patch(`/chapter/update/${id}`, chapter);
}

function deleteChapterByIdUrl(id: string){
    return url.delete(`/chapter/delete/${id}`);
}

function getAllChaptersByBookIdUrl(bookId: string, type : string){
    return url.get(`/chapter/book/${bookId}`, {params: {type: type}});
}

function getNextChapterUrl(bookId: string, currentChapterNumber: number){
    return url.get(`/chapter/${bookId}/${currentChapterNumber}/next`);
}

function getPrevChapterUrl(bookId: string, currentChapterNumber: number){
    return url.get(`/chapter/${bookId}/${currentChapterNumber}/prev`);
}

export {getChaptersUrl, getChapterByIdUrl, createChapterUrl, updateChapterByIdUrl, deleteChapterByIdUrl, getAllChaptersByBookIdUrl, getNextChapterUrl, getPrevChapterUrl, getChapterByNumberUrl};