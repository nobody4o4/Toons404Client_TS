export type novelCard = {
    id: string;
    title: string;
    coverImage: string;
    genre: {
        name: string;
    };
    subGenre: {
        name: string;
    };
    series: {
        title: string;
    };
}

export type NovelDetails={
    id: string;
    title: string;
    coverImage: string;
    likes: number;
    genre: {
        id:string,
        name: string;
    };
    subGenre: {
        id:string,
        name: string;
    };
    series: {
        id:string,
        title: string;
    };
    author: {
        username: string;
    };
    description: string;
    _count :{
        chapters: number;
    }
}


export type novelPageDetails = {
    id: string;
    title: string;
    coverImage: string;
    likes: number;
    createdAt: Date;
    genre: {
        id:string,
        name: string;
    };
    subGenre: {
        id:string,
        name: string;
    };
    series: {
        id:string,
        title: string;
        coverImage: string;
        description: string;
    };
    description: string;
    author: {
        username: string;
    };
    chapters: {
        id: string;
        title: string;
        number: number;
        thumbnail: string;
        createdAt: string;
    };
}


export type genreDetails ={
    id: string;
    name: string;
    coverImage: string;
    description: string;
    createdAt: string;
    updatedAt: string;
}

export type seriesDetails ={
    id: string;
    title: string;
    coverImage: string;
    author: string;
    description: string;
    createdAt: string;
    updatedAt: string;
}

export type genreCard = {
    id: string;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
}
export type genre = {
    name: string;
    description: string;
    coverImage: string;
}

export interface addGenre  extends FormData {
    name: string;
    description: string;
    coverImage: string;
}

export interface addSeries  extends FormData {
    name: string;
    description: string;
    coverImage: string;
}

export interface addNovel  extends FormData {
    title: string;
    description: string;
    coverImage: string;
    genreId: string;
    subGenreId: string;
    seriesId: string;
}

export interface addChapter  extends FormData {
    title: string;
    content: string;
    coverImage: string;
}

export type chapterCard = {
    id: string;
    title: string;
    number: number;
    likes: number;
    thumbnail: string;
    createdAt: string;
}

export type chapter = {
    id: string;
    title: string;
    number: number;
    novel:{
        title: string;
        author:{
            username: string;
        }
    }
    Author: string;
    content: string;
    thumbnail: string;
    createdAt: Date;
}

export type MyFunctionType = () => Promise<JSON>; 


// export interface ScrollToTopProps extends Routerp {
//     children?: ReactNode;
//     location: LocationState;
// }