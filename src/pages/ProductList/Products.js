import { useEffect } from 'react';
import {Card} from '../../components/Card'
import { useTitle } from '../../hooks/useTitle';
import {useFilter} from '../../context'
import { useLocation } from 'react-router-dom';


export const Products = ({category}) => {

  useTitle(`Nike - ${category}`)

  const {productList, initialProductList} = useFilter()


  //this returns the raw searched parameters
  const search = useLocation().search
  //this returns the filtered searched paremeter, in this care "q"
  const searchTerm = new URLSearchParams(search).get("q");

  useEffect(()=>{
    async function fetchData(){
      const response = await fetch(`http://localhost:8000/products?name_like=${searchTerm ? searchTerm : ''}`)
      const data = await response.json()
      initialProductList(data)
    }
    fetchData()
  },[searchTerm])

  const bb = category === "all" ? productList : productList.filter( filt => filt.gender === category );
  
  return (
    <div className='centerContainer flex'>
      <div className=''>
        <h1 className='sm:ml-20 ml-5 sm:mt-5 max-sm:mb-3 sm:text-2xl'>Items({bb.length})</h1>
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
