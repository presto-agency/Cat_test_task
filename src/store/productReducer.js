const defaultState = {
  count: 1,
  product:
    [{
      name: 'Bouclé Bungalow “Creme” Cover',
      price: 239,
      src: 'images/white.webp',
      id: 0
    },
      {
        name: 'Replacement Cover in “Catnip”',
        price: 129,
        src: 'images/green.webp',
        id: 1
      }],
}

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const productReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {...state, count: state.count + 1}
    case DECREMENT:
      return {...state, count: state.count - 1}
    default:
      return state
  }
}

export const incrementCreator = (payload) => ({type: INCREMENT, payload})
export const decrementCreator = (payload) => ({type: DECREMENT, payload})
