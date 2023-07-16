import { createContext, useContext, useReducer } from "react"
import { WishReducer } from "../reducers";

const wishInitialState = {
    wishList:[]
}

const WishContext = createContext(wishInitialState);

export const WishProvider = ({children}) => {    
    
    const [state, dispatch] = useReducer(WishReducer, wishInitialState)
    
    function addToWishList(product){
        const updateList = state.wishList.concat(product)
        dispatch({
            type: "ADD_TO_WISHLIST",
            payload: {
                product: updateList
            }
        })
    }

    function removeFromWishList(product){
        const updateList = state.wishList.filter(item => item.id !== product.id)
        dispatch({
            type:"REMOVE_FROM_WISHLIST",
            payload: {
                product: updateList
            }
        })
    }

    function clearWishList(){
        dispatch({
            type:"CLEAR_WISH_LIST",
            payload:{
                wishList:[]
            }
        })
    }

    const value = {
        wishList: state.wishList,
        addToWishList,
        removeFromWishList,
        clearWishList
    }
    return(
        <WishContext.Provider value={value}>
            {children}
        </WishContext.Provider>
    )
}

export const useWishList = () => {
   return useContext(WishContext)
}