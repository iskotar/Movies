export function httpRequestMovies(params:string) {
  return fetch(`https://www.omdbapi.com/?apikey=331b7984${params}`)
  .then(res => res.json())
  .then(res => res)
  .catch(error => error)
}

export function httpRequestShows(params:string) {
  return fetch(`https://api.tvmaze.com/${params}`)
  .then(res => res.json())
  .then(res => res)
  .catch(error => error)
}
