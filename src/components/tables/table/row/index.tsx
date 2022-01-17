import Cell from 'components/tables/table/cell'
import 'components/tables/table/row/styles.css'
import styled from 'styled-components'
import DepthVisualiser from 'components/tables/table/depth-visualiser'
import ArrayFromObject from 'utils/array-from-object'

const RowComponent = styled.div`
display: flex;
position: relative;
justify-content: center;
flex-direction: row;
display: flex; 
display: -webkit-flex;          
flex-direction: row;  
-webkit-flex-direction: row;   
flex-grow: 0;  
-webkit-flex-grow: 0;          
flex-wrap: wrap;
-webkit-flex-wrap: wrap;         
width: 100%;
border-bottom: 1px solid black;
padding: 10px 0;
`;

const Row = ({ cells, id, depth, direction }: { cells: number[], id: number, depth: number, direction: string }) => {
  let directedCells = direction === 'reverse' ? ArrayFromObject(cells).reverse() : ArrayFromObject(cells)
  return (
    <RowComponent key={"row_comp" + id}>
      <DepthVisualiser percentage={depth} direction={direction} />
      {
        directedCells.map((item: number, index: number) =>
          <Cell value={item} key={'cell' + index} />
        )
      }
    </RowComponent>
  )
}

export default Row
