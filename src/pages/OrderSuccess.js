import { useLocation, useNavigate } from 'react-router-dom'
import logo from '../util/NIKE-LOGO.png'

export const OrderSuccess = () => {
  const {state} = useLocation()
  const navigate = useNavigate()
  const data = state.data;

  return (
    <div className="px-5 h-screen flex flex-col justify-center items-center">
        <h1 className="text-xl">Order Summery</h1>
        <div className="flex flex-col justify-center items-center  border-black rounded-lg sm:p-12">
            <img className='h-12 w-16' src={logo} alt="" />
            <div className="my-4 flex flex-col items-center">
                <p>Thankyou for your order!</p>
                <p>Your Order ID: {data.id}</p>
            </div>
            <p>Your Order is confirmed.</p>
            <p className='text-center'>Please check your email ({data.userInfo.email}) for the further details.</p>
            <p className="my-4">Payment id: someRandom_id</p>
            <button onClick={()=>navigate("/")} className='bg-blue-500 text-white py-3 px-5 rounded sm:my-2'>Continue Shopping</button>
        </div>
    </div>
  )
}
