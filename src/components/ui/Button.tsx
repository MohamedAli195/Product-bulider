import { ButtonHTMLAttributes, ReactNode } from "react"

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className:string ,
    children:ReactNode,
    width?:"w-full" | "w-fit"
}

function Button({className,children, width="w-fit",...rest}:IProps) {
    
  return (
    <button className={`${className} rounded-md ${width} p-2 text-white`} {...rest} >{children}</button>
  )
}

export default Button