import { Products, Filter } from "./ProductListComponents/index"

export const ProductList = ({category}) => {

  return (
    <div className="flex">
      <Filter category={category}/>
      <Products category={category}/>
    </div>
  )
}
