export function httpRequestMovies(params:string) {
  return fetch(`http://www.omdbapi.com/?apikey=331b7984${params}`)
  .then(res => res.json())
  .then(res => res)
  .catch(error => error)
}

export function httpRequestShows(params:string) {
  return fetch(`http://api.tvmaze.com/shows?${params}`)
  .then(res => res.json())
  .then(res => res)
  .catch(error => error)
}
