import Cell from 'components/tables/table/cell'
import DepthVisualiser from 'components/tables/table/depth-visualiser'
import ArrayFromObject from 'utils/array-from-object'
import { StyledRow, Inner } from 'components/tables/table/row/styled'
import { UseMobile } from 'store/features/config'
import { Cells } from 'types'

function Row({
  cells, id, index, depth, direction,
}: { cells: Cells, id: number, index: number, depth: number | undefined, direction: string }) {
  const directedCells = direction === 'reverse' && !UseMobile()
    ? ArrayFromObject(cells).reverse()
    : ArrayFromObject(cells)

  const ConstructedCells = []
  for (let i = 0, n = directedCells.length; i < n; i += 1) {
    let color = 'white'
    if (i === 2 && id === 0 && !UseMobile()) {
      color = 'primary'
    }
    if (i === 0 && id === 0 && UseMobile()) {
      color = 'primary'
    }
    if (i === 0 && id === 1) {
      color = 'secondary'
    }
    ConstructedCells.push(<Cell value={directedCells[i]} key={`cell${i}`} color={color} />)
  }

  return (
    <StyledRow key={`row_comp${id}${index}`}>
      <DepthVisualiser percentage={depth} direction={direction} />
      <Inner>
        {ConstructedCells}
      </Inner>
    </StyledRow>
  )
}

export default Row
