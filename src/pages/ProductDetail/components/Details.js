import { useRef, useState } from "react"
import { useCart } from "../../../context/CartContext"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useWishList } from "../../../context"


export const Details = ({fetchData, color}) => {
    const size= {
        Kid : ["UK 1", "UK 2", "UK 3", "UK 4", "UK 5", "UK 6"],
        Women : ["UK 3", "UK 4", "UK 5", "UK 6", "UK 6.5", "UK 7", "UK 7.5", "UK 8", "UK 8.5"],
        Men : ["UK 6", "UK 6.5", "UK 7", "UK 7.5", "UK 8", "UK 8.5", "UK 9", "UK 9.5", "UK 10", "UK 10.5", "UK 11", "UK 11.5", "UK 12"]
    }
    
    const token = JSON.parse(sessionStorage.getItem("token"))
    const navigate = useNavigate()

    //controls the size checked or not.
    const SIZE = useRef()
    const [theSize, setSize] = useState('')
    const [sizeSelected, setSelected] = useState(true)

    //handles the add_to_cart context component
    const {cartList, addToCart} = useCart()
    const handleClick = (product) => {
      token ? addToCart({...product, "size":`${theSize}`}) : navigate('/login')
    }

    //
    const {wishList, addToWishList, removeFromWishList } = useWishList()
    const [checkWish, setCheckWish] = useState(false);

    const checkWishList = (product) =>{
      token ? addToWishList({...product, "size":`${theSize}`}) : navigate('/login')
    }

    //check wether the item in present in cartList or not.
    const [checkCart, setCheck] = useState(false);
    useEffect(()=>{
      const aa = cartList.find(item => item.id === fetchData.id)
      const bb = wishList.find(item => item.id === fetchData.id)
      aa ? setCheck(true): setCheck(false)
      bb ? setCheckWish(true): setCheckWish(false)
    },[cartList, fetchData, wishList])

  return (
    <div className="sm:pl sm:w-1/2 max-sm:p-3">
      <div className="max-sm:mb-1">
        <p className="sm:text-3xl text-lg">{fetchData.name}</p>
        <p className="sm:text-lg text-gray-500">{`${fetchData.gender}'s Shoe`}</p>
      </div>

      <div className="sm:my-5 max-sm:mb-5">
        <p className="sm:text-lg font-bold">MRP: Rs.{fetchData.price}</p>
        <p className="text-gray-500">incl. of taxes <br /> (Also includes all applicable duties)</p>
      </div>
      
      <div className="sm:mt-16 max-sm:my-3">
          <div className="flex items-center">
          <p>Select Size</p>
          <p className={`${sizeSelected? "hidden":''} text-red-500 text-xs pl-2`}>*please select a size.</p>
          </div>
        <div className="w-full">
          {
            size[fetchData.gender]?.map((size, index) =>(
              // <button className="sm:w-24 sm:p-2 sm:m-1 border" key={index}>{size}</button>
              <p key={index} className="inline-flex">
                <input className="hidden overflow-hidden peer" ref={SIZE} type="radio" name="inputRadio" id={`size${index}`} required="required"/>
                <label onClick={(e)=>{setSize(e.target.innerText)}} className="w-20 sm:w-24 sm:p-2 p-1 m-1 border cursor-pointer rounded text-center peer-checked:bg-gray-300" htmlFor={`size${index}`}>{size}</label>
              </p>
            ))
          }
        </div>

      </div>

      <div className="sm:my-12 my-3 flex w-full justify-between">
        {!checkCart && <button onClick={()=>theSize?handleClick(fetchData):setSelected(false)}  className="w-1/2 mr-2 bg-black text-white p-3 rounded-full">Add to Bag</button>}
        {checkCart && <button onClick={()=>navigate('/cart')}  className="w-1/2 mr-2 bg-black text-white p-3 rounded-full">Go to Cart</button>}
        
        {!checkWish && <button onClick={()=> theSize?checkWishList(fetchData):setSelected(false)} className="w-1/2 ml-2 p-3 border border-gray-400 rounded-full">Add to Favourite</button>}
        {checkWish && <button onClick={()=> removeFromWishList(fetchData)} className="w-1/2 ml-2 p-3 border border-gray-400 rounded-full">Remove From It</button>}
      </div>

      <p className="sm:my-8 my-5">
        {
          `You can't stop ageing, but the ${fetchData.name} gets pretty close. Soft, textured leather helps 
          conceal creasing and is easy to clean. The debossed branding, which replaces the woven labels, pairs with extra laces so you 
          can eat that jam doughnut in peace. And the perforated sockliner keeps it airy and breathable. Now, there's really no reason 
          not to rock white-on-white.`
        }
      </p>
      
      <div className="sm:my-3">
        <p>&bull; Color: {color}</p>
        <p>&bull; Style: {fetchData.id}</p>
      </div>
      
      <div className="mt-10">
        <p className="font-bold sm:text-xl text-lg underline my-3 sm:pb-5">View Product Details</p>
        <div>
          <div className="sm:border-t border-b border-gray-300">
            <h1 className="sm:text-2xl text-xl font-black sm:py-5 py-1" >Delivery & Returns</h1>
            <div className="ml-3">
              <p className="">&bull; Free delivery for purchases above ₹14,000.00</p>
              <p className="sm:my-4 my-2">&bull; Standard delivery 4-9 Business Days</p>
              <p className="sm:my-4 my-2">&bull; Orders are processed and delivered Monday-Friday (excluding public holidays)</p>
              <p className="sm:my-4 my-2">&bull; Nike Members enjoy free returns.</p>
            </div>
          </div>
          <div className="border-b border-gray-300 max-sm:py-3">
            <h1 className="text-2xl font-black sm:py-5 py-2">Product Information</h1>
            <div className="ml-3">
              <p className="">Declaration of Importer: Direct import by the individual customer</p>
              <p className="sm:my-4 my-2">Marketed by: Nike Global Trading B.V. Singapore Branch, 30 Pasir Panjang Road, #10-31/32, Mapletree Business City, Singapore 117 440</p>
              <p className="sm:my-4 my-2 text-lg font-black">Net Quantity: 1 Pair</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
