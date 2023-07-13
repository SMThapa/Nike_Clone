import { useEffect, useState } from "react";
import { Card } from "../../../components/Card";
import { getProduct } from "../../../Services/productService";

export const Recommended = () => {

  const [fetchData, setFetchData] = useState([])
  useEffect(()=>{
    async function getData(){
      const data = await getProduct()
      setFetchData(data)
    }
    getData()
  },[])

  const bb = fetchData.filter( filt => filt.trending === true)
  return (
    <div className='w-full sm:mb-24 mb-8 flex flex-col sm:px-8 p-2'>
        <h1 className='float-left sm:mb-6 mb-2 sm:text-2xl sm:text-md text-lg font-bold'>You Might Also Like</h1>
        <div className='horizontal-images h-auto flex overflow-x-scroll'>
          {
              bb.map(itm => (
              <Card key={itm.id} data={itm}/>
              ))
          }
        </div>
    </div>
  )
}
