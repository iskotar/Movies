import {IShowsItem} from "../../../components/types";

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

export default function showsSearchResult(state = initialState, action: IAction) {
  switch (action.type) {
    case 'SHOW_BY_QUERY':
      return {
        ...state,
        list: action.payload.response.map((el: { show: IShowsItem }) => el.show),
        page: action.payload.page || state.page,
        totalResults: action.payload.response.length,
        title: action.payload.title
      }

    case 'CLEAR_SHOWS':
      return initialState

    default:
      return state
  }
}
