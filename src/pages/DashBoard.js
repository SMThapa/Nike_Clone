import { useEffect, useState } from "react"
import { getOrders } from "../Services/dataService"

export const DashBoard = () => {

  const [orders, setOrders] = useState([])

  useEffect(()=>{
    async function fetchOrder(){
      const data = await getOrders()
      setOrders(data)
    } 
    fetchOrder()
  },[])
  return (
    <div className="sm:mt-40 mt-28 sm:px-20 px-5 lg:px-40 xl:px-60 h-screen">
      {orders.length === 0 && <h1 className="h-96 sm:mb-20">Dash board is empty.</h1>}
      {orders.length !== 0  && 
        <div className="">
        {
          orders.map((item , index)=>(
            <div key={item.id} className="sm:my-12 border-b border-gray-400">
              <p>Order {index + 1}</p>
              {
                item.products.map(product =>(
                  <div key={product.id} className="flex justify-between border-b border-gray-200">
                    <div className="py-8 flex">
                      <img className="sm:w-32 w-56 h-auto object-cover aspect-square sm:mr-5" src={product.thumbnail[0]} alt="" />
                      <div className="">
                        <p className="sm:text-lg font-bold">{product.name}</p>
                        <div className="flex my-1">
                          <p className="max-sm:text-sm text-gray-500 pr-5">Size: {product.size}</p>
                          <p className="max-sm:text-sm text-gray-500">{`${product.gender}' Shoe`}</p>
                        </div>
                        <p className="max-sm:text-sm text-gray-500">Color: {product.color}</p>
                        {/* <p className="max-sm:text-sm font-bold">&#8377; {product.price}.00</p> */}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <button>Cancel Order</button>
                    </div>
                  </div>
                ))
              }
            </div>
          ))
        }
      </div>
      }
    </div>
  )
}
