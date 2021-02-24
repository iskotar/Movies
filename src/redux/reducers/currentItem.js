export default function currentItem(state = {}, action) {
  switch (action.type) {
    case 'BY_ID':
      return {...action.payload}

    default:
      return state
  }
}
