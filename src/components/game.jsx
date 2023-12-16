import sudoku from '../controllers/game.js';
import Cell from './cell.jsx';
import './styles.css';

export default function Game() {
  console.log(sudoku);
  console.log(sudoku.puzzle.split(''));
  return (
    <div className='game-board'>
      {sudoku.puzzle.split('').map((val, index) => {
        return <Cell key={index} index={index} val={val} />;
      })}
    </div>
  );
}
