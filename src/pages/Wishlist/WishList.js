import { useWishList } from "../../context/index"
import { EmptyList } from "./components/EmptyList"
import { Lists } from "./components/Lists"


export const WishList = () => { 
  
  const {wishList} = useWishList()
  return (
    <div>
      {wishList.length === 0 ? <EmptyList/> : <Lists/>}
    </div>
  )
}
