export interface IMovie {
    id: string,
    name: string,
    releaseDate: string,
    ratingImdb: string,
    ratingRottenTomatoes?: string,
    ratingAudience?: string,
    imgPoster?: string,
    imgBackground?: string,
    genres?: string[],
    cast?: IRole[],
}

export interface IGame {
    id: string,
    name: string,
    releaseDate: string,
    studio?: string,
    publisher?: string,
    rating: string,
    imgPoster: string,
    genres: string,
}

export interface IActor {
    id: string,
    name: string,
    img: string,
    dateOfBirth: string,
    gender: string,
}

export interface IRole {
    name: string,
    actorId: string,
}