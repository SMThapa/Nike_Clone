import { Link } from 'react-router-dom';
import {VideoSection, TheLatest, Trending, Featured, DontMiss, Essentials} from './components/index'
import { useTitle } from '../../hooks/useTitle';

export const Home = () => {

  useTitle("Nike. Just Do It. IN")
  return (
    <div>
      <div className='max-sm:mt-12 max-md:mt-16 md:mt-24 py-2 text-center border border-x-0 border-gray-200' style={{backgroundColor:'#f5f3f4'}}>
        <p>Hello Nike App</p>
        <p className='text-xs text-gray-600'>Download app to access everything Nike. <Link to='/' className="underline">Download Now!</Link></p>
      </div>
      <div className='theContainer'>
        <VideoSection/>
        <TheLatest/>
        <Trending/>
        <Featured/>
        <DontMiss/>
        <Essentials/>
      </div>
    </div>
  )
}
