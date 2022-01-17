import styled from 'styled-components'

const StyledDepthVisualiser = styled('div') <{ direction: string }>`
position: absolute;
top:0;
left:0;
width:auto;
height:100%;
display:flex;
z-index: -1;
justify-content: ${(props) => props.direction === 'reverse' ? 'right' : 'left'}
`
const StledG = styled('g')`
fill: grey;
`
const DepthVisualiser = ({ percentage, direction }: { percentage: number, direction: string }) => {
  return (
    <StyledDepthVisualiser direction={direction}>
      <svg width={percentage + "%"} height="100%" aria-labelledby="title desc" role="img">
        <title id="title">Depth bar</title>
        <desc id="desc">Used to indicate perentage of value.</desc>
        <StledG>
          <rect width="100%" height="100%" ></rect>
        </StledG>
      </svg>
    </StyledDepthVisualiser>
  )
}

export default DepthVisualiser