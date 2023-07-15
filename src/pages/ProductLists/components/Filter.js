import { useState } from "react"
import { useFilter } from "../../../context"

export const Filter = ({category}) => {

  const {state, dispatch} = useFilter();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <div className={`h-screen ${open?'w-80': ''} mt-24 sticky top-0 max-md:hidden`} >
      <div className={`h-full flex justify-center items-center bg-gray-100 sticky top-0 ${open? '' : 'hidden'}`}>
        <div className="w-full h-full px-5 py-3 z-20">
          
          <div className="mt-14 sm:pb-3 border-b border-gray-400">            
            <h1 className="my-2">PRICE</h1>
            <div className="price">
              <div className="ml-5">
                <input onChange={()=>dispatch({type:"PRICE", payload:{price:"down"}})} type="radio" name="price" id="priceUnder" checked={state.price === "down"}/>
                <label className="cursor-pointer sm:px-1" htmlFor="priceUnder" >Under Rs.10,000</label>
              </div>
              <div className="ml-5">
                <input onChange={()=>dispatch({type:"PRICE", payload:{price:"up"}})} type="radio" name="price" id="priceAbove" checked={state.price === "up"}/>
                <label className="cursor-pointer sm:px-1" htmlFor="priceAbove">Above Rs.10,000</label>
              </div>
            </div>
          </div>

          <div className={`mt-6 sm:pb-3 border-b border-gray-400 ${category === 'all'? '':'hidden'}`} >            
            <h1 className="my-2">Gender</h1>
            <div className="price">
              <div className="ml-5">
                <input type="radio" onChange={()=>dispatch({type:"GENDER", payload:{gender:"Men"}})} checked = {state.gender === "Men"? true: false} name="gender" id="men"/>
                <label htmlFor="men"> Men</label>
              </div>
              <div className="ml-5">
                <input type="radio" onChange={()=>dispatch({type:"GENDER", payload:{gender:"Women"}})} checked= {state.gender === "Women"? true: false} name="gender" id="women"/>
                <label htmlFor="women"> Women</label>
              </div>
              <div className="ml-5">
                <input type="radio" onChange={()=>dispatch({type:"GENDER", payload:{gender:"Kid"}})} checked= {state.gender === "Kid"? true: false} name="gender" id="kid"/>
                <label htmlFor="kid"> Kids</label>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:pb-3 border-b border-gray-400">
            <h1 className="my-2">COLOR</h1>
            <div className="flex flex-wrap">
              <p className="sm:m-2">
                <input type="radio" className="hidden overflow-hidden peer" name="color" id="all" />
                <label htmlFor="all" onClick={()=>dispatch({type:"COLOR", payload:{color:"all"}})} className="sm:p-1 sm:px-3 border cursor-pointer rounded text-center peer-checked:border-black">all</label>
              </p>
              <p className="sm:m-2 ">
                <input type="radio" className="hidden overflow-hidden peer" name="color" id="White" />
                <label onClick={()=>dispatch({type:"COLOR", payload:{color:"White"}})} className="sm:p-1 sm:px-3 h-20 w-20 border border cursor-pointer rounded text-center peer-checked:border-black bg-white" htmlFor="White">white</label>
              </p>
              <p className="sm:m-2">
                <input type="radio" className="hidden overflow-hidden peer" name="color" id="Black" />
                <label onClick={()=>dispatch({type:"COLOR", payload:{color:"Black"}})} className="sm:p-1 sm:px-3 border-2 cursor-pointer rounded text-center peer-checked:border-white bg-black text-white" htmlFor="Black">black</label>
              </p>
              <p className="sm:m-2">
                <input type="radio" className="hidden overflow-hidden peer" name="color" id="Gray" />
                <label onClick={()=>dispatch({type:"COLOR", payload:{color:"Gray"}})} className="sm:p-1 sm:px-3 border-2 cursor-pointer rounded text-center peer-checked:border-white bg-gray-500 text-white" htmlFor="Gray">gray</label>
              </p>
              <p className="sm:m-2">
                <input type="radio" className="hidden overflow-hidden peer" name="color" id="Blue" />
                <label onClick={()=>dispatch({type:"COLOR", payload:{color:"Blue"}})} className="sm:p-1 sm:px-3 border cursor-pointer rounded text-center peer-checked:border-black bg-blue-500 text-white" htmlFor="Blue">blue</label>
              </p>
              <p className="sm:m-2">
                <input type="radio" className="hidden overflow-hidden peer" name="color" id="Cream" />
                <label onClick={()=>dispatch({type:"COLOR", payload:{color:"Cream"}})} className="sm:p-1 sm:px-3 border cursor-pointer rounded text-center peer-checked:border-black bg-yellow-200 text-black" htmlFor="Cream">cream</label>
              </p>
              <p className="sm:m-2">
                <input type="radio" className="hidden overflow-hidden peer" name="color" id="Red" />
                <label onClick={()=>dispatch({type:"COLOR", payload:{color:"Red"}})} className="sm:p-1 sm:px-3 border cursor-pointer rounded text-center peer-checked:border-black bg-red-600 text-white" htmlFor="Red">red</label>
              </p>
              <p className="sm:m-2">
                <input type="radio" className="hidden overflow-hidden peer" name="color" id="Orange" />
                <label onClick={()=>dispatch({type:"COLOR", payload:{color:"Orange"}})} className="sm:p-1 sm:px-3 border cursor-pointer rounded text-center peer-checked:border-black bg-orange-500 text-white" htmlFor="Orange">orange</label>
              </p>
              <p className="sm:m-2">
                <input type="radio" className="hidden overflow-hidden peer" name="color" id="Brown" />
                <label onClick={()=>dispatch({type:"COLOR", payload:{color:"Brown"}})} className="sm:p-1 sm:px-3 border cursor-pointer rounded text-center peer-checked:border-black bg-orange-900 text-white" htmlFor="Brown">brown</label>
              </p>
              <p className="sm:m-2">
                <input type="radio" className="hidden overflow-hidden peer" name="color" id="Green" />
                <label onClick={()=>dispatch({type:"COLOR", payload:{color:"Green"}})} className="sm:p-1 sm:px-3 border cursor-pointer rounded text-center peer-checked:border-black bg-green-500 text-white" htmlFor="Green">green</label>
              </p>
            </div>
          </div>

          <div className="mt-6">
            <input onChange={()=>dispatch({type:"SALE", payload:{sale: !state.sale}})} checked= {state.sale || false} type="checkbox" id="sales" name="sales"/>
            <label htmlFor="sales"> On Sale</label>
          </div>
          <button className="mt-8 bg-gray-500 text-white p-1 rounded" onClick={()=>dispatch({type:"CLEAR"})}>Clear Filter</button>
        </div>
      </div>
      <button onClick={handleClick} className="absolute top-20 -right-5 bg-gray-500 h-12 ">{open?<i className="bi bi-chevron-left text-white"></i>: <i className="bi bi-chevron-right text-white"></i>}</button>
      {!open && <h1 className="absolute top-36 h-auto [writing-mode:vertical-rl]">Show Filter</h1>}
    </div>

  ) 
}
