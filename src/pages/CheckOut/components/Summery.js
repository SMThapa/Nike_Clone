import { useCart } from "../../../context/CartContext"

export const Summery = ({deliveryDate}) => {
  const {userInfo, cartList, total} = useCart()

  return (
    <div className="md:w-5/12">
      <h1 className='sm:text-2xl text-xl sm:pb-5'>Order Summery</h1>
      <div className="max-md:flex flex-col-reverse">
        <div>
          <div className="sm:py-2">
            <div className="border-b border-gray-200 text-gray-600">
                <div className="flex justify-between pb-3 max-sm:py-3">
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
          <p className="text-sm sm:pb-5 max-sm:py-3">(The total reflects the price of your order. Including all duties and taxes.)</p>

          <div className="border-b border-gray-300 my-5">
            <p className="sm:text-lg text-xl text-gray-500 sm:mb-2 mb-1">Deliver to,</p>
            <div className="text-gray-500">
              <p>{userInfo.name}</p>
              <p className="sm:text-sm sm:my-1">{userInfo.address}</p>
              <p className="sm:text-sm sm:my-1">{userInfo.pincode}, {userInfo.locality}</p>
              <p className="sm:text-sm sm:my-1">{userInfo.email}</p>
              <p className="sm:text-sm sm:my-1">+91 {userInfo.number}</p>
            </div>
          </div>
        </div>

        <div className="sm:py-4">
          <h1 className="sm:my-1 text-xl">Arrives by {deliveryDate[1]} {deliveryDate[0]} {deliveryDate[2]}</h1>
          <p className="sm:text-lg  text-gray-500">Ordered products,</p>
          <div className="">
            {
              cartList.map((product, index)=>(
                <div key={index} className="sm:py-8 py-5 flex border-b border-gray-200">
                  <img className="w-32 h-auto object-cover aspect-square mr-5" src={product.thumbnail[0]} alt="" />
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
      
    </div>
  )
}
