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
  console.log(item)

  return (
    <div className="theContainer sm:mt-40 sm:px-14">
      <div className="flex w-full xl:px-40">
        
        <div className="sm:w-2/3 ">
          <h1 className="text-xl">Bag</h1>
          <div className="sm:py-8 sm:mr-8 flex border-b border-gray-200">
            <div>
              <img className="sm:w-48 h-auto object-cover aspect-square" src={image} alt="" />
            </div>
            <div className="flex justify-between w-full sm:pl-5"> 
              <div>
                <p className="text-lg font-bold">{item.name}</p>
                <p className="text-gray-500">{`${item.gender}' Shoe`}</p>
                <p className="text-gray-500">Color: {item.color}</p>
                <div className="flex my-1">
                  <p className="text-gray-500 pr-5">Size:</p>
                  <p className="text-gray-500">Quantity</p>
                </div>
                <div className="flex my-4">
                  <i className="bi bi-heart pr-5"></i>
                  <i className="bi bi-trash text"></i>
                </div>
              </div>
              <div>
                <p className="font-bold">MRP: &#8377; {item.price}.00</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="sm:w-1/3">
          <h1 className="text-xl">Summery</h1>
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
          <div className="sm:py-4 border-b border-gray-200">
            <div className="flex justify-between">
              <p>Total</p>
              <p className="font-bold">&#8377; {item.price}.00</p>
            </div>
          </div>
          <div className="sm:py-8 flex justify-center">
            <button className="bg-black text-white text-lg w-full p-4 rounded-full">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}
