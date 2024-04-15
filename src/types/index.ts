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
    _count: {
        Likes: number;
    };
    Likes:[{
        userId: string;
    }]
}

export type MyProfile={
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    avatar: string;
    bio: string;
    novels: novelCard;
}
export type UserProfile={
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    avatar: string;
    bio: string;
    novels: novelCard;
    isFollowing : boolean;
    _count :{
        Followers: number;
        Followings: number
    }
}

export type UserTable = {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    avatar: string;
    bio: string;
    _count :{
        Followers: number;
        Followings: number;
        Novels: number;
        Series: number;
    };
    role: string;


}

export type UserDetail = {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    avatar: string;
    bio: string;
    _count :{
        Followers: number;
        Followings: number;
        Novels: number;
        Series: number;
    };
    role: string;
    novels: novelCard;
    Series: SeriesCard;
    createdAt: Date;
    updatedAt: Date;

}
export type UpdateUser = {
    username: string;
    firstName: string;
    lastName: string;
    avatar: string;
    bio: string;
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
    Likes:[{
        userId: string;
    }]
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
        avatar: string;
    };
    chapters: {
        id: string;
        title: string;
        number: number;
        thumbnail: string;
        createdAt: string;
    };
    _count :{
        Likes: number;
    }
    Likes:[{
        userId: string;
    }]
}

export type novelPageDetail = {
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
        avatar: string;
    };
    chapters: {
        id: string;
        title: string;
        number: number;
        thumbnail: string;
        createdAt: string;
    };
    _count :{
        Likes: number;
    }
    hasLiked: boolean;
}
export type SeriesPageDetail = {
    id: string;
    title: string;
    coverImage: string;
    createdAt: Date;
    description: string;
    author: {
        username: string;
        avatar: string;
    };
    _count :{
        Likes: number;
    }
    hasLiked: boolean;
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
    author: {
        username: string;
    };
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

export interface EditUser extends FormData {
    username: string;
    firstName: string;
    lastName: string;
    avatar: string;
    bio: string;
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
    views: number;
    thumbnail: string;
    createdAt: string;
    _count: {
        Likes: number;
    };
    Likes:[{
        userId: string;
    }]
}

export type chapter = {
    id: string;
    title: string;
    number: number;
    views : number;
    novel:{
        title: string;
        author:{
            username: string;
        }
    }
    _count:{
        Likes: number;
    }
    Likes:[{
        userId: string;
    }]
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

// pidx=z4cSF2RLNqE7nMc9fsCUMh
// &
// transaction_id=8GPLWvVMCQKtsiYXLv4ruH
// &tidx=8GPLWvVMCQKtsiYXLv4ruH
// &amount=1000
// &total_amount=1000
// &mobile=98XXXXX248
// &status=Completed
// &purchase_order_id=00a27811-bdb3-4825-ae0e-a9152f4f0827
// &purchase_order_name=Subscription%20Premium


export type KhaltiCallBack = {
    pidx: string;
    transaction_id: string;
    tidx: string;
    amount: number;
    total_amount: number;
    mobile: string;
    status: string;
    purchase_order_id: string;
    purchase_order_name: string;
}


export type StatsCounts = {
    genreCount: number;
    seriesCount: number;
    novelCount: number;
    userCount: number;
}


export type Series = {
    id: string;
    title: string;
    coverImage: string;
    description: string;
    author: {
        username: string;
        avatar: string;
    };
    novels: novelCard;
    _count:{
        Likes: number;
    }
    Likes:[{
        userId: string;
    }]
    createdAt: Date;
}

export type SeriesCard = {
    id: string;
    title: string;
    coverImage: string;
    _count: {
        Likes: number;
    };
    Likes: [{
        userId: string;
    }];
}

export type Genre = {
    id: string;
    name: string;
    description: string;
    coverImage: string;
    novel:novelCard;
}

export type Comment = {
    id: string;
    content: string;
    user: {
        username: string;
        avatar: string;
    };
    createdAt: string;
    _count: {
        Likes: number;
    };
    Likes:[{
        userId: string;
    }]

}

export type Comments = {
    id: string;
    content: string;
    user: {
        username: string;
        avatar: string;
    };
    createdAt: string;
    _count: {
        Likes: number;
    };
    hasLiked: boolean;
}

export type LikedList = {
    id: string;
    title: string;
    coverImage: string;
}
