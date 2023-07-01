import { useNavigate } from "react-router-dom"
import logo from '../util/NIKE-LOGO.png'

export const Register = () => {

  const navigate = useNavigate()
  async function handleSubmit(event){
    event.preventDefault()

    const password = event.target.password.value
    const repeatPassword = event.target.repeat_password.value

    const userDetails = {
      userEmail: event.target.email.value,
      password: event.target.password.value
    }

    // password === repeatPassword ? event.target.repeat_passowrd.setCustomValidity('') : event.target.repeat_passowrd.setCustomValidity('how hard it is to repeat the same passwrod.')
    
    event.target.email.value = ' '
    event.target.password.value = null
    event.target.repeat_password.value = null

    // console.log(userDetails, password, repeatPassword)
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
            <input type="email" id="email" className="bg-gray-50 border border-gray-200 shadow-sm text-gray-500 text-sm block w-full p-2.5 focus:outline-none rounded-sm" placeholder="Email address" required/>
          </div>
          <div className="mb-4">
            {/* <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-white">Your password</label> */}
            <input type="password" id="password" className="bg-gray-50 border border-gray-200 shadow-sm text-gray-500 text-sm block w-full p-2.5 focus:outline-none rounded-sm" placeholder="create password" required/>
          </div>
          <div className="mb-6">
            {/* <label for="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label> */}
            <input type="password" id="repeat_password" className="bg-gray-50 border border-gray-200 shadow-sm text-gray-500 text-sm block w-full p-2.5 focus:outline-none rounded-sm" placeholder="confirm password" required/>
          </div>
          <div className="flex items-start mb-6 items-center">
            <div className="flex items-center h-5">
              <input id="terms" type="checkbox" value="" className="w-3 h-3 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"/>
            </div>
            <label htmlFor="terms" className="ml-2 text-xs font-medium text-gray-900 dark:text-gray-500">Keep me signed in</label>
          </div>
          <p className="text-xs mb-6 text-center text text-gray-500">By logging in, you agree to Nike's <a href=" " className="text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a> <br/> and <a href=" " className="text-blue-600 hover:underline dark:text-blue-500">Terms of use</a></p>
          <button type="submit" className="ff mb-6 w-full text-white bg-blue-700 focus:outline-none font-medium text-sm px-5 py-2.5 text-center rounded">REGiSTER</button>
        </form>
      </div>
    </>
  )
}
