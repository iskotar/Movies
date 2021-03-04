export interface IMovieItemPage {
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

export interface IMovieListItem {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
}

export interface IShowsItem {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    runtime: number;
    premiered: string;
    officialSite: string;
    summary: string;
    image: {
        medium: string;
        original: string;
    };
    externals: {
        tvrage: number;
        thetvdb: number;
        imdb: string;
    };
    genres: string[];
}

export interface ICastItem {
  person: {
    name: string;
    image: {
      medium: string;
    };
  };
  character: {
    name: string;
  }
}
