import { Link } from "react-router-dom"

export const Card = ({ data}) => {

  return (
    <div className="w-8/12 sm:w-80 lg:w-96 h-auto sm:p-5 bg-white flex-shrink-0 relative">
      <Link to={`/product/${data.id}`}>
        {data.sale && <span className={`text-orange-500 text-sm absolute p-3`}>sale: {data.sale} off</span>}
        <img className=" sm:mx-auto w-full h-auto aspect-square object-center object-cover" src={data.thumbnail[0]}alt="" />
        <div className="py-5 flex flex-col item-center justify-center">
            <h5 className="text-blue-700">{data.gender}'s shoe</h5>
            <h5 className="mb-1 text-xl tracking-tight text-gray-900 text-black  ">{data.name}</h5>  
            <h5 className="mb-1 text-1xl tracking-tight text-gray-900 text-black  ">Rs. {data.price}/-</h5>
        </div>
      </Link>
    </div>

  )
}
