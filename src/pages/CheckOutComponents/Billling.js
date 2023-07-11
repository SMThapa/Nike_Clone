import { useNavigate } from "react-router-dom"
import { useCart } from "../../context/CartContext"

export const Billling = () => {

  const {cartList, total, userInfo, clearCart} = useCart()

  const token = JSON.parse(sessionStorage.getItem("token"))
  const id = JSON.parse(sessionStorage.getItem("nkid"))
  const user = {...userInfo, userId: id}

  const navigate = useNavigate()

  async function handleSubmit(event){
    event.preventDefault();

    const order = {
      products: cartList,
      total_sum: total,
      quantity: cartList.length,
      userInfo:user
    }
    // eslint-disable-next-line no-unused-vars
    const res = await fetch("http://localhost:8000/660/order", {
      method: "POST",
      headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`},
      body: JSON.stringify(order)
    })

    const data = await res.json();
    clearCart();
    navigate("/ordersucess", {state:{data: data}})
  }

  return (
    <div className="sm:w-7/12 sm:pr-10 top-20 sticky h-full" >
      <h1 className="sm:text-2xl sm:pb-2">Billing</h1>
      <h1 className="text-gray-500 sm:pb-3">Choose your billing method.</h1>
      <div>
        <div className="sm:text-2xl sm:py-6 sm:px-5 sm:w-5/6 border border-gray-300 flex justify-between rounded-xl sm:my-6">
          <label className="cursor-pointer" htmlFor="COD">Cash on Delivery</label>
          <input className="cursor-pointer w-6" type="checkbox" id="COD"/>
        </div>

        <div className="border-b border-gray-300 sm:my-8">
          <div className="flex justify-between items-center">
            <h1 className="sm:text-2xl sm:py-3">Credit or Debit Card</h1>
            {/* {debitDown && <i className="bi bi-chevron-down"></i>}
            {!debitDown && <i className="bi bi-chevron-up"></i>} */}
          </div>
          <div className="sm:my-3">
            <h1 className="sm:text-lg text-gray-500">Enter Your Card Details</h1>
            <form onSubmit={handleSubmit} className="flex flex-col sm:w-5/6 sm:mb-8">
              <input className="sm:px-3 sm:py-5 border border-gray-300 rounded sm:my-4" type="number" minLength="16" maxLength="16" placeholder="Card Number" required/>
              <input className="sm:px-3 sm:py-5 border border-gray-300 rounded sm:my-4" type="text" placeholder="Card holder name" />
              <div className="flex justify-between">
                <input className="sm:px-3 sm:py-5 border border-gray-300 rounded sm:my-4 w-1/2 mr-2" type="month" placeholder="MM/YY"/>
                <input className="sm:px-3 sm:py-5 border border-gray-300 rounded sm:my-4 w-1/2 ml-2" type="number" maxLength="999" placeholder="CVv"/>
              </div>
              <div className="w-full">
                <button className="bg-blue-500 text-white sm:p-3 rounded sm:my-2 float-right sm:w-1/3 disabled:bg-gray-500"> Pay</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}