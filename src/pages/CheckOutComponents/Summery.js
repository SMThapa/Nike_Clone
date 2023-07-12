import { useCart } from "../../context/CartContext"

export const Summery = () => {
  const {userInfo, cartList, total} = useCart()

  return (
    <div className="sm:w-5/12">
      <h1 className='sm:text-2xl sm:pb-5'>Order Summery</h1>

      <div className="sm:py-2">
        <div className="border-b border-gray-200 text-gray-600">
            <div className="flex justify-between pb-3">
                <p className="">Subtotal</p>
                <p>&#8377; {total}.00</p>
            </div>
            <div className="flex justify-between pb-3">
                <p>Delivery/Shipping</p>
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
      </div>
      <p className="text-sm sm:pb-5">(The total reflects the price of your order. Including all duties and taxes.)</p>

      <div className="border-b border-gray-300 sm:pb-5">
        <p className="sm:text-lg text-gray-500 sm:mb-2">Deliver to,</p>
        <div className="text-gray-500">
          <p>{userInfo.name}</p>
          <p className="sm:text-sm sm:my-1">{userInfo.address}</p>
          <p className="sm:text-sm sm:my-1">{userInfo.pincode}, {userInfo.locality}</p>
          <p className="sm:text-sm sm:my-1">{userInfo.email}</p>
          <p className="sm:text-sm sm:my-1">+91 {userInfo.number}</p>
        </div>
      </div>

      <div className="sm:py-5">
      <p className="sm:text-lg  text-gray-500">Ordered products,</p>
        <div className="">
          {
            cartList.map((product, index)=>(
              <div key={index} className="py-8 flex border-b border-gray-200">
                <img className="sm:w-32 w-56 h-auto object-cover aspect-square sm:mr-5" src={product.thumbnail[0]} alt="" />
                <div className="">
                  <p className="sm:text-lg font-bold">{product.name}</p>
                  <div className="flex my-1">
                    <p className="max-sm:text-sm text-gray-500 pr-5">Size: {product.size}</p>
                    <p className="max-sm:text-sm text-gray-500">{`${product.gender}' Shoe`}</p>
                  </div>
                  <p className="max-sm:text-sm text-gray-500">Color: {product.color}</p>
                  <p className="max-sm:text-sm font-bold">&#8377; {product.price}.00</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
