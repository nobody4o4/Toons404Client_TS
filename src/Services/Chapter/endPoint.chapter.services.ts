import {url} from "../index/index.services";

function getChaptersUrl() {
  return url.get(`/chapter`);
}

function getChapterByIdUrl(id: string){
    return url.get(`/chapter/${id}`);
}

function getChapterByNumberUrl(novelId:string,number: number){
    return url.get(`/chapter/${novelId}/${number}`);
}


function createChapterUrl(chapter: object){
    return url.post(`/chapter/add`, chapter);
}

function updateChapterByIdUrl(id: string, chapter: object){
    return url.patch(`/chapter/update/${id}`, chapter);
}

function deleteChapterByIdUrl(id: string){
    return url.delete(`/chapter/delete/${id}`);
}

function getAllChaptersByNovelIdUrl(novelId: string){
    return url.get(`/chapter/novel/${novelId}`);
}

function getNextChapterUrl(novelId: string, currentChapterNumber: number){
    return url.get(`/chapter/${novelId}/${currentChapterNumber}/next`);
}

function getPrevChapterUrl(novelId: string, currentChapterNumber: number){
    return url.get(`/chapter/${novelId}/${currentChapterNumber}/prev`);
}

export {getChaptersUrl, getChapterByIdUrl, createChapterUrl, updateChapterByIdUrl, deleteChapterByIdUrl, getAllChaptersByNovelIdUrl, getNextChapterUrl, getPrevChapterUrl, getChapterByNumberUrl};