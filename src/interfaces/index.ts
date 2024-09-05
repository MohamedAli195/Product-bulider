import { ProductNameTypes } from "../types"

export interface IProduct {
    id:number,
    title:string,
    price:number,
    description :string,
    image:string,
    category:{
        id:number,
        name:string,
        imageURL:string
    },
    rating:{
        count:number,
        rate:number
    },
    colors:string[]
}
export interface IProduct2 {
    id:number,
    title:string,
    qty:number
    price:number,
    description :string,
    image:string,
    category:{
        id:number,
        name:string,
        imageURL:string
    },
    rating:{
        count:number,
        rate:number
    },
    colors:string[]
}
export interface IFormInput {
    name:ProductNameTypes,
	id:string,
	type:string,
	label:string
}
// export interface IProductsInportForm {
    
//         label:string,
//         id:string,
//         type:string,
//         name:'title'|'price'|'description'|'image'

    
// }


export interface ICategory {
    id:number,
    name:string,
    imageURL:string
}