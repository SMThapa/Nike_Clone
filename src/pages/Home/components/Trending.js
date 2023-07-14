import { Card } from '../../../components/Card';
import { useEffect, useState } from 'react';
import { getProduct } from '../../../Services/productService';

export const Trending = () => {

  const [fetchData, setFetchData] = useState([])
  useEffect(()=>{
    async function getData(){
      try{
        const data = await getProduct()
        setFetchData(data)
      }catch(err){
        console.log(err)
      }
    }
    getData()
  },[])
  const bb = fetchData.filter( filt => filt.trending === true)
  
  return (
    <div className='w-full sm:mb-24 mb-8 flex flex-col'>
        <h1 className='float-left sm:mb-6 mb-2 sm:text-2xl text-md'>Trending</h1>
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
