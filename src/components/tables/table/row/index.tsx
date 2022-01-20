import Cell from 'components/tables/table/cell'
import DepthVisualiser from 'components/tables/table/depth-visualiser'
import ArrayFromObject from 'utils/array-from-object'
import { StyledRow, Inner } from 'components/tables/table/row/styled'
import { UseMobile } from 'store/features/config'

const Row = ({ cells, id, index, depth, direction }: { cells: number[], id: number, index: number, depth: number, direction: string }) => {

  const directedCells = direction === 'reverse' && !UseMobile()
    ? ArrayFromObject(cells).reverse()
    : ArrayFromObject(cells)

  let ConstructedCells = []
  for (var i = 0, n = directedCells.length; i < n; ++i) {
    let color: string = 'white'
    if (i === 2 && id === 0 && !UseMobile()) {
      color = 'primary'
    }
    if (i === 0 && id === 0 && UseMobile()) {
      color = 'primary'
    }
    if (i === 0 && id === 1) {
      color = 'secondary'
    }
    ConstructedCells.push(<Cell value={directedCells[i]} key={'cell' + i} color={color} />)
  }

  return (
    <StyledRow key={"row_comp" + id + index}>
      <DepthVisualiser percentage={depth} direction={direction} id={id} />
      <Inner >
        {ConstructedCells}
      </Inner>
    </StyledRow>
  )
}

export default Row
