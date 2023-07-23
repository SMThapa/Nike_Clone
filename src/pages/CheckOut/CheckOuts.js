import { useTitle } from "../../hooks/useTitle"
import { Billling, Summery } from "./components/index"

export const CheckOuts = () => {

  useTitle("Check Out")

  //to add date of delivary
  const milTime = Date.now()
  const date = new Date(milTime + (Math.floor(Math.random()*9 * 86400000))).toUTCString()
  const arrdate = date.split(" ");

  return (
    <div className="theContainer sm:my-28 my-20">
        <div className="sm:px-20 xl:px-40 2xl:px-56 md:flex justify-between">
            <Billling deliveryDate={arrdate}/>            
            <Summery deliveryDate={arrdate}/>
        </div>
    </div>
  )
}
