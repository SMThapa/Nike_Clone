import { createContext, useContext, useReducer } from "react"
import { FilterReducers } from "../reducers/index";

const initialState = {
    productList: [],
    price:null,
    gender: null,
    sales:null
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

    function inSale(productList){
        return state.sale ? productList.filter(product => product.sale) : productList;
    }

    function findGender(productList){
        return state.gender ? productList.filter(product => product.gender === state.gender) : productList;
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