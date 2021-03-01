import {IMovieItem} from "../../components/types";

interface IAction {
  type: string;
  payload: any
}

export interface IState {
  currentItem: IMovieItem;
}

export default function currentItem(state = {}, action:IAction) {
  switch (action.type) {
    case 'BY_ID':
      return {...action.payload}

    default:
      return state
  }
}
