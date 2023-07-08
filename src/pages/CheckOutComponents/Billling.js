import { useState } from "react"

export const Billling = () => {

  const [debitDown, setDebitDown] = useState(true)
  const [creditDown, setCreditDown] = useState(true)
  const handleDebitDropDown = () => {
    setDebitDown(!debitDown)
    setCreditDown(true)
  }
  const handleCreditDropDown = () => {
    setCreditDown(!creditDown)
    setDebitDown(true)
  }
  return (
    <div className="sm:w-2/3 sm:pr-5">
      <h1 className="sm:text-2xl sm:py-2">Billing</h1>
      <h1 className="text-gray-500 sm:pb-3">Choose your billing method.</h1>
      <div>
        <h1 className="sm:text-2xl sm:py-6 border-b border-gray-300">
          <label className="cursor-pointer " htmlFor="COD">Cash on Delivery</label>
          <input  type="checkbox" id="COD"/>
        </h1>

        <div className="border-b border-gray-300">
          <div onClick={handleDebitDropDown} className="flex justify-between items-center cursor-pointer">
            <h1 className="sm:text-2xl sm:py-6 ">Debit Card</h1>
            {debitDown && <i class="bi bi-chevron-down"></i>}
            {!debitDown && <i class="bi bi-chevron-up"></i>}
          </div>
          <div className={debitDown ? 'sm:hidden': ''}>
            <h1 className="sm:text-lg sm:pl-3">Enter Your Card Details</h1>
            <form action="" className="flex flex-col sm:w-2/3 sm:pl-3 sm:mb-8">
              <input className="sm:p-3 border border-gray-300 rounded sm:my-3" type="number" placeholder="Card Number" required/>
              <input className="sm:p-3 border border-gray-300 rounded sm:my-3" type="text" placeholder="Card holder name" />
              <div className="flex justify-between">
                <div className="flex items-center">
                  <label className="text-gray-600" htmlFor="month">Month:</label>
                  <select name="month" id="month">
                    <option value="1">01</option>
                    <option value="2">02</option>
                    <option value="3">03</option>
                    <option value="4">04</option>
                    <option value="5">05</option>
                    <option value="6">06</option>
                    <option value="7">07</option>
                    <option value="8">08</option>
                    <option value="9">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                  <label className="text-gray-600" htmlFor="year">Year:</label>
                  <select name="year" id="year">
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                  </select>
                </div>
                <input className="sm:p-3 border border-gray-300 rounded sm:my-3 w-1/3" type="password" placeholder="CVs"/>
              </div>
              <button className="bg-blue-500 text-white sm:p-2 rounded sm:w-1/3">Continue</button>
            </form>
          </div>
        </div>
        
        <div className="border-b border-gray-300">
          <div onClick={handleCreditDropDown} className="flex justify-between items-center cursor-pointer ">
            <h1 className="sm:text-2xl sm:py-6">Credit Card</h1>
            {debitDown && <i class="bi bi-chevron-down"></i>}
            {!debitDown && <i class="bi bi-chevron-up"></i>}
          </div>
          <div className={creditDown ? 'sm:hidden': ''}>
            <h1 className="sm:text-lg sm:pl-3">Enter Your Card Details</h1>
            <form action="" className="flex flex-col sm:w-2/3 sm:pl-3 sm:mb-8">
              <input className="sm:p-3 border border-gray-300 rounded sm:my-3" type="number" placeholder="Card Number" required/>
              <input className="sm:p-3 border border-gray-300 rounded sm:my-3" type="text" placeholder="Card holder name" />
              <div className="flex justify-between">
                <div className="flex items-center">
                  <label className="text-gray-600" htmlFor="month">Month:</label>
                  <select name="month" id="month">
                    <option value="1">01</option>
                    <option value="2">02</option>
                    <option value="3">03</option>
                    <option value="4">04</option>
                    <option value="5">05</option>
                    <option value="6">06</option>
                    <option value="7">07</option>
                    <option value="8">08</option>
                    <option value="9">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                  <label className="text-gray-600" htmlFor="year">Year:</label>
                  <select name="year" id="year">
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                  </select>
                </div>
                <input className="sm:p-3 border border-gray-300 rounded sm:my-3 w-1/3" type="password" placeholder="CVs"/>
              </div>
              <button className="bg-blue-500 text-white sm:p-2 rounded sm:w-1/3">Continue</button>
            </form>         
          </div>
        </div>

        <div className="w-full">
          <button className="bg-blue-500 text-white sm:p-3 rounded sm:my-8 float-right sm:w-1/3"> Pay</button>
        </div>
      </div>
    </div>
  )
}