import { Billling, Summery } from "./CheckOutComponents"

export const CheckOuts = () => {
  return (
    <div className="theContainer sm:mt-40 mt-20">
        <div className="sm:px-40 flex justify-between">
            <Billling/>            
            <Summery/>
        </div>
    </div>
  )
}
