import { StyledDepthVisualiser, StyledG, StyledSVG } from 'components/tables/table/depth-visualiser/styled'
import theme from 'theme'
import { UseMobile } from 'store/features/config'

const DepthVisualiser = ({ percentage, direction, id }: { percentage: number, direction: string, id: number }) => {
  const highlight = direction === 'reverse'
    ? theme.colors.background.b
    : theme.colors.background.c
  return (
    <StyledDepthVisualiser>
      <StyledSVG direction={direction} aria-labelledby="title desc" role="img" mobile={UseMobile()}>
        <title id="title">Depth bar</title>
        <desc id="desc">Used to indicate perentage of value.</desc>
        <StyledG style={
          {
            fill: highlight
          }
        }>
          <rect width={percentage + '%'} height="100%" ></rect>
        </StyledG>
      </StyledSVG>
    </StyledDepthVisualiser >
  )
}

export default DepthVisualiser