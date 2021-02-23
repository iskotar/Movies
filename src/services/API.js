import { get } from 'lodash'

export const searchByQuery = (query) => {
  const title = get(query, 'title', '');
  const page = get(query, 'page', '');

  return fetch(`http://www.omdbapi.com/?s=${title}&page=${page}&apikey=331b7984`)
  .then(res => res.json())
  .then(res => res)
  .catch(error => error)
}
