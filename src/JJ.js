import { useEffect, useState } from "react"


export const JJ = () => {
    const [data, setdata] = useState()
    useEffect(()=>{ 
        async function getData(){
            const res = await fetch("http://localhost:8000/products");
            const json = await res.json();
            setdata(json)
        }
        getData()
    },[ ])
    console.log(data)
  return (
    <div>jj</div>
  )
}
