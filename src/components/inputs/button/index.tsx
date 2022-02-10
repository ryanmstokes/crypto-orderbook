import { StyledButton } from 'components/inputs/button/styled'
import { MouseEventHandler } from 'react'

function Button(
  {
    title,
    callback,
    variant
  }: { title: string, callback: MouseEventHandler<HTMLButtonElement>, variant: string }
) {
  return (
    <StyledButton onClick={callback} variant={variant}>{title}</StyledButton>
  )
}

export default Button
