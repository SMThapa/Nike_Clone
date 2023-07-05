import { useCart } from "../../context/CartContext";

export const ItemCard = ({item}) => {

  const {removeFromCart} = useCart();

  return (
    <div className="py-8 sm:mr-8 flex border-b border-gray-200">
      <div>
        <img className="sm:w-48 w-56 h-auto object-cover aspect-square" src={item.thumbnail[0]} alt="" />
      </div>
      <div className="w-full sm:pl-5 pl-4"> 
        <div className="sm:flex w-full justify-between">
          <p className="sm:text-lg font-bold">{item.name}</p>
          <p className="max-sm:text-sm font-bold">MRP: &#8377; {item.price}.00</p>
        </div>
        <div className="my-1">
          <p className="max-sm:text-sm text-gray-500">{`${item.gender}' Shoe`}</p>
          <p className="max-sm:text-sm text-gray-500">Color: {item.color}</p>
        </div>
        <div className="flex my-1">
          <p className="max-sm:text-sm text-gray-500 pr-5">Size:</p>
          <p className="max-sm:text-sm text-gray-500">Quantity</p>
        </div>
        <div className="flex sm:my-4 my-2">
          <i className="bi bi-heart pr-5"></i>
          <i onClick={()=>removeFromCart(item)} className="bi bi-trash text"></i>
        </div>
      </div>
    </div>
  )
}
