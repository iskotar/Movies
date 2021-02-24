const initialState = {
  list: [],
  page: 1,
  totalResults: 0,
  title: '',
  error: null
}
export default function searchResult(state = initialState, action) {
  switch (action.type) {
    case 'BY_QUERY':
      if(!action.payload.title.length) return { ...state, error: 'Please, enter the movie title'};
      if(action.payload.response.Error) return { ...state, error: action.payload.response.Error};
      return {
        ...state,
        list: [...action.payload.response.Search],
        page: action.payload.page || state.page,
        totalResults: action.payload.response.totalResults,
        title: action.payload.title
      }

    case 'CLEAR_ERROR':
      return {...state, error: ''}
    default:
      return state
  }
}
