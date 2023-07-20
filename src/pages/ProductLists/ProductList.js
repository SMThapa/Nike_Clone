import { Products} from "./components/index"

export const ProductList = ({category}) => {

  return (
    <div className="flex">
      <Products category={category}/>
    </div>
  )
}
