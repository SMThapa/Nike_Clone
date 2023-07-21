import { NavLink } from 'react-router-dom'
import logo from '../util/NIKE.png'

export const Footer = () => {
  return (
    <div>
    <footer className=" shadow bg-black">
        <div className="w-full mx-auto p-4 md:px-12 lg:px-20">
            <div className="flex sm: flex-col">
                <div className="flex items-center justify-between mb-4 sm:mb-4">
                  <a href="https://flowbite.com/" className="flex items-center">
                      <img src={logo} alt="" className="h-12 w-24 max-sm:h-8 max-sm:w-14 max-sm:m-1 m-3 " />
                      {/* <span className="ff max-sm:hidden self-center text-2xl font-semibold whitespace-nowrap dark:text-white">NIKE INDiA</span> */}
                  </a>
                  <div className="social-media">
                    <a href='/'>
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href='/'>
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href='/'>
                      <i className="bi bi-youtube"></i>
                    </a>
                    <a href='/'>
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                </div>

                <div className="footerItems flex">
                  <ul className="flex flex-wrap flex-col mb-3 text-sm font-medium sm:mb-0 sm:pr-20">
                      <li className="m-2 md:m-3">
                          <a href=' ' className="ff font-bold mr-4 text-white">BECOME A MEMBER</a>
                      </li>
                      <li className="m-2 md:m-3">
                          <a href=' ' className="ff font-bold mr-4 text-white">Send us Feedback</a>
                      </li>
                      <li className="m-2 md:m-3">
                          <a href=' ' className="ff font-bold mr-4 text-white">STUDENT DISCOUNT</a>
                      </li>
                  </ul>

                  <ul className="flex flex-wrap flex-col mb-3 text-sm font-medium text-white sm:mb-0 sm:pr-20">
                      <li className="m-2 md:m-3">
                          <span className="ff font-bold mr-4 text-white">GET HELP</span>
                      </li>
                      <li className="ml-2 md:ml-3 md:mb-3">
                          <NavLink to="/dashboard" className="text-xs font-normal hover:text-white">Order Status</NavLink>
                      </li>
                      <li className="ml-2 md:ml-3 md:mb-3">
                          <a href=' ' className="text-xs font-normal hover:text-white">Delivery</a>
                      </li>
                      <li className="ml-2 md:ml-3 md:mb-3">
                          <a href=' ' className="text-xs font-normal hover:text-white">Return</a>
                      </li>
                      <li className="ml-2 md:ml-3 md:mb-3">
                          <a href=' ' className="text-xs font-normal hover:text-white">Payment Options</a>
                      </li>
                  </ul>
                  
                  <ul className="flex flex-wrap flex-col mb-3 text-sm font-medium text-white sm:mb-0">
                      <li className="m-2 md:m-3">
                          <span to=" " className="ff font-bold mr-4 text-white">ABOUT NIKE</span>
                      </li>
                      <li className="ml-2 md:ml-3 md:mb-3">
                          <a href=' ' className="text-xs font-normal hover:text-white">News</a>
                      </li>
                      <li className="ml-2 md:ml-3 md:mb-3">
                          <a href=' ' className="text-xs font-normal hover:text-white">Careers</a>
                      </li>
                      <li className="ml-2 md:ml-3 md:mb-3">
                          <a href=' ' className="text-xs font-normal hover:text-white">Inventors</a>
                      </li>
                      <li className="ml-2 md:ml-3 md:mb-3">
                          <a href=' ' className="text-xs font-normal hover:text-white">Sustainability</a>
                      </li>
                  </ul>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-xs sm:text-center" style={{color:'gray'}}>© 2023 <a href="https://nike.in/" className="hover:underline" style={{color:'gray'}}>Nike India, Inc</a>. All Rights Reserved.</span>
        </div>
    </footer>
    </div>
  )
}
