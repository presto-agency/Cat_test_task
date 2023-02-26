const defaultState = {
  products:
    [{
      name: "Bouclé Bungalow “Creme” Cover",
      count: 1,
      price: 239,
      src: "/images/white.webp",
      id: 0
    },
      {
        name: "Replacement Cover in “Catnip”",
        count: 1,
        price: 129,
        src: "/images/green.webp",
        id: 1
      }],
  shipping: 10
}

export const COUNT = "COUNT";
export const SHIPPING = "SHIPPING";

export const ProductReducer = (state = defaultState, action) => {
  switch (action.type) {

    case COUNT:
      const newProduct = state.products.map((product) =>
        product.id === action.payload.id
          ? action.payload
          : product
      )
      return {
        ...state, products: newProduct
      }
    case SHIPPING:
      return {
        ...state, shipping: action.payload
      }
    default:
      return state
  }
}

export const setPrice = (payload) => ({type: COUNT, payload})
export const setShipping = (payload) => ({type: SHIPPING, payload})
