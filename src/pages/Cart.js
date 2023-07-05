import { useCart } from "../context/CartContext"
import { ItemCard, Summery } from "./Cart/index";

export const Cart = () => {

  const {cartList, total, removeFromCart} = useCart();

  console.log(cartList)

  return (

    <div className="theContainer sm:mt-40 mt-20 sm:px-14">
      <div className="sm:flex w-full xl:px-40">
        
        <div className="sm:w-2/3 ">
          <h1 className="text-xl py-1">Bag</h1>
          {
            cartList.map((item, index) => (
              <ItemCard key={index} item={item}/>
            ))
          }
        </div>
        
        <Summery/>
        
      </div>
    </div>
  )
}
