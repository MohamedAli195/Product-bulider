interface IProps {
    msg:string
}
function ErrorMsg({msg}:IProps) {
  return (
   msg ? <span>{msg}</span> :null
  )
}

export default ErrorMsg