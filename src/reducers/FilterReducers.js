export const FilterReducers = (state, action) => {
  const {type, payload} = action;

  switch(type){

    case "PRODUCT_LIST":
        return { ...state, productList: payload.products }

    case "PRICE":
        return {...state, price: payload.price}
    
    case "GENDER":
        return {...state, gender: payload.gender}

    case "SALE":
        return {...state, sale: payload.sale}

    case "COLOR":
        return {...state, color: payload.color}
    
    case "CLEAR":
        return {
            ...state,
            price: null,
            gender: null,
            sale: false,
            color: "all"
        }
    default:
        return 
  }
}
