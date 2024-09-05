import { ChangeEvent, FormEvent, useState } from "react"
import ProductCard from "./components/ProductCard"
import Modal from "./components/ui/Modal"
import { categories, circleColor, formInputList, productsList } from "./data"
import { IFormInput, IProduct } from "./interfaces"
import Button from "./components/ui/Button"
import Input from "./components/ui/Input"
import { validationFunction } from "./validation"
import ErrorMsg from "./components/ErrorMsg"
import CircleColor from "./CircleColor"
import Select from "./components/ui/Select"
import { ProductNameTypes } from "./types"
import { useSelector } from "react-redux"
import { RootState } from "@reduxjs/toolkit/query"
import { selectCart } from "./app/featuer/cart/cartSlice"




function App() {
  //  console.log( selectCount((state:RootState)=>state))
 const cart= useSelector(selectCart) 
 console.log(cart)
  let randomID =Math.floor(Math.random() * 100)
  const [selected, setSelected] = useState(categories[1])
  
  const defaultProductOpj = {
    id:0,
    title:"",
    price:0,
    description :"",
    image:"",
    category:{
        id:0,
        name:"",
        imageURL:""
    },
    rating:{
        count:0,
        rate:0
    },
    colors: []
  }
  //*states*
  const [productToEdit,setProductToEdite]=useState<IProduct>(defaultProductOpj)
  
  
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenEdit, setIsOpenEdit] = useState(false)
  const [errorMsg,setErrorMsg] =useState({title:"",
  price:"",
  description :"",
  image:"",
  colors:""
})
  const [product,setProduct] = useState <IProduct>(defaultProductOpj)
  const [tempColor,setTempColor]=useState<string[]>([])
  
  const [products,setProducts]=useState<IProduct[]>(productsList)
  const [productEditIndx,setProductEditIndx] =useState(0)
  console.log(productEditIndx);
  
  
  
  //*handlers
  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }
  function openEdit() {
    setIsOpenEdit(true)
  }

  function closeEdit() {
    setIsOpenEdit(false)
  }
  const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
    const {name,value} =e.target
    setProduct({
      ...product,
      [name]:value
    })

    value
    setErrorMsg({
      ...errorMsg,

      [name]:""
    })
  }

  const onChangeEditHandler = (e:ChangeEvent<HTMLInputElement>)=>{
    const {name,value} =e.target
    setProductToEdite({
      ...productToEdit,
      [name]:value
    })

    value
    setErrorMsg({
      ...errorMsg,

      [name]:""
    })
  }

  

  const onCancel = ()=>{
    console.log(product)
    setProduct(defaultProductOpj)
    close()
  }
  function submitHndler(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    console.log(product)
    const errorMsg = validationFunction({title:product.title,description:product.description,image:product.image,price:product.price,colors:tempColor})
    setErrorMsg(errorMsg)

    const hasError = Object.values(errorMsg).some((value)=>value==="") && Object.values(errorMsg).every(value => value==="")
    console.log(hasError)
    if(!hasError){
      return
    }
    setProducts(prev =>[...prev,{...product,id:randomID,category:selected,colors:tempColor}])
    setProduct(defaultProductOpj)
    close()
    setTempColor([])
  }
  function submitEditHndler(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    const errorMsg = validationFunction({title:productToEdit.title,description:productToEdit.description,image:productToEdit.image,price:productToEdit.price,colors:productToEdit.colors})
    setErrorMsg(errorMsg)

    const hasError = Object.values(errorMsg).some((value)=>value==="") && Object.values(errorMsg).every(value => value==="")
    console.log(hasError)
    if(!hasError){
      console.log(hasError,errorMsg);
      
      return
    }
    const updatedProducts =[...products]
    updatedProducts[productEditIndx]=productToEdit
    setProducts(updatedProducts)
    // setProducts(prev =>[...prev,{...product,id:randomID,category:selected,colors:tempColor}])
    setProductToEdite(defaultProductOpj)
    closeEdit()
    setTempColor([])
  }
  /*render */
  const renderProductList = products.map((product: IProduct,index:number) => {
    return <ProductCard
     product={product} 
     key={product.id}
      setProductToEdite={setProductToEdite}
       openEdit={openEdit}
       productEditIndx={index}
       setProductEditIndx={setProductEditIndx}
       />
  })
  const renderFormInputs = formInputList.map((input:IFormInput)=>{
    return <div className="flex flex-col" key={input.id}>
      <label htmlFor={input.id}>{input.label}</label>
      <Input className="border border-gray-300" type={input.type} name={input.name} id={input.id} value={product[input.name]} onChange={onChangeHandler}/>
      <ErrorMsg msg={errorMsg[input.name]} />
    </div>
  })

  const circleColorRender = circleColor.map(color => <CircleColor color={color} key={color} onClick={()=>
    {
      if(tempColor.includes(color)){
        setTempColor(prev => prev.filter((item)=>item!==color))
        return
      }
      setTempColor(prev=>[...prev,color])
    }
  } />)
  const ColorSpans =tempColor.map((color)=>{
    return (
    <>
    <span className="rounded-md px-2" key={color} style={{backgroundColor:color}}>{color}</span>

    </>
    )
  })


  const inputsEditRender = (id:string,label:string,name:ProductNameTypes,type:string)=> {
    return <div className="flex flex-col">
    <label htmlFor={id}>{label}</label>
    <Input className="border border-gray-300" 
      type={type} 
      name={name} 
      id={id} 
      value={productToEdit[name]}
      onChange={onChangeEditHandler}/>
    <ErrorMsg msg={errorMsg.title} />
  </div>
  }
  return (

    <div className="container mx-auto">
      <h2>cart ({cart.length})</h2>
      {/* add madal */}
      <Modal hasButton={true} isOpen={isOpen} open={open} close={close}>
        <form onSubmit={submitHndler}>
        {renderFormInputs}
        <div className="flex items-center my-4 space-x-2" >
          {circleColorRender}
        </div>
        <div className="flex items-center my-4 space-x-2">
        {ColorSpans}
        <ErrorMsg msg={errorMsg.colors} />
        </div>
        <Select selected={selected} setSelected={setSelected}/>
        <Button className="bg-indigo-700" width="w-full" onClick={onCancel}>Cancel</Button>
        <Button className="bg-gray-400" width="w-full">Submit</Button>
        </form>
      </Modal>



       {/* edit madal */}
       <Modal isOpen={isOpenEdit} open={openEdit} close={closeEdit} hasButton={false}>
        <form onSubmit={submitEditHndler}>

        {
          inputsEditRender('title','product title','title','text')}

          {inputsEditRender('description','product description','description','text')}
          {inputsEditRender('image','product image url','image','text')}
         { inputsEditRender('price','product price','price','text')}
        
         <div className="flex items-center my-4 space-x-2">
        { productToEdit.colors.map((color)=>{
    return (
    <>
    <span className="rounded-md px-2" key={color} style={{backgroundColor:color}}>{color}</span>

    </>
    )} )}
        <ErrorMsg msg={errorMsg.colors} />
        </div>
        <Select selected={productToEdit.category} setSelected={setSelected}/>
        <Button className="bg-indigo-700" width="w-full" onClick={closeEdit}>Cancel</Button>
        <Button className="bg-gray-400" width="w-full">Submit</Button>
        </form>
      </Modal>

    
      <div className=" rounded-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 m-5 p-5">
        {renderProductList}
      </div>
    </div>

  )
}

export default App
