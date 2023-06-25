export const FilterReducers = (sate, action) => {
  const {type, payload} = action;

  switch(type){

    case "PRODUCT_LIST":
        return { productList: payload.products }

    case "PRICE":
        return
    
    case "GENDER":
        return

    case "SALES":
        return 
    

    default:
        return 
  }
}
