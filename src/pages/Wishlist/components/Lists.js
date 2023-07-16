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
    <div className="sm:mt-20 pt-20 sm:px-20 px-5 lg:px-40 xl:px-60 h-screen">
        <h1 className="sm:text-xl sm:mb-8">Wishlist ({wishList.length})</h1>
        {
            wishList.map(product =>(
                <div key={product.id} className="sm:flex justify-between border-b border-gray-300 max-sm:py-5">
                    <div className="sm:py-8 py-1 flex">
                        <img className="w-32 h-auto object-cover aspect-square sm:mr-5 max-sm:mr-8" src={product.thumbnail[0]} alt="" />
                        <div className="max-sm:flex flex-col justify-center">
                            <p className="sm:text-lg font-bold">{product.name}</p>
                            <div className="flex my-1">
                                <p className="max-sm:text-sm text-gray-500 pr-5">Size: {product.size}</p>
                                <p className="max-sm:text-sm text-gray-500">{`${product.gender}' Shoe`}</p>
                            </div>
                            <p className="max-sm:text-sm text-gray-500">Color: {product.color}</p>
                            <p className="max-sm:text-sm font-bold">&#8377; {product.price}.00</p>
                        </div>
                    </div>
                    <div className="flex flex-col max-sm:flex-row justify-center items-center sm:w-40">
                        <button onClick={()=>handleMoveToCart(product)} className="border rounded border-black bg-white w-full sm:px-3 sm:py-2 py-1 sm:my-2 max-sm:mx-2 rounded-full">Move to Cart</button>
                        <button onClick={()=>handleRemove(product)} className="border rounded bg-black text-white w-full sm:px-3 sm:py-2 py-1 sm:my-2 max-sm:mx-2 rounded-full">Remove</button>
                    </div>
                </div>
            ))
        }
    </div>
  )
}
