export interface IMovieItemFull {
    Title: string;
    Poster: string;
    imdbRating: number;
    Released: string;
    Country: string;
    Actors: string;
    Director: string;
    Genre: string;
    Awards: string;
    BoxOffice: string;
    Language: string;
    Production: string;
    Runtime: string;
    Writer: string;
    Plot: string;
}

export interface IMovieItem {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
}
