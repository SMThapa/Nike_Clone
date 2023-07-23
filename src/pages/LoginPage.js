import { NavLink, useNavigate} from "react-router-dom"
import logo from '../util/NIKE-LOGO.png'
import { useRef } from "react"
import {authLogin} from "../Services/authService"
import {toast} from "react-toastify";
import { useTitle } from "../hooks/useTitle";

export const LoginPage = () => {

  useTitle("Login - NIKE")

  const email = useRef()
  const password = useRef()
  const navigate = useNavigate()

  async function handleSubmit(event){
    event.preventDefault()
    const userDetails = {
      email: email.current.value,
      password: password.current.value
    }

    try{
      const data = await authLogin(userDetails) 
      const loginSession = () => {
        sessionStorage.setItem('token', JSON.stringify(data.accessToken))
        sessionStorage.setItem('nkid', JSON.stringify(data.user.id))
        sessionStorage.setItem('email', JSON.stringify(data.user.email))
        navigate('/')
        toast.success("You're logged in.")
      }
      data.accessToken && loginSession();
    }catch(err){
      toast.error("Incorrect email or password.")
    }
    email.current.value = ' '
    password.current.value = null
  }

  return (
    <>
      <div className="centerContainer">  
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center items-center flex-col text-center mb-8">
            <img src={logo} alt="" className="h-8 w-11 mb-6"/>
            <p className="ff text-2xl font-bold tracking-tighter leading-none">YOUR ACCOUNT FOR <br/>EVERYTHING NIKE</p>
          </div>
          <div className="mb-4">
            {/* <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white">Your email</label> */}
            <input ref={email} type="email" id="email" className="bg-gray-50 border border-gray-200 shadow-sm text-gray-500 text-sm block w-full p-2.5 focus:outline-none rounded-sm" placeholder="Email address" autoComplete="off" required/>
          </div>
          <div className="mb-6">
            {/* <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-white">Your password</label> */}
            <input ref={password} type="password" id="password" className="bg-gray-50 border border-gray-200 shadow-sm text-gray-500 text-sm block w-full p-2.5 focus:outline-none rounded-sm" placeholder="password" required/>
          </div>
          <div className="flex items-start mb-6 items-center">
            <div className="flex items-center h-5">
              <input id="terms" type="checkbox" value="" className="w-3 h-3 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"/>
            </div>
            <label htmlFor="terms" className="ml-2 text-xs font-medium text-gray-900 dark:text-gray-500">Keep me signed in <a href=" " className="text-blue-600 hover:underline dark:text-blue-500 ml-10">Forgotton your password?</a></label>
          </div>
          <p className="text-xs mb-6 text-center text text-gray-500">By logging in, you agree to Nike's <a href=" " className="text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a> <br/> and <a href=" " className="text-blue-600 hover:underline dark:text-blue-500">Terms of use</a></p>
          <button type="submit" className="ff mb-6 w-full text-white bg-blue-700 focus:outline-none font-medium text-sm px-5 py-2.5 text-center rounded">SiGN IN</button>
          <p className="text-xs mb-6 text-center text text-gray-500">Not a Member? <NavLink to="/register" className="text-blue-700 hover:underline">Join Us</NavLink></p>
        </form>
      </div>
    </>
  )
}
