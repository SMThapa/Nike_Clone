import { useNavigate } from "react-router-dom";


export const AddressAndContact = () => {

    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/checkout')
    }

  return (
    <div className="sm:my-40 my-20 sm:px-40 xl:px-96 flex-col items-center">
        <h1 className='sm:py-3 sm:text-3xl font-bold'>Address Confirmation</h1>
        <form onSubmit={handleSubmit} className="flex flex-col w-full">
            <h1 className='sm:py-2 sm:text-lg'>Enter your Name and Address:</h1>
            <input className='border border-gray-300 sm:p-3 sm:my-3 rounded' type="text" placeholder="First Name" required/>
            <input className='border border-gray-300 sm:p-3 sm:my-3 rounded' type="text" placeholder="Last Name" required/>                        
            <input className='border border-gray-300 sm:p-3 sm:my-3 rounded' type="text" placeholder="Address" required/>                        
            <div className='flex justify-between'>
                <input className='border border-gray-300 sm:p-3 mr-2 sm:my-3 w-1/2'type="number" placeholder="Pin Code" required/>
                <input className='border border-gray-300 sm:p-3 sm:my-3 rounded w-1/2' type="text" placeholder="Locality" required/>
            </div>    
            <h1 className='sm:py-2 sm:text-lg'>Enter your Contact Information:</h1> 
            <input className='border border-gray-300 sm:p-3 sm:my-3 rounded' type="number" placeholder="Phone number" required/>                        
            <input className='border border-gray-300 sm:p-3 sm:my-3 rounded' type="email" placeholder="Email" required/>                                  
            <div className='w-full'>
                <button className='bg-blue-600 text-white p-4 min-w-1/3 float-right rounded sm:my-2'>Save and Continue</button>
            </div>
        </form>
    </div>
  )
}
