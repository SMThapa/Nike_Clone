import { Products, Filter } from "./ProductList/index"

export const ProductList = ({category}) => {

  return (
    <div className="flex">
      <Filter/>
      <Products category={category}/>
    </div>
  )
}
