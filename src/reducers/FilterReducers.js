export const FilterReducers = (state, action) => {
  const {type, payload} = action;

  switch(type){

    case "PRODUCT_LIST":
        return { productList: payload.products }

    case "PRICE":
        return
    
    case "GENDER":
        return {...state, gender: payload.gender}

    case "SALE":
        return {...state, sale: payload.sale}
    
    case "CLEAR":
        return {
            ...state,
            price: null,
            gender: null,
            sale: false
        }
    default:
        return 
  }
}
