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

export type novelPageDetails = {
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


export type chapterCard = {
    id: string;
    title: string;
    number: number;
    thumbnail: string;
    createdAt: string;
}

export type MyFunctionType = () => Promise<JSON>; 


// export interface ScrollToTopProps extends Routerp {
//     children?: ReactNode;
//     location: LocationState;
// }