import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useEffect, useState } from "react";
import { findUser } from "../../Services/authService";
import { useTitle } from "../../hooks/useTitle";


export const AddressAndContact = () => {

  useTitle("Add your information")

  //to fetch data for user address if available
  const [user, setUser] = useState({})
  const id = JSON.parse(sessionStorage.getItem('nkid'))
  const token = JSON.parse(sessionStorage.getItem('token'))
  useEffect(()=>{
    async function fetchOrder(){
      const data = await findUser(id, token)
      data.length === 0 ? setUser({}) : setUser(data[0].userInfo)
    } 
    fetchOrder()
  },[token, id])


  const {createUserInfo} = useCart()
  const navigate = useNavigate()
  const handleSubmit = (event) => {
      event.preventDefault();
      navigate('/checkout')

      const theObject = {
          name: event.target.name.value,
          address: event.target.address.value,
          pincode: event.target.pincode.value,
          locality: event.target.locality.value,
          number: event.target.number.value,
          email: event.target.email.value
      }
      createUserInfo(theObject)
  }        

  return (
    <div className="sm:my-20 py-20 sm:px-40 px-5 xl:px-96 flex-col items-center min-h-screen">
        <h1 className='py-3 sm:text-3xl text-xl font-bold'>Address Confirmation</h1>
        <form onSubmit={handleSubmit} className="flex flex-col w-full">
            <h1 className='py-2 sm:text-lg'>Enter your Name and Address:</h1>
            <input className='border border-gray-300 p-3 my-3 rounded' type="text" defaultValue={user.name || ''} name="name" placeholder="Full Name" autoComplete="off" required/>                       
            <input className='border border-gray-300 p-3 my-3 rounded' type="text" defaultValue={user.address || ''} name="address" placeholder="Address" autoComplete="off" required/>                        
            <div className='flex justify-between'>
                <input className='border border-gray-300 p-3 mr-2 my-3 w-1/2'type="number" name="pincode" defaultValue={user.pincode || ''} placeholder="Pin Code" autoComplete="off" required/>
                <input className='border border-gray-300 p-3 my-3 rounded w-1/2' type="text" defaultValue={user.locality || ''} name="locality"  placeholder="Locality" autoComplete="off" required/>
            </div>    
            <h1 className='py-2 sm:text-lg'>Enter your Contact Information:</h1> 
            <input className='border border-gray-300 p-3 my-3 rounded' type="number" name="number" defaultValue={user.number || ''} placeholder="Phone number" autoComplete="off" required/>                        
            <input className='border border-gray-300 p-3 my-3 rounded' type="email" name="email" defaultValue={user.email || ''} placeholder="Email" autoComplete="off" required/>                                  
            <div className='w-full'>
                <button className='bg-blue-600 text-white sm:p-4 p-2 min-w-1/3 sm:float-right rounded my-2'>Save and Continue</button>
            </div>
        </form>
    </div>
  )
}
