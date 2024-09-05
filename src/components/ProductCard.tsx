import { useDispatch } from "react-redux"
import CircleColor from "../CircleColor"
import { IProduct } from "../interfaces"
import { txtSlicer } from "../utilites/utility"
import Image from "./Image"
import Button from "./ui/Button"
import { addItemsToCart } from "../app/featuer/cart/cartSlice"
interface IProps {
  product:IProduct,
  setProductToEdite:(Product:IProduct)=>void,
  openEdit:()=>void,
  productEditIndx:number,
  setProductEditIndx:(val:number)=>void
}
function ProductCard({product,setProductToEdite,openEdit,productEditIndx,setProductEditIndx}:IProps) {
  const dispatch =useDispatch()
  const {id,description,price,title,image,colors,category,} =product
  const circleColorRender = colors.map(color => <CircleColor color={color} key={color} />)

  

  const  onEdit =() =>{
    setProductToEdite(product)
    openEdit()
    setProductEditIndx(productEditIndx)
  }
  return (
    <div className="border rounded-md p-2 flex flex-col">

        
        <Image imgUrl={image} imgAlt={title} imgClass="rounded-md mb-2 h-60 " />
        <h3 >{txtSlicer(title,10)}</h3>
        <p>{txtSlicer(description,20)}</p>
        <div className="flex items-center my-4 space-x-2" >
          {circleColorRender}
        </div>
        <div className="flex items-center justify-between">
            <span>${price}</span>
            <Image imgUrl={category.imageURL} imgAlt={category.name} imgClass="w-10 h-10 rounded-full object-center" />
        </div>

        <div className="flex items-center justify-between space-x-2">
          <div className="flex items-center justify-between space-x-2">

          <Button className="bg-red-700" width="w-full">DELETE</Button>
            
            <Button className="bg-indigo-700" width="w-full" onClick={onEdit}>EDIT</Button>
          </div>
          <Button className="bg-indigo-700" width="w-full" onClick={()=>dispatch(addItemsToCart(product))}>Add to cart</Button>
            
        </div>
    </div>
  )
}

export default ProductCard