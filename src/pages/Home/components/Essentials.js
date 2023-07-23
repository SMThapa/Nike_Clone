import { Link } from "react-router-dom"

export const Essentials = () => {
  return (
    <div className='w-full text-center sm:mb-24 mb-8'>
        <h1 className='float-left sm:mb-6 mb-2 sm:text-2xl text-md'>The Essentials</h1>  
        <div className='w-full flex justify-between items-center max-sm:items-center max-sm:flex-col h-5/6'>
          <div className='essentialDivHeight max-sm:p-1'>
              <div className='h-full object-center flex items-end' >
                <Link to='/products/men' className="h-full">
                  <img src="/assets/pictures/posters/men.webp" className="h-full w-auto object-cover sm:pr-3" alt="" />
                </Link>
                <Link to="products/men" className='absolute px-5 py-1 m-5 h-8 rounded-2xl bg-black bg-opacity-60 hover:bg-opacity-80 text-sm text-white flex items-center'>Men's</Link>
              </div>
          </div>
          <div className='essentialDivHeight max-sm:p-1'>
              <div className='h-full object-center flex items-end ' >
                <Link to='/products/women' className="h-full">
                  <img src="/assets/pictures/posters/women.webp" className="h-full w-auto object-cover sm:px-2" alt="" />
                </Link>
                <Link to="/products/women" className='absolute px-5 py-1 sm:ml-8 ml-5 mb-5 h-8 rounded-2xl bg-black bg-opacity-60 hover:bg-opacity-80 text-sm text-white flex items-center'>Women's</Link>
              </div>
          </div>
          <div className='essentialDivHeight max-sm:p-1'>
              <div className='object-center flex items-end h-full' >
                <Link to="/products/kids" className="h-full">
                  <img src="/assets/pictures/posters/kid.webp" className="h-full w-auto object-cover sm:pl-3" alt="" />
                </Link>
                <Link to='/products/kids' className='absolute px-5 py-1 sm:ml-8 ml-5 mb-5 h-8 rounded-2xl bg-black bg-opacity-60 hover:bg-opacity-80 text-sm text-white flex items-center'>Kid's</Link>
              </div>
          </div>
        </div>
    </div>
  ) 
}
