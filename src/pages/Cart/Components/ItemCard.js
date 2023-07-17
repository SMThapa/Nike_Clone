import { useCart } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const ItemCard = ({item}) => {

  const {removeFromCart} = useCart();

  const [color, setColor] = useState([])
  useEffect(()=>{
    setColor(item.color.join('/'))
  },[item])

  return (
    <div className="py-8 sm:mr-8 flex border-b border-gray-200">
      <Link to={`/product/${item.id}`}>
        <img className="sm:w-48 w-56 h-auto object-cover aspect-square" src={item.thumbnail[0]} alt="" />
      </Link>
      <div className="w-full sm:pl-5 pl-4"> 
        <div className="sm:flex w-full justify-between">
          <Link to={`/product/${item.id}`}>
            <p className="sm:text-lg font-bold">{item.name}</p>
          </Link>
          <p className="max-sm:text-sm font-bold">MRP: &#8377; {item.price}.00</p>
        </div>
        <div className="my-1">
          <p className="max-sm:text-sm text-gray-500">{`${item.gender}' Shoe`}</p>
          <p className="max-sm:text-sm text-gray-500">Color: {color}</p>
        </div>
        <div className="flex my-1">
          <p className="max-sm:text-sm text-gray-500 pr-5">Size: {item.size}</p>
          <p className="max-sm:text-sm text-gray-500">Quantity : 1</p>
        </div>
        <div className="flex sm:my-4 my-2">
          <i className="bi bi-heart pr-5 cursor-pointer"></i>
          <i onClick={()=>removeFromCart(item)} className="bi bi-trash text cursor-pointer"></i>
        </div>
      </div>
    </div>
  )
}
