import { useCart, useWishList } from "../../../context/index";

export const Lists = () => {
    const {addToCart} = useCart()
    const {wishList, removeFromWishList} = useWishList();

    const handleRemove = (product) => {
        removeFromWishList(product)
    }
    const handleMoveToCart = (product) => {
        addToCart(product)
        removeFromWishList(product)
    }
    
  return (
    <div className="sm:mt-40 sm:px-20 lg:px-40 xl:px-60 sm:h-96">
        {
            wishList.map(product =>(
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
                    <p className="max-sm:text-sm font-bold">&#8377; {product.price}.00</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center sm:w-40">
                    <button onClick={()=>handleMoveToCart(product)} className="border rounded border-black bg-white w-full sm:px-3 sm:py-2 sm:my-2">Move to Cart</button>
                    <button onClick={()=>handleRemove(product)} className="border rounded bg-black text-white w-full sm:px-3 sm:py-2 sm:my-2">Remove</button>
                </div>
                </div>
            ))
        }
    </div>
  )
}
