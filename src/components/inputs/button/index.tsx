import { StyledButton } from 'components/inputs/button/styled'

const Button = ({ title, callback, variant }: { title: string, callback: any, variant: any }) => {
  return (
    <StyledButton onClick={callback} variant={variant}>{title}</StyledButton>
  )
}

export default Button
