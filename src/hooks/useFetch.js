import { useEffect, useState } from "react";

export const useFetch = ({id}) => {

    const [fetchData, setFetchData] = useState([]);
    const [images, setImages] = useState([])
  
    useEffect(()=>{
      async function fetchProducts(){
        const res = await fetch(`http://localhost:8000/products/${id}`);
        const json = await res.json();
        setFetchData(json)
        
        const img = json.thumbnail
        setImages(img)
      }
      fetchProducts()
    },[id])

    
  return {fetchData, images}
}
