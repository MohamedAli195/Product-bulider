export const validationFunction =(product:{title:string,description:string,image:string,price:number,colors:string[]})=>{

    const errorsOpj ={
        title:"",
        description:"",
        image:"",
        price:"",
        colors:""
    }

    const regualEx = /^(ftp|http|https):\/\/[^ "]+$/.test(product.image)

    if(!product.title.trim() || product.title.length<10 || product.title.length>80){
        errorsOpj.title ="product title must be between 10 to 80"
    }

    if(!product.description.trim()|| product.description.length<50 || product.description.length>200){
        errorsOpj.description="product Descripiton must be between 50 to 200"
    }
    if(!product.image.trim()|| !regualEx){
        errorsOpj.image="valid image url is required"
    }
    
    if(product.price == 0  ){
        errorsOpj.price="price must be a number and not equal 0"
    }
    if(product.colors.length==0){
        errorsOpj.colors="you must chose avaialbe colors"
    }else {
        errorsOpj.colors=""
    }



    return errorsOpj
}