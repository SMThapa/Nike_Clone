import { Link } from "react-router-dom"

export const Card = ({ data}) => {

  return (
    <div className="w-8/12 max-sm:w-40 sm:w-64 lg:w-80 h-auto sm:m-5 m-1 max-sm:py-2 bg-white flex-shrink-0 relative">
      <Link to={`/product/${data.id}`}>
        {data.sale && <span className={`text-orange-500 text-sm absolute p-3`}>sale: {data.sale} off</span>}
        <img className="sm:mx-auto w-full h-auto aspect-square object-center object-cover" src={data.thumbnail[0]}alt="" />
        <div className="pl-2 sm:py-5 py-2 flex flex-col item-center justify-center">
            <h5 className="sm:text-xl tracking-tight text-gray-900 text-black">{data.name}</h5> 
            <h5 className="text-gray-600 max-sm:text-xs">{data.gender}'s shoe</h5> 
            <h5 className="sm:text-1xl text-sm tracking-tight text-gray-900 text-black">Rs. {data.price}/-</h5>
        </div>
      </Link>
    </div>

  )
}
