import { Link } from "react-router-dom"

export const VideoSection = () => {
  return (
    <div className='w-full text-center sm:mb-24 mb-8 flex justify-center flex-col'>
        <video src='https://res.cloudinary.com/dvirqrzq3/video/upload/v1686746268/SHOE_IMAGES/Men/nike.mp4' autoPlay muted loop className='sm:mb-12 mb-4 z-0'></video>
        <p className='sm:text-xl text-sm sm:mb-4 mb-1'>Yesterday you said tomorrow. <span className='ff sm:text-5xl text-xl font-black tracking-tight'>JUST DO IT!</span></p>
        <div className='flex justify-center'>
        <Link to='/' className="px-5 py-3 m-3 w-fit h-9 flex items-center rounded-3xl bg-black hover:bg-gray-700" style={{color:'white'}}>Shop</Link>
        </div>
    </div>
  )
}
