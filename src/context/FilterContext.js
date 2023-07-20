import { createContext, useContext, useReducer, useState } from "react"
import { FilterReducers } from "../reducers/index";

const initialState = {
    productList: [],
    price: null,
    gender: null,
    color: "all",
    sale: false,
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

    function sortPrice(product){
        if(state.price === "up"){
            return product.filter(product => product.price > 10000)
        }
        if(state.price === "down"){
            return product.filter(product => product.price < 10000)
        }
        return product
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

    function filterColor(product){
        const colorFiltered = state.color === "all" ? product : product.filter(item => item.color.includes(state.color))
        return colorFiltered
    }

    const filteredProducts = findGender(filterColor(sortPrice(inSale(state.productList))));

    const [open, setOpen] = useState(false);

    const value = {
        state,
        dispatch,
        productList: filteredProducts,
        initialProductList,
        open,
        setOpen
    }

    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
} 


export const useFilter = () => { return useContext(FilterContext) }