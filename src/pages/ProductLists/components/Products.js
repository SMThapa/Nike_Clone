import { useEffect } from 'react';
import {Card} from '../../../components/Card'
import { useTitle } from '../../../hooks/useTitle';
import {useFilter} from '../../../context'
import { useLocation } from 'react-router-dom';
import { getAllProducts } from '../../../Services/productService';


export const Products = ({category}) => {

  useTitle(`Nike - ${category}`)

  const {productList, initialProductList} = useFilter()


  //this returns the raw searched parameters
  const search = useLocation().search
  //this returns the filtered searched paremeter, in this care "q"
  const searchTerm = new URLSearchParams(search).get("q");

  useEffect(()=>{
    async function fetchData(){
      const data = await getAllProducts(searchTerm)
      initialProductList(data)
    }
    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[searchTerm])

  const bb = category === "all" ? productList : productList.filter( filt => filt.gender === category );
  
  return (
    <div className='centerContainer flex'>
      <div className=''>
        
        <h1 className={`${category === 'all'? '': 'hidden'} sm:ml-20 ml-5 sm:mt-5 max-sm:mb-3 sm:text-2xl`}>Your Search for "{searchTerm}"</h1>
        {bb.length !==0 && <h1 className='sm:ml-20 ml-5 sm:mt-5 max-sm:mb-3 sm:text-2xl'>Items({bb.length})</h1>}
        {bb.length ===0 && <h1 className='sm:ml-20 ml-5 sm:mt-5 max-sm:mb-3 sm:text-2xl'>No item to be shown.</h1>}
        <div className='flex flex-wrap justify-center'>
          {
              bb.map(itm => (
                <Card key={itm.id} data={itm}/>
              ))
          }
        </div>
      </div>
    </div>
  )
}
