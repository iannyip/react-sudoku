import sudoku from '../controllers/game.js';
import Cell from './cell.jsx';
import { useState } from 'react';
import './styles.css';

export default function Game() {
  const [cellSelection, setCellSelection] = useState({
    isSelected: false,
    coordinates: { xValue: 0, yValue: 0 },
  });

  const updateSelectedCell = (cell) => {
    setCellSelection({
      isSelected: true,
      coordinates: cell.getCoordinates(),
    });
  };

  console.log(cellSelection);

  return (
    <div className='game-board'>
      {sudoku.puzzle.split('').map((val, index) => {
        return (
          <Cell
            key={index}
            index={index}
            val={val}
            cellSelection={cellSelection}
            updateSelectedCell={updateSelectedCell}
          />
        );
      })}
    </div>
  );
}
