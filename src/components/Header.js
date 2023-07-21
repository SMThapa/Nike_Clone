import { useEffect, useRef, useState } from "react"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { useCart } from "../context/CartContext"
import logo from '../util/NIKE-LOGO.png'
import logo2 from '../util/JORDAN-LOGO.png'
import { useWishList } from "../context/WishContext"

export const Header = () => {

  const {cartList, clearCart} = useCart()
  const {clearWishList} = useWishList()
  const [isIt, setIt] = useState(true)

  //this allows to toggles user menu
  const [hide, setHide] = useState(true)

  window.addEventListener('scroll', ()=>{
    window.pageYOffset >= 20 ? setIt(false) : setIt(true)
    window.pageYOffset >= 20 ? setHide(true) : setHide(hide)
  })
  const [IsOpen, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!IsOpen);
  }
  
  const closeMenu = () =>{
    setOpen(false)
  }

  const handleClose = () =>{
    setOpen(false);
  }

  //this paragraph handles search input
  const navigate = useNavigate()
  const {pathname} = useLocation()
  const searchRef = useRef()
  const handleSearch = (event) =>{
    event.preventDefault()
    navigate(`/products/all?q=${searchRef.current.value}`)
    searchRef.current.value = null
  }
  useEffect(()=>{
    searchRef.current.value = null
  },[pathname])

  //toggels user menu
  const hanldeUserMenu = () => {
    setHide(!hide)
  }

  const handleMyOrder = () =>{
    navigate('/dashboard')
    setOpen(false)
  }

  //handles logout
  const handleLogout = () => {
    sessionStorage.removeItem('email')
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('nkid')
    navigate('/')
    clearCart()
    clearWishList()
    setOpen(false)
  }


  const token = sessionStorage.getItem("token");  
  //to show looged email account
  const email = token ? sessionStorage.getItem('email').replace(/['"]+/g, '') : ''

  return (
    <div>     
      <nav className={`bg-white sm:w-full w-screen z-20 top-0 left-0 fixed`}>
        <div className={`max-md:hidden ${isIt ? ' ':'hidden'} flex flex-wrap items-center justify-between py-1 px-8`} style={{backgroundColor:'#f5f3f4'}}>
          <NavLink to='/'>
            <img className="my-1 ml-3" src={logo2} alt="" style={{height:'20px', width:'20px'}}/>
          </NavLink>
          <div className={token? 'flex items-center' : ''}>
            <NavLink to='/help' className='text-xs border-gray-900 hover:text-gray-500 border-r px-3'>Help</NavLink>
            
            {
              token ? 
                <div className="relative" onClick={hanldeUserMenu}>
                  <div className="flex items-center hover:text-gray-500 cursor-pointer">
                    <i className="bi bi-person-fill pl-2 text-xs"></i>
                    <p className='text-xs hover:text-gray-500 px-1' >{email}</p>
                  </div> 
                  <div className={`${hide? 'hidden': ''} absolute mt-1 right-0 bg-white w-2/3 z-30`}>
                    <p onClick={()=>navigate('/dashboard')} className="text-sm py-1 px-3 cursor-pointer hover:underline">My Orders</p>
                    <p onClick={handleLogout} className="text-sm py-1 px-3 cursor-pointer hover:underline">Logout</p>
                  </div>
                </div>:
                <>
                  <NavLink to='/register' className='text-xs border-gray-900 hover:text-gray-500 border-r px-3'>Join Us</NavLink>
                  <NavLink to='/login' className='text-xs hover:text-gray-500 px-3'>Login in</NavLink>
                </>
            }

          </div>
        </div>
        <div className={`items-center flex flex-wrap justify-between mx-auto md:grid md:grid-cols-3 py-2 px-4 sm:px-8 ${isIt ? ' ':'shadow-lg'} z-20 bg-white top-0 w-full`}>
          <div className="flex items-center">
            <NavLink to='/'>
              <img src={logo} onClick={closeMenu} alt="" className="max-sm:h-9 max-sm:w-11 sm:ml-3"/>
            </NavLink>
          </div>
          <div className="flex md:justify-end items-center md:order-2 z-0">
            <div className="flex items-center justify-center">

            <form onSubmit={handleSearch} className="">
              <div className="relative lg:mx-3 float-left">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <i className="bi bi-search sm:text-base max-sm:text-sm"></i>
                </div>
                <input ref={searchRef} type="search" id="default-search" className="max-lg:w-8 max-lg:h-9 max-lg:cursor-pointer block w-48 p-2 pl-10 text-base max-lg:bg-white text-gray-900 bg-gray-100 focus:w-full 2xl:focus:w-96 focus:outline-none focus:bg-gray-200 rounded-full" placeholder="Search" autoComplete="off" required/>
              </div>
            </form> 

              <NavLink to='/wishlist' className="bi bi-heart px-3 max-md:hidden max-lg:text-base"></NavLink>
              <div className="relative px-3">
                <NavLink to='/cart' onClick={closeMenu} className="bi bi-bag max-lg:text-base relative"></NavLink>
                <span className={`absolute text-sm text-red-600 right-0 top-0 ${cartList.length === 0 ? 'hidden':''}`}>{cartList.length}</span>
              </div>
              <button data-collapse-toggle="navbar-sticky" type="button" onClick={handleOpen} className="inline-flex items-center pl-3 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none" aria-controls="navbar-sticky" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-7 h-7" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
              </button>
            </div>
          </div>
          <div className={`max-md:flex flex-col items-center justify-between sm:hidden-none flex md:w-auto md:order-1 w-full z-10" id="navbar-sticky ${IsOpen ?'max-md:h-screen':''}`}>
            <ul className={`md:flex p-4 md:p-0 w-full max-md:h-full ${IsOpen ? '': 'max-md:hidden'} justify-center font-medium border border-gray-100 rounded-lg bg-gray-100 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white max-sm:shadow-lg z-10 max-md:relative`}>
              <li>
                <NavLink to='/products/men' onClick={handleClose} className="block py-2 pl-3 pr-4 text-black md:p-0">Men</NavLink>
              </li>
              <li>
                <NavLink to='/products/women' onClick={handleClose} className="block py-2 pl-3 pr-4 text-black md:p-0 ">Women</NavLink>
              </li>
              <li>
                <NavLink to='/products/kids' onClick={handleClose} className="block py-2 pl-3 pr-4 text-black md:p-0">Kids</NavLink>
              </li>
              <li>
                <NavLink to='/products/sales' onClick={handleClose} className="block py-2 pl-3 pr-4 text-black md:p-0">Sales</NavLink>
              </li>
              <div className="md:hidden absolute bottom-24 pr-5 w-full">
                {
                  token ? 
                  <div className="">
                    <NavLink to='/wishlist' onClick={handleClose} className="block py-2 pl-3 pr-4 text-black md:p-0">Wishlist</NavLink>
                    <p onClick={handleMyOrder} className="py-2 pl-3 pr-4 cursor-pointer hover:underline">My Orders</p>
                    <p onClick={handleLogout} className="py-2 pl-3 pr-4 pb-4 cursor-pointer hover:underline">Logout</p>
                    <NavLink to='/help' onClick={()=>closeMenu(true)} className='py-2 pl-3 pb-4'>Help</NavLink>
                    <div className="flex items-center py-2 pr-4 border-t border-gray-300">
                      <i className="bi bi-person-fill pl-2 text-xs"></i>
                      <p className='px-1 py-4' >{email}</p>
                    </div>
                  </div> :
                  <div className="flex flex-col ">
                    <NavLink to='/help' onClick={()=>closeMenu(true)} className='py-2'>Help</NavLink>
                    <NavLink to='/login' onClick={()=>closeMenu(true)} className='py-2'>Login in</NavLink>
                    <NavLink to='/register' onClick={()=>closeMenu(true)} className='py-2'>Join Us</NavLink>
                  </div>
                }
              </div> 
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
