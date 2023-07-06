import { createContext } from "react"

const InitialWishState = {
    wishList : []    
}

const WishContext = createContext(InitialWishState);

export const WishProvider = ({children}) => {

    const value ={
        wishList:[]
    }

    return(
        <WishContext.Provider value={value}>
            {children}
        </WishContext.Provider>
    )
}