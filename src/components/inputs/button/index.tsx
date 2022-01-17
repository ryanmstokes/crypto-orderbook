
const Button = ({ title, callback }: { title: string, callback: any }) => {
  return (
    <button onClick={callback} >{title}</button>
  )
}

export default Button
