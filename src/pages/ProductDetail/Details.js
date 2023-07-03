export const Details = ({fetchData}) => {
    const size= {
        Kid : ["UK 1", "UK 2", "UK 3", "UK 4", "UK 5", "UK 6"],
        Women : ["UK 3", "UK 4", "UK 5", "UK 6", "UK 6.5", "UK 7", "UK 7.5", "UK 8", "UK 8.5"],
        Men : ["UK 6", "UK 6.5", "UK 7", "UK 7.5", "UK 8", "UK 8.5", "UK 9", "UK 9.5", "UK 10", "UK 10.5", "UK 11", "UK 11.5", "UK 12"]
    }
    

  return (
    <div className="sm:pl sm:w-1/2 max-sm:p-3">
        <div>
          <p className="sm:text-3xl text-lg">{fetchData.name}</p>
          <p className="sm:text-lg text-gray-500">{`${fetchData.gender}'s Shoe`}</p>
        </div>

        <div className="my-5">
          <p className="sm:text-lg font-bold">MRP: Rs.{fetchData.price}</p>
          <p className="text-gray-500">incl. of taxes <br /> (Also includes all applicable duties)</p>
        </div>
        
        <div className="sm:mt-16 max-sm:my-3">
           <p>Select Size</p>
          <div className="w-full">
            {
              size[fetchData.gender]?.map((size, index) =>(
                // <button className="sm:w-24 sm:p-2 sm:m-1 border" key={index}>{size}</button>
                <p key={index} className="inline-flex">
                  <input className="hidden overflow-hidden" type="radio" name="inputRadio" id={`size${index}`}/>
                  <label onClick={(e)=>console.log(e.target.innerText)} className="w-20 sm:w-24 sm:p-2 p-1 m-1 border pointer rounded-sm text-center" htmlFor={`size${index}`}>{size}</label>
                </p>
              ))
            }
          </div>

        </div>

        <div className="sm:my-12 my-3 flex w-full justify-between">
          <button  className="w-1/2 mr-2 bg-black text-white p-3 rounded-full">Add to Bag</button>
          <button className="w-1/2 ml-2 p-3 border border-gray-400 rounded-full">Add to Favourite</button>
        </div>

        <p className="sm:my-8 my-5">
          {
            `You can't stop ageing, but the ${fetchData.name} gets pretty close. Soft, textured leather helps 
            conceal creasing and is easy to clean. The debossed branding, which replaces the woven labels, pairs with extra laces so you 
            can eat that jam doughnut in peace. And the perforated sockliner keeps it airy and breathable. Now, there's really no reason 
            not to rock white-on-white.`
          }
        </p>
        
        <div className="sm:my-3">
          <p>&bull; Color: {fetchData.color}</p>
          <p>&bull; Style: {fetchData.id}</p>
        </div>
        
        <div className="mt-10">
          <p className="font-bold sm:text-xl text-lg underline my-3 sm:pb-5">View Product Details</p>
          <div>
            <div className="sm:border-t border-b border-gray-300">
              <h1 className="sm:text-2xl text-xl font-black sm:py-5 py-1" >Delivery & Returns</h1>
              <div className="ml-3">
                <p className="">&bull; Free delivery for purchases above ₹19,000.00</p>
                <p className="sm:my-4 my-2">&bull; Standard delivery 4-9 Business Days</p>
                <p className="sm:my-4 my-2">&bull; Orders are processed and delivered Monday-Friday (excluding public holidays)</p>
                <p className="sm:my-4 my-2">&bull; Nike Members enjoy free returns.</p>
              </div>
            </div>
            <div className="border-b border-gray-300 max-sm:py-3">
              <h1 className="text-2xl font-black sm:py-5 py-2">Product Information</h1>
              <div className="ml-3">
                <p className="">Declaration of Importer: Direct import by the individual customer</p>
                <p className="sm:my-4 my-2">Marketed by: Nike Global Trading B.V. Singapore Branch, 30 Pasir Panjang Road, #10-31/32, Mapletree Business City, Singapore 117 440</p>
                <p className="sm:my-4 my-2 text-lg font-black">Net Quantity: 1 Pair</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
