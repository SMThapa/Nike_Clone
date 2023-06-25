import { Card } from '../../components/Card';
import { useFetch } from '../../hooks/useFetch';

export const Trending = () => {
  const {fetchData} = useFetch()
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
