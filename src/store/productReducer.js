const defaultState = {
  product:
    [{
      name: 'Bouclé Bungalow “Creme” Cover',
      price: 239,
      src: '/images/white.webp',
      id: 0
    },
      {
        name: 'Replacement Cover in “Catnip”',
        price: 129,
        src: '/images/green.webp',
        id: 1
      }],
  totalPrice: 0,
}

export const TOTALPRICE = "TOTALPRICE";

export const productReducer = (state = defaultState, action) => {
  switch (action.type) {

    case TOTALPRICE:
      return {...state, totalPrice: state.totalPrice}
    default:
      return state
  }
}

export const setTotalPrice = (payload) => ({type: TOTALPRICE, payload})
