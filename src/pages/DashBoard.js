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
    <div className="sm:mt-28 sm:px-20 px-5 lg:px-40 xl:px-60 min-h-screen">
      {orders.length === 0 && <h1 className="h-96 sm:mb-20 mt-28">Dash board is empty.</h1>}
      {orders.length !== 0  && 
        <div className="">
          <h1 className="text-xl">Dashboard</h1>
          {
            orders.map((item , index)=>(
              <div key={item.id} className="py-12 border-b border-gray-400">
                <p className="max-sm:py-1 text-xl">Order {index + 1}</p>
                <p className="text-lg text-gray-600">Arrives by {item.deliveryDate[1]} {item.deliveryDate[0]} {item.deliveryDate[2]}</p>
                {
                  item.products.map(product =>(
                    <div key={product.id} className="sm:flex justify-between border-b border-gray-200">
                      <div className="sm:py-8 py-5 flex">
                        <img className="w-32 h-auto object-cover aspect-square sm:mr-5 mr-2" src={product.thumbnail[0]} alt="" />
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
                    </div>
                  ))
                }
                <div className="sm:flex items-center float-right">
                  <button className="py-3">Cancel Order</button>
                </div>
              </div>
            ))
          }
        </div>
      }
    </div>
  )
}
