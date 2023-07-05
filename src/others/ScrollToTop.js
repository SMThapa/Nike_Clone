//this section will restart the filter when there is change in path
import { useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import { useFilter } from '../context';

export const ScrollToTop = () => {
    const {pathname} = useLocation()
    const {dispatch} = useFilter();

    useEffect(()=>{
      window.scrollTo(0, 0)
      function clearFilter(){
        dispatch({
          type:"CLEAR"
        })
      }
      clearFilter()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[pathname])

  return null
}
