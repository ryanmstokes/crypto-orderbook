import styled from 'styled-components'

const StyledDepthVisualiser = styled('div')`
position: absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
z-index: 1;
`

const StyledG = styled('g')`
fill: grey;
`
const StyledSVG = styled('svg') <{ direction: string, mobile: boolean }>`
width: 100%;
height: 100%;
display:flex;
transform: ${(props) => props.direction === 'reverse' && !props.mobile ? 'scaleX(-1)' : null};
`

export { StyledDepthVisualiser, StyledG, StyledSVG }