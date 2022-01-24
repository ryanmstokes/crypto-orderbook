import { StyledButton } from 'components/inputs/button/styled'
import { MouseEventHandler } from 'react'

const Button = ({ title, callback, variant }: { title: string, callback: MouseEventHandler<HTMLButtonElement>, variant: any }) => {
  return (
    <StyledButton onClick={callback} variant={variant}>{title}</StyledButton>
  )
}

export default Button
