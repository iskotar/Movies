const initialState: IState = {
  list: [],
  page: 1,
  totalResults: 0,
  title: '',
  error: null
}

export interface IState {
  list: [];
  page: number;
  totalResults: number;
  title: string;
  error: string | null;
}

interface IAction {
  type: string;
  payload: {
    title: string;
    page: number;
    response: any;
  }
}

export default function movieSearchResult(state = initialState, action: IAction) {
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

    case 'CLEAR_MOVIES':
      return initialState

    case 'CLEAR_ERROR':
      return {...state, error: ''}

    default:
      return state
  }
}
