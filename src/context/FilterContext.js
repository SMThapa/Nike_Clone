import { createContext, useContext, useReducer } from "react"
import { FilterReducers } from "../reducers/index";

const initialState = {
    productList: [],
    price:null,
    gender: null,
    sale: false
}

const FilterContext = createContext(initialState);

export const FilterProvider = ({children}) =>{

    const [state, dispatch] = useReducer(FilterReducers, initialState);

    function initialProductList(products){
        dispatch({
            type: "PRODUCT_LIST",
            payload:{
                products: products
            }
        })
    } 

    function inSale(products){
        return state.sale ? products.filter(product => product.sale) : products;
    }

    function findGender(products){
        if(state.gender === "Men"){
            return products.filter(product => product.gender === "Men")
        }
        if(state.gender === "Women"){
            return products.filter(product => product.gender === "Women")
        }
        if(state.gender === "Kid"){
            return products.filter(product => product.gender === "Kid")
        }  
        return products
    }

    const filteredProducts = findGender(inSale(state.productList));

    const value = {
        state,
        dispatch,
        productList: filteredProducts,
        initialProductList
    }

    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
} 


export const useFilter = () => { return useContext(FilterContext) }