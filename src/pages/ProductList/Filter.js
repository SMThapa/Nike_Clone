import {useState } from "react"
import { useFilter } from "../../context"

export const Filter = () => {

  const {state, dispatch} = useFilter();

  const [open, setOpen] = useState(true)
  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <div className={`h-screen ${open?'w-80': ''} mt-24 sticky top-0 max-md:hidden`} >
      <div className={`h-full flex justify-center items-center bg-gray-100 sticky top-0 ${open? '' : 'hidden'}`}>
        <div className="w-full h-full px-5 py-3 z-20">
          <div className="mt-14">            
            <h1 className="my-2">PRICE</h1>
            <div className="price">
              <div className="ml-5">
                <input type="radio" name="price" id="price"/>
                <label htmlFor="price"> Rs.10,000</label>
              </div>
              <div className="ml-5">
                <input type="radio" name="price" id="price"/>
                <label htmlFor="price"> Rs.10,000</label>
              </div>
              <div className="ml-5">
                <input type="radio" name="price" id="price"/>
                <label htmlFor="price"> Rs.10,000</label>
              </div>
            </div>
          </div>
          <div className="mt-14">            
            <h1 className="my-2">Gender</h1>
            <div className="price">
              <div className="ml-5">
                <input type="radio" name="gender" id="men"/>
                <label htmlFor="men"> Men</label>
              </div>
              <div className="ml-5">
                <input type="radio" name="gender" id="women"/>
                <label htmlFor="women"> Women</label>
              </div>
              <div className="ml-5">
                <input type="radio" name="gender" id="kid"/>
                <label htmlFor="kid"> Kids</label>
              </div>
            </div>
          </div>
          <div className="mt-14">
            <input type="radio" id="sales" name="sales"/>
            <label htmlFor="sales"> On Sale</label>
          </div>
        </div>
      </div>
      <button onClick={handleClick} className="absolute top-20 -right-5 bg-gray-500 h-12 ">{open?<i className="bi bi-chevron-left text-white"></i>: <i className="bi bi-chevron-right text-white"></i>}</button>
    </div>

  ) 
}
