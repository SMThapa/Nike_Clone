export const WishReducer = (state, action) => {
    const {type, payload} = action;

    switch(type){

        case "ADD_TO_WISHLIST":
            return{...state, wishList: payload.product }

        case "REMOVE_FROM_WISHLIST":
            return{...state, wishList: payload.product }
        
        case "CLEAR_WISH_LIST":
            return{...state, wishList: payload.wishList }
        
        default:
            throw new Error("no case found")
    }
}
