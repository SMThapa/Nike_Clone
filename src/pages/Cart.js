import { useEffect, useState } from "react"

export const Cart = () => {
  const [item, setItem] = useState([])
  const [image, setImage] = useState('')
  useEffect(()=>{
    async function fetchProducts(){
      const res = await fetch(`http://localhost:8000/products/CW2288-111`);
      const json = await res.json();
      setItem(json)
      setImage(json.thumbnail[0])
    }
    fetchProducts()
  },[])

  return (
    <div className="theContainer sm:mt-40 mt-20 sm:px-14">
      <div className="sm:flex w-full xl:px-40">
        
        <div className="sm:w-2/3 ">
          <h1 className="text-xl py-1">Bag</h1>
          <div className="py-8 sm:mr-8 flex border-b border-gray-200">
            <div>
              <img className="sm:w-48 w-56 h-auto object-cover aspect-square" src={image} alt="" />
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
                <i className="bi bi-trash text"></i>
              </div>
            </div>
          </div>
        </div>
        
        <div className="sm:w-1/3 max-sm:py-8">
          <h1 className="text-xl max-sm:pb-5">Summery</h1>
          <div className="sm:py-8 border-b border-gray-200">
            <div className="flex justify-between pb-3">
              <p className="">Subtotal</p>
              <p>&#8377; {item.price}.00</p>
            </div>
            <div className="flex justify-between pb-3">
              <p>Estimated Delivery</p>
              <p>Free</p>
            </div>
          </div>
          <div className="sm:py-4 py-3 border-b border-gray-200">
            <div className="flex justify-between">
              <p>Total</p>
              <p className="font-bold">&#8377; {item.price}.00</p>
            </div>
          </div>
          <div className="sm:py-8 py-6 sm:flex justify-center">
            <button className="bg-black text-white text-lg sm:w-full w-1/2 sm:p-4 p-2 rounded-full">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}
