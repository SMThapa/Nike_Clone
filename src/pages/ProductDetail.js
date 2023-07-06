import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { useTitle } from "../hooks/useTitle"
import { Images, Details, Recommended } from "./ProductDetailComponents/index"

export const ProductDetail = () => {

  const param = useParams()
  const id = param.id
  const {fetchData, images} = useFetch({id})
  useTitle(`${fetchData.gender}'s ${fetchData.name}`)

  return (
    <div>
      <div className="sm:mx-5 lg:mx-20 xl:mx-40 sm:mt-40 mt-12 sm:pb-40 sm:flex justify-between">
        <Images fetchData={fetchData} images={images} id={id}/>
        <Details fetchData={fetchData}/>
      </div>
      <Recommended/>
    </div>
  )
}
