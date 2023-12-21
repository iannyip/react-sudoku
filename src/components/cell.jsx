import { checkBorderX, checkBorderY } from '../utils/styling.js';
import { CellNode } from '../controllers/cellNode.js';
import './styles.css';

export default function Cell({
  index,
  val,
  cellSelection,
  updateSelectedCell,
}) {
  // the object handles most of the logic
  const cell = new CellNode(index, val);

  const handleHover = (event) => {
    updateSelectedCell(cell);
  };

  const dynamicCellStyle = {
    backgroundColor: cell.isHighlighted(cellSelection.coordinates)
      ? '#51557bde'
      : '',
  };

  return (
    <div
      className={`${checkBorderX(index)} ${checkBorderY(index)} cell`}
      style={dynamicCellStyle}
      onMouseOver={handleHover}
    >
      {val === '-' ? '' : val}
    </div>
  );
}
