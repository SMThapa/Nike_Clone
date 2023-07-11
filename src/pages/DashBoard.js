import { useEffect, useState } from "react"

export const DashBoard = () => {

  const [orders, setOrders] = useState([])

  const userId = JSON.stringify(sessionStorage.getItem('nkid'))
  const token = JSON.stringify(sessionStorage.getItem('token'))
  useEffect(()=>{
    async function fetchOrder(){
      const res = await fetch(`http://localhost:8000/600/orders?user.userId=1`, {
        method:"GET",
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`},
      })
      const data = await res.json()
      setOrders(data)
    } 
    fetchOrder()
    console.log(orders)
  },[orders, token, userId])
  return (
    <div className="sm:mt-40 sm:px-20 sm:h-screen">
        <h1>Dash board is empty.</h1>
    </div>
  )
}
