const defaultState = {
  product:
    [{
      name: 'Bouclé Bungalow “Creme” Cover',
      count: 1,
      price: 239,
      src: '/images/white.webp',
      id: 0
    },
      {
        name: 'Replacement Cover in “Catnip”',
        count: 1,
        price: 129,
        src: '/images/green.webp',
        id: 1
      }],
}

export const PRICE = "PRICE";

export const productReducer = (state = defaultState, action) => {
  switch (action.type) {

    case PRICE:
      const newProduct = state.product.map((prod) => prod.id === action.payload.id? action.payload:prod)
      return {
        ...state, product: newProduct
      }
    default:
      return state
  }
}

export const setPrice = (payload) => ({type: PRICE, payload})
