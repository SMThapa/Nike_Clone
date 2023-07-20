import { useEffect, useState} from 'react';
import {Card} from '../../../components/Card'
import { useTitle } from '../../../hooks/useTitle';
import {useFilter} from '../../../context'
import { useLocation} from 'react-router-dom';
import { getAllProducts } from '../../../Services/productService';
import { Filter } from './Filter';


export const Products = ({category}) => {

  useTitle(`Nike - ${category}`)

  const {productList, initialProductList} = useFilter()


  //this returns the raw searched parameters
  const search = useLocation().search
  //this returns the filtered searched paremeter, in this care "q"
  const searchTerm = new URLSearchParams(search).get("q");

  useEffect(()=>{
    async function fetchData(){
      try{
        const data = await getAllProducts(searchTerm)
        initialProductList(data)
      }catch(err){
        console.log(err.message)
      }
    }
    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[searchTerm])

  const {open, setOpen} = useFilter()
  const handleFilterButton = () => {
    setOpen(!open)
  }

  const bb = category === "all" ? productList : productList.filter( filt => filt.gender === category );

  //pagenation
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  const totalPages = Math.ceil(bb.length / postsPerPage)//calculates the number of pages to fit content

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = bb.slice(indexOfFirstPost, indexOfLastPost);

  const {pathname} = useLocation()
  useEffect(()=>{
    setCurrentPage(1)
  },[pathname])
  
  const previous = () => {
    setCurrentPage(currentPage - 1)
    window.scrollTo(0, 0)
  }
  const next = () => {
    setCurrentPage(currentPage + 1)
    window.scrollTo(0, 0)
  }
  

  return (
    <div className='flex bg-white w-screen'>
      <div className={`${open?'': "hidden"} flex`}>
        <Filter category={category}/>
      </div>
      <div className='pt-20 min-h-screen w-full sm:mt-12'>
        <div className='flex justify-between sm:items-center w-full'>
          <div>
            <h1 className='sm:ml-20 ml-5 sm:mt-5 max-sm:mb-1 sm:text-2xl'>{category}</h1>
            <h1 className={`${category === 'all'? '': 'hidden'} sm:ml-20 ml-5 sm:mt-5 max-sm:mb-3 sm:text-2xl`}>Result for "{searchTerm}"</h1>
            {currentPosts.length !==0 && <h1 className='sm:ml-20 ml-5 sm:mt-1 max-sm:mb-3 sm:text-xl text-gray-500'>({bb.length}) Items</h1>}
          </div>
          <div>
            <h1 onClick={handleFilterButton} className='sm:mr-20 mr-5 flex sm:text-lg cursor-pointer'>{open? "Hide Filter": "Show Filter"} <i className="bi bi-funnel mx-3"></i></h1>
          </div>
        </div>
        {currentPosts.length ===0 && <h1 className='sm:ml-20 ml-5 sm:mt-12 max-sm:mb-3 sm:text-xl'>No item to be shown.</h1>}
        <div className='flex flex-wrap justify-center justify-around'>
          {
              currentPosts.map(itm => (
                <Card key={itm.id} data={itm}/>
              ))
          }
        </div>
        <div className='sm:px-12 sm:py-8 w-full flex justify-between'>
          {
            currentPage !== 1 ? 
            <button className='px-5 py-3 sm:text-xl' onClick={previous}>Previous</button> : 
            <button className='text-gray-300 cursor-default px-5 py-3 sm:text-xl'>Previous</button>
          }
          {
            currentPage !== totalPages ?
            <button className='px-5 py-3 sm:text-xl' onClick={next}>Next</button> :
            <button className='text-gray-300 cursor-default px-5 py-3 sm:text-xl'>Next</button>
          }
        </div>
      </div>
    </div>
  )
}
