
import {  ICategory, IFormInput, IProduct } from "../interfaces"


export const productsList:IProduct[] = [

	{
		"id": 7,
		"title": "White Gold Plated Princess",
		"price": 9.99,
		"description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
		"category": {"id":3,"name":"jewelery","imageURL":"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"},
		"image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
		"rating": {
			"rate": 3,
			"count": 400
		},
        "colors":["#dfe6e9","#95a5a6"]
	},
	{
		"id": 8,
		"title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
		"price": 10.99,
		"description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
		"category": {"id":3,"name":"jewelery","imageURL":"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"},		"image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
		"rating": {
			"rate": 1.9,
			"count": 100
		},
        "colors":["#dfe6e9","#95a5a6"]
	},
	{
		"id": 9,
		"title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
		"price": 64,
		"description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
		"category": {
			"id":2,
			"name":"electronics",
			"imageURL":"https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
		},
		"image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
		"rating": {
			"rate": 3.3,
			"count": 203
		},
        "colors":["#dfe6e9","#95a5a6"]
	},
	{
		"id": 10,
		"title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
		"price": 109,
		"description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
		"category": {
			"id":2,
			"name":"electronics",
			"imageURL":"https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
		},
		"image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
		"rating": {
			"rate": 2.9,
			"count": 470
		},
        "colors":["#dfe6e9","#95a5a6"],
	},
	{
		"id": 18,
		"title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
		"price": 9.85,
		"description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
		"category": {
			"id":4,
			"name":"women's clothing",
			"imageURL":"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
		},
		"image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
		"rating": {
			"rate": 4.7,
			"count": 130
		}
        ,
        "colors":["#dfe6e9","#95a5a6"]
	},
	{
		"id": 19,
		"title": "Opna Women's Short Sleeve Moisture",
		"price": 7.95,
		"description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
		"category": {
			"id":4,
			"name":"women's clothing",
			"imageURL":"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
		},
		"image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
		"rating": {
			"rate": 4.5,
			"count": 146
		},
        "colors":["#dfe6e9","#95a5a6"]

	},
	{
		"id": 20,
		"title": "DANVOUY Womens T Shirt Casual Cotton Short",
		"price": 12.99,
		"description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
		"category": {
			"id":4,
			"name":"women's clothing",
			"imageURL":"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
		},
		"image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
		"rating": {
			"rate": 3.6,
			"count": 145
		},
        "colors":["#dfe6e9","#95a5a6"]
	}
]

export const formInputList:IFormInput[] =[
	{
		name:"title",
		id:"title",
		type:"text",
		label:"Product title"
	},
	{
		name:"description",
		id:"description",
		type:"text",
		label:"Product description"
	},
	{
		name:"image",
		id:"url",
		type:"text",
		label:"Product Image URL"
	},
	{
		name:"price",
		id:"price",
		type:"text",
		label:"Product Price"
	},
]


// export const formInputList: IProductsInportForm[] = [
//     {
//         label: " product title",
//         name: "title",
//         id: "title",
//         type: "Text"

//     },
//     {
//         label: "product description",
//         name: "description",
//         id: "description",
//         type: "Text"
//     },

//     {
//         label: "product image url",
//         name: "image",
//         id: "image",
//         type: "Text"
//     },

//     {
//         label: "product price",
//         name: "price",
//         id: "price",
//         type: "Text"
//     },

// ]

export const circleColor: string[] = [
    '#dfe6e9',
    '#a29bfe',
    '#74b9ff',
    '#81ecec',
    '#55efc4',
    '#2d3436',
    '#e84393',
    '#d63031',
    '#e17055',
    '#d35400',
    '#95a5a6',
    '#2c3e50',
    '#8e44ad'

]  

export const categories :ICategory[] = 
[
    {
        id:1,
        name:"men's clothing",
        imageURL:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    },
    {
        id:2,
        name:"electronics",
        imageURL:"https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
    },
    {
        id:3,
        name:"jewelery",
        imageURL:"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
    },
    {
        id:4,
        name:"women's clothing",
        imageURL:"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
    },

]  