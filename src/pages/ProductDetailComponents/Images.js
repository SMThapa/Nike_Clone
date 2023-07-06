import { useEffect, useState } from "react"

export const Images = ({fetchData, images, id}) => {

  const [index, setIndex] = useState(0)

  useEffect(()=>{
    setIndex(0)
  },[id])

  const handleClick = (e) =>{
    setIndex(Number(e.target.id))
  }
  const handleLeft = () => {
    index === 0 ? setIndex(images.length - 1) : setIndex(index - 1)
  }
  const handleRight = () => {
    index === images.length - 1 ? setIndex(0) : setIndex(index + 1)
  }  

  return (
    <div className="productDetailImage flex sm:sticky top-40 sm:w-1/2 w-screen">
        <div className="vertical-images h-full overflow-y-scroll w-auto max-sm:hidden">
          {
            images.map((img, index) => (
              <img src={img} key={index} id={index} onClick={handleClick} alt={fetchData.name} className="sm:w-20 h-auto object-cover cursor-pointer sm:py-2 rounded-xl"></img>
            ))
          }
        </div>
        <div className="relative h-full">
          <img className="h-full sm:w-full w-screen object-cover sm:px-4" src={images[Number(index)]} alt={fetchData.name} />

          <div className="absolute bottom-0 right-2 m-3">
            <button onClick={handleLeft} className="p-2 bg-gray-200 w-12 rounded-full m-1"><i className="bi bi-chevron-left text-center"></i></button>
            <button onClick={handleRight} className="p-2 bg-gray-200 w-12 rounded-full m-1"><i className="bi bi-chevron-right"></i></button>
          </div>
        </div>
    </div>
  )
}
