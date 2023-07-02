export const Details = ({fetchData}) => {
    const size= {
        Kid : ["UK 1", "UK 2", "UK 3", "UK 4", "UK 5", "UK 6"],
        Women : ["UK 3", "UK 4", "UK 5", "UK 6", "UK 6.5", "UK 7", "UK 7.5", "UK 8", "UK 8.5"],
        Men : ["UK 6", "UK 6.5", "UK 7", "UK 7.5", "UK 8", "UK 8.5", "UK 9", "UK 9.5", "UK 10", "UK 10.5", "UK 11", "UK 11.5", "UK 12"]
    }
    

  return (
    <div className="sm:pl w-1/2 ">
        <div>
          <p className="sm:text-3xl">{fetchData.name}</p>
          <p className="sm:text-lg">{`${fetchData.gender}'s Shoe`}</p>
        </div>

        <div className="my-5">
          <p className="sm:text-lg font-bold">MRP: Rs.{fetchData.price}</p>
          <p className="text-gray-500">incl. of taxes <br /> (Also includes all applicable duties)</p>
        </div>
        
        <div className="mt-16">
           <p>Select Size</p>
          <div className="w-full">
            {
              size[fetchData.gender]?.map((size, index) =>(
                // <button className="sm:w-24 sm:p-2 sm:m-1 border" key={index}>{size}</button>
                <p key={index} className="inline-flex">
                  <input className="hidden overflow-hidden" type="radio" name="inputRadio" id={`size${index}`}/>
                  <label onClick={(e)=>console.log(e.target.innerText)} className="w-20 sm:w-24 sm:p-2 sm:m-1 border pointer rounded-sm text-center" htmlFor={`size${index}`}>{size}</label>
                </p>
              ))
            }
          </div>

        </div>

        <div className="sm:my-12 flex w-full justify-between">
          <button  className="sm:w-1/2 sm:mr-2 bg-black text-white p-3 rounded-full">Add to Bag</button>
          <button className="sm:w-1/2 sm:ml-2 p-3 border border-gray-400 rounded-full">Add to Favourite</button>
        </div>

        <p className="sm:my-12">
          {
            `You can't stop ageing, but the ${fetchData.name} gets pretty close. Soft, textured leather helps 
            conceal creasing and is easy to clean. The debossed branding, which replaces the woven labels, pairs with extra laces so you 
            can eat that jam doughnut in peace. And the perforated sockliner keeps it airy and breathable. Now, there's really no reason 
            not to rock white-on-white.`
          }
        </p>
        
        <div className="sm:my-12">
          <p>&bull; Color: {fetchData.color}</p>
          <p>&bull; Style: {fetchData.id}</p>
        </div>
        
        <div className="sm:mt-10">
          <p className="font-bold text-xl underline my-3 sm:pb-5">View Product Details</p>
          <div>
            <div className="border-t border-b border-gray-300">
              <h1 className="text-2xl font-black sm:py-5" >Delivery & Returns</h1>
              <div className="ml-3">
                <p className="">Free delivery for purchases above ₹19,000.00</p>
                <p className="sm:my-4">&bull; Standard delivery 4-9 Business Days</p>
                <p className="sm:my-4">Orders are processed and delivered Monday-Friday (excluding public holidays)</p>
                <p className="sm:my-4">Nike Members enjoy free returns.</p>
              </div>
            </div>
            <div className="border-b border-gray-300">
              <h1 className="text-2xl font-black sm:py-5">Product Information</h1>
              <div className="ml-3">
                <p className="">Declaration of Importer: Direct import by the individual customer</p>
                <p className="sm:my-4">Marketed by: Nike Global Trading B.V. Singapore Branch, 30 Pasir Panjang Road, #10-31/32, Mapletree Business City, Singapore 117 440</p>
                <p className="sm:my-4 text-lg font-black">Net Quantity: 1 Pair</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
