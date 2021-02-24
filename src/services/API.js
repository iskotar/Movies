export function httpRequest(params) {
  return fetch(`http://www.omdbapi.com/?apikey=331b7984${params}`)
  .then(res => res.json())
  .then(res => res)
  .catch(error => error)
}
