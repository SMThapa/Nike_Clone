import { useCart } from "../../context/CartContext"
import { ItemCard, Summery, EmptyCart } from "./Components/index";


export const Cart = () => {

  const {cartList} = useCart();

  return (

    <div className="theContainer sm:mt-40 mt-20 sm:px-14">
    {
      cartList.length === 0 ? <EmptyCart/>: 
      
      <div className="sm:flex w-full xl:px-40">
        <div className="sm:w-2/3 ">
          <h1 className="text-xl sm:py-1">Bag</h1>
          {
            cartList.map((item, index) => (
              <ItemCard key={index} item={item}/>
            ))
          }
        </div>
        <Summery/>
      </div>
    }
    </div>
  )
}
