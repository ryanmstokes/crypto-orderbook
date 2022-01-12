const Button = (options: any) => {
  return (
    <button onClick={options.callback} >{options.title}</button>
  )
}

export default Button
