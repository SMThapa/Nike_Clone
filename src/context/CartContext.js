import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react"
import { CartReducers } from "../reducers/CartReducers";

const cartInitialState = {
    cartList:[],
    total: 0,
    userInfo:[],
}

const CartContext = createContext(cartInitialState);

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(CartReducers, cartInitialState)

    function addToCart(product){
        const updatedList = state.cartList.concat(product);
        const updatedTotal = state.total + product.price;

        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updatedList,
                total: updatedTotal
            }
        })
    }

    function removeFromCart(product){
        const updatedList = state.cartList.filter(item => item.id !== product.id)
        const updatedTotal = state.total - product.price;

        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updatedList,
                total: updatedTotal
            }
        })
    }

    function clearCart(){
        dispatch({
            type:"CLEAR_CART",
            payload:{
                cartList:[],
                total:0
            }
        })
    }

    function createUserInfo(info){
        dispatch({
            type:"CREATE_USER_INFO",
            payload:{
                userInfo: info
            }
        })
    }



    const value = {
        cartList: state.cartList,
        total: state.total,
        userInfo: state.userInfo,
        addToCart,
        removeFromCart,
        clearCart,
        createUserInfo
    }
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext);
    return context;
}