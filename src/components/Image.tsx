interface IProps {
    imgUrl :string ,
    imgAlt:string,
    imgClass:string
}

function Image({imgAlt,imgClass,imgUrl}:IProps) {
  return (
    <img src={imgUrl} alt={imgAlt} className={imgClass}/>
  )
}

export default Image