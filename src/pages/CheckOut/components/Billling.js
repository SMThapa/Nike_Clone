import { useNavigate } from "react-router-dom"
import { useCart } from "../../../context/CartContext"
import { useState } from "react"
import { createOrder } from "../../../Services/dataService"

export const Billling = ({deliveryDate}) => {

  const {cartList, total, userInfo, clearCart} = useCart()
  const [checked, setChecked] = useState(false)

  const id = JSON.parse(sessionStorage.getItem("nkid"))
  const user = {...userInfo, userId: id}

  const navigate = useNavigate()


  const payment = checked ? false : true
  async function handleSubmit(event){
    event.preventDefault();
    const data = await createOrder(cartList, total, user, payment, deliveryDate)
    clearCart();
    navigate("/ordersucess", {state:{data: data}})
  }


  const handleChecked = () =>{
    setChecked(!checked)
  }

  return (
    <div className="md:w-7/12 md:pr-10 top-20 md:sticky h-full" >
      <h1 className="text-2xl pb-2">Billing</h1>
      <h1 className="text-gray-500 pb-3">Choose your billing method.</h1>
      <div>
        <div className="sm:text-2xl sm:py-6 py-4 px-5 md:w-5/6 border border-gray-300 flex justify-between rounded-xl sm:my-6 my-3">
          <label className="" htmlFor="">Cash on Delivery</label>
          <input onClick={handleChecked} className="cursor-pointer w-6" type="checkbox" id="COD"/>
        </div>

        <div className="border-b border-gray-300 my-8">
          <div className="flex justify-between items-center">
            <h1 className="sm:text-2xl text-xl sm:py-3">Credit or Debit Card</h1>
          </div>
          <div className="sm:my-3 my-1">
            <h1 className="sm:text-lg text-gray-500 max-sm:pt-1">Enter Your Card Details</h1>
            <form onSubmit={handleSubmit} className="flex flex-col md:w-5/6 sm:mb-8">
              <input className="px-3 sm:py-5 py-3 border border-gray-300 rounded sm:my-4 my-2" type="number" minLength="16" maxLength="16" placeholder="Card Number" required/>
              <input className="px-3 sm:py-5 py-3 border border-gray-300 rounded sm:my-4 my-2" type="text" placeholder="Card holder name" />
              <div className="flex justify-between">
                <input className="px-3 sm:py-5 py-3 border border-gray-300 rounded sm:my-4 my-2 w-1/2 mr-2" type="month" placeholder="MM/YY"/>
                <input className="px-3 sm:py-5 py-3 border border-gray-300 rounded sm:my-4 my-2 w-1/2 ml-2" type="number" maxLength="999" placeholder="CVv"/>
              </div>
              {
                checked ?               
                <div className="w-full max-sm:py-2">
                  <p onClick={handleSubmit} className="bg-blue-500 text-center text-white py-3 px-5 rounded sm:my-2 float-right sm:w-1/3 disabled:bg-gray-500 cursor-pointer" disabled={true}> Continue</p>
                </div> :
                <div className="w-full max-sm:py-2">
                  <button className="bg-blue-500 text-white py-3 px-7 rounded sm:my-2 float-right sm:w-1/3 disabled:bg-gray-500"> Pay</button>
                </div>
              }
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}