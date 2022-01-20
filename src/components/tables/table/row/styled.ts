import styled from 'styled-components'

const StyledRow = styled('div')`
display: flex;
position: relative;
flex-grow: 0;  
flex-wrap: wrap;
width: 100%;
align-items: center;
`;

const Inner = styled('div')`
display: flex;
flex-direction: row;
width: 100%;
`

export { StyledRow, Inner }