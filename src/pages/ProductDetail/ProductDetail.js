import { useParams } from "react-router-dom"
import { useTitle } from "../../hooks/useTitle"
import { Images, Details, Recommended } from "./components/index"
import { useEffect, useState } from "react"
import { getProduct } from "../../Services/productService"

export const ProductDetail = () => {

  const [fetchData, setFetchData] = useState([])
  const [images, setImages] = useState([])
  const [color, setColor] = useState([])
  const param = useParams()
  const id = param.id
  useTitle(`${fetchData.gender}'s ${fetchData.name}`)

  useEffect(()=>{
    async function fetchData(){
      try{
        const data = await getProduct(id)
        setFetchData(data)
        setImages(data.thumbnail)
        setColor(data.color.join('/'))
      } catch(error){
        console.log(error.message)
      }
    }
    fetchData()
  },[id]) 
  
  return (
    <div>
      <div className="sm:mx-5 lg:mx-20 xl:mx-40 sm:mt-40 mt-12 sm:pb-40 sm:flex justify-between">
        <Images fetchData={fetchData} images={images} id={id}/>
        <Details fetchData={fetchData} color={color}/>
      </div>
      <Recommended/>
    </div>
  )
}
