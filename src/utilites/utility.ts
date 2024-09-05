import { IProduct2 } from "../interfaces"

export function txtSlicer(txt:string,max:number =50){

    if(txt.length >= max) {
        return `${txt.slice(0,max)} ...`
    }
    return txt
}


export function addToCart(cartItem:IProduct2[],product:IProduct2){

    const isExist =cartItem.find(item => item.id===product.id)
    if(isExist) {
        return cartItem.map(item=>item.id===product.id?{...item,qty:item.qty+1}:item)
    }
    return cartItem=[...cartItem,{...product,qty:1}]
}