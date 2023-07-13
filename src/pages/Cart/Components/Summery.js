import { useCart } from "../../../context/CartContext";
import { useNavigate } from "react-router-dom"; 

export const Summery = () => {
    const navigate = useNavigate()
    const {total} = useCart();
  return (
    <div className="sm:sticky sm:w-1/3 max-sm:py-8 top-32 h-96">
        <h1 className="text-xl max-sm:pb-5">Summery</h1>
        <div className="sm:py-8 border-b border-gray-200">
            <div className="flex justify-between pb-3">
                <p className="">Subtotal</p>
                <p>&#8377; {total}.00</p>
            </div>
            <div className="flex justify-between pb-3">
                <p>Estimated Delivery</p>
                {total>=14000 && <p>Free</p>}
                {total<14000 && <p>&#8377; 759.00</p>}
            </div>
        </div>
        <div className="sm:py-4 py-3 border-b border-gray-200">
            <div className="flex justify-between">
                <p>Total</p>
                <p className="font-bold">&#8377; {total >= 14000 ? total: total+759}.00</p>
            </div>
        </div>
        <div className="sm:py-8 py-6 sm:flex justify-center">
            <button onClick={()=>{navigate('/userInfo')}} className="bg-black text-white text-lg sm:w-4/6 w-1/2 sm:p-3 p-2 rounded-full">Checkout</button>
        </div>
    </div>
  )
}
