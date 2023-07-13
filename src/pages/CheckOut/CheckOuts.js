import { Billling, Summery } from "./components/index"

export const CheckOuts = () => {
  return (
    <div className="theContainer sm:mt-40 mt-20">
        <div className="sm:px-20 xl:px-40 2xl:px-56 flex justify-between">
            <Billling/>            
            <Summery/>
        </div>
    </div>
  )
}
