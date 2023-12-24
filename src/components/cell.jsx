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
      ? 'pink'
      : '',
  };

  return (
    <div
      className={`cell ${cell.getBorderStyles}`}
      style={dynamicCellStyle}
      onMouseOver={handleHover}
    >
      {val === '-' ? '' : val}
    </div>
  );
}
