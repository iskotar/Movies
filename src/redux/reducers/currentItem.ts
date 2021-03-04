import {IMovieListItem, IShowsItem} from "../../components/types";

interface IAction {
  type: string;
  payload: any
}

export interface IState {
  currentItem: {
    info: IMovieListItem | IShowsItem;
    cast: any[];
  };
}

const initialState = {
  info: {},
  cast: []
}

export default function currentItem(state = initialState, action:IAction) {
  switch (action.type) {
    case 'BY_ID':
      return {
        ...state,
        info: action.payload
      }

    case 'CAST':
      console.log(action.payload)
      return {
        ...state,
        cast: [...action.payload]
      }

    default:
      return state
  }
}
