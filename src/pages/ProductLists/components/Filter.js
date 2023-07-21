import { useState } from "react";
import { useFilter } from "../../../context"

export const Filter = ({category}) => {

  const [price, setPrice] = useState(true);
  const handlePriceOpen = () => {
    setPrice(!price)
  }

  const [gender, setGender] = useState(true);
  const handleGenderOpen = () => {
    setGender(!gender)
  }

  const [color, setColor] = useState(true);
  const handleColorOPen = () => {
    setColor(!color)
  }

  const [sales, setSales] = useState(true);
  const handleSalesOpen = () => {
    setSales(!sales)
  }

  const {state, dispatch, setOpen} = useFilter();

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className={`h-screen sm:w-68 max-sm:w-screen pt-12 sticky sm:top-0 t-40 max-sm:fixed max-sm:z-20 bg-white`} >
      <i onClick={handleClose} className="bi bi-x-circle w-screen px-5 py-4 sm:hidden"></i>
      <div className={`h-full sm:flex justify-center items-center sticky top-0`}>
        <div className="md:w-64 lg:w-72 h-full sm:px-5 px-12 sm:py-3 z-20">
          
          <div className="sm:mt-14 sm:pb-3 border-b border-gray-400">            
            <div onClick={handlePriceOpen} className="my-2 cursor-pointer flex justify-between items-center">
              <h1>PRICE</h1>
              {price && <i className="bi bi-chevron-up"></i>}
              {!price && <i className="bi bi-chevron-down"></i>}
            </div>
            <div className={price?'pb-2' : "hidden"}>
              <div className="ml-2">
                <input onChange={()=>dispatch({type:"PRICE", payload:{price:"down"}})} type="radio" name="price" id="priceUnder" checked={state.price === "down"}/>
                <label className="cursor-pointer sm:px-1" htmlFor="priceUnder" >Under Rs.10,000</label>
              </div>
              <div className="ml-2">
                <input onChange={()=>dispatch({type:"PRICE", payload:{price:"up"}})} type="radio" name="price" id="priceAbove" checked={state.price === "up"}/>
                <label className="cursor-pointer sm:px-1" htmlFor="priceAbove">Above Rs.10,000</label>
              </div>
            </div>
          </div>

          <div className={`mt-6 sm:pb-3 border-b border-gray-400 ${category === 'all'? '':'hidden'}`} >            
            <div onClick={handleGenderOpen} className="my-2 flex justify-between items-center cursor-pointer">
              <h1>GENDER</h1>
                {gender && <i className="bi bi-chevron-up"></i>}
                {!gender && <i className="bi bi-chevron-down"></i>}
              </div>
            <div className={gender?'pb-2' : "hidden"}>
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
            <div onClick={handleColorOPen} className="my-2 flex justify-between items-center cursor-pointer">
              <h1>COLOR</h1>
              {color && <i className="bi bi-chevron-up"></i>}
              {!color && <i className="bi bi-chevron-down"></i>}
            </div>
            <div className={`${color?'pb-2' : "hidden"} flex flex-wrap`}>
              <p className="m-2">
                <input type="radio" className="hidden overflow-hidden peer" name="color" id="all" />
                <label htmlFor="all" onClick={()=>dispatch({type:"COLOR", payload:{color:"all"}})} className="p-1 px-3 border cursor-pointer rounded text-center peer-checked:border-black">all</label>
              </p>
              <p className="m-2 ">
                <input type="radio" className="hidden overflow-hidden peer" name="color" id="White" />
                <label onClick={()=>dispatch({type:"COLOR", payload:{color:"White"}})} className="p-1 px-3 h-20 w-20 border border cursor-pointer rounded text-center peer-checked:border-black bg-white" htmlFor="White">white</label>
              </p>
              <p className="m-2">
                <input type="radio" className="hidden overflow-hidden peer" name="color" id="Black" />
                <label onClick={()=>dispatch({type:"COLOR", payload:{color:"Black"}})} className="p-1 px-3 border-2 cursor-pointer rounded text-center peer-checked:border-white bg-black text-white" htmlFor="Black">black</label>
              </p>
              <p className="m-2">
                <input type="radio" className="hidden overflow-hidden peer" name="color" id="Gray" />
                <label onClick={()=>dispatch({type:"COLOR", payload:{color:"Gray"}})} className="p-1 px-3 border-2 cursor-pointer rounded text-center peer-checked:border-white bg-gray-500 text-white" htmlFor="Gray">gray</label>
              </p>
              <p className="m-2">
                <input type="radio" className="hidden overflow-hidden peer" name="color" id="Blue" />
                <label onClick={()=>dispatch({type:"COLOR", payload:{color:"Blue"}})} className="p-1 px-3 border cursor-pointer rounded text-center peer-checked:border-black bg-blue-500 text-white" htmlFor="Blue">blue</label>
              </p>
              <p className="m-2">
                <input type="radio" className="hidden overflow-hidden peer" name="color" id="Cream" />
                <label onClick={()=>dispatch({type:"COLOR", payload:{color:"Cream"}})} className="p-1 px-3 border cursor-pointer rounded text-center peer-checked:border-black bg-yellow-200 text-black" htmlFor="Cream">cream</label>
              </p>
              <p className="m-2">
                <input type="radio" className="hidden overflow-hidden peer" name="color" id="Red" />
                <label onClick={()=>dispatch({type:"COLOR", payload:{color:"Red"}})} className="p-1 px-3 border cursor-pointer rounded text-center peer-checked:border-black bg-red-600 text-white" htmlFor="Red">red</label>
              </p>
              <p className="m-2">
                <input type="radio" className="hidden overflow-hidden peer" name="color" id="Orange" />
                <label onClick={()=>dispatch({type:"COLOR", payload:{color:"Orange"}})} className="p-1 px-3 border cursor-pointer rounded text-center peer-checked:border-black bg-orange-500 text-white" htmlFor="Orange">orange</label>
              </p>
              <p className="m-2">
                <input type="radio" className="hidden overflow-hidden peer" name="color" id="Brown" />
                <label onClick={()=>dispatch({type:"COLOR", payload:{color:"Brown"}})} className="p-1 px-3 border cursor-pointer rounded text-center peer-checked:border-black bg-orange-900 text-white" htmlFor="Brown">brown</label>
              </p>
              <p className="m-2">
                <input type="radio" className="hidden overflow-hidden peer" name="color" id="Green" />
                <label onClick={()=>dispatch({type:"COLOR", payload:{color:"Green"}})} className="p-1 px-3 border cursor-pointer rounded text-center peer-checked:border-black bg-green-500 text-white" htmlFor="Green">green</label>
              </p>
            </div>
          </div>

          <div className="mt-6 sm:pb-3 border-gray-400">
            <div onClick={handleSalesOpen} className="my-2 flex justify-between items-center cursor-pointer">
              <h1>SALEs</h1>
              {sales && <i className="bi bi-chevron-up"></i>}
              {!sales && <i className="bi bi-chevron-down"></i>}
            </div>
            <div className={`${sales?'' : "hidden"} ml-2`}>
              <input onChange={()=>dispatch({type:"SALE", payload:{sale: !state.sale}})} checked= {state.sale || false} type="checkbox" id="sales" name="sales"/>
              <label htmlFor="sales"> On Sale</label>
            </div>
          </div>
          <div className="flex justify-between">
            <button onClick={handleClose} className="md:hidden my-3 mt-8 bg-blue-500 text-white p-1 rounded w-1/3">Filter</button>
            <button className="my-3 max-sm:mt-8 bg-gray-500 text-white p-1 rounded max-sm:w-1/3" onClick={()=>dispatch({type:"CLEAR"})}>Clear Filter</button>
          </div>
        </div>
      </div>
    </div>

  ) 
}
