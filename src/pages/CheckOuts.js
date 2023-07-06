export const CheckOuts = () => {
  return (
    <div className="theContainer sm:mt-40 mt-20">
        <div className="sm:px-40 flex justify-between">
            <div className="sm:w-2/3">
                <h1>Address Confirmation</h1>
                <form className="flex flex-col">
                    <h1>Enter your Name and Address</h1>
                    <input type="text" placeholder="First Name" required/>
                    <input type="text" placeholder="Last Name" required/>                        
                    <input type="text" placeholder="Address" required/>                        
                    <div>
                        <input className="arrowButtonNone" type="number" placeholder="Pin Code" required/>
                        <input type="text" placeholder="Locality" required/>
                    </div>    
                    <h1>Enter your Contact information</h1> 
                    <input type="number" placeholder="Phone number" required/>                        
                    <input type="email" placeholder="Email" required/>                                  
                    <button>Continue</button>
                </form>
            </div>
            <div className="sm:w-1/3">
                <h1>Order Summery</h1>
            </div>
        </div>
    </div>
  )
}
