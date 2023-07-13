import { Link } from "react-router-dom";
import logo from '../util/NIKE-LOGO.png'

export const PageNotFound = () => {
  return (
    <div className="sm:my-40 sm:h-96 flex justify-center items-center">
        <div className="flex flex-col items-center">
            <img src={logo} alt="" />
            <p className="sm:mt-5">Page Not Found!!!</p>
            <p className="sm:mb-5 sm:text-sm">The page you're looking is not found.</p>
            <Link to={'/'} className="bg-blue-500 text-white rounded sm:px-5 sm:py-3">Go to Home</Link>
        </div>
    </div>
  )
}
