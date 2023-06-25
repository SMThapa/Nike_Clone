import { useEffect, useState } from "react";

export const useFetch = () => {

    const [fetchData, setFetchData] = useState([]);
  
    useEffect(()=>{
      async function fetchProducts(){
        const res = await fetch("http://localhost:8000/products");
        const json = await res.json();
        setFetchData(json)
      }
      fetchProducts()
    },[])

    
  return {fetchData}
}
