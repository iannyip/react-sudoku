import { checkBorderX, checkBorderY } from '../utils/styling.js';
import './styles.css';

export default function Cell({ index, val }) {
  return (
    <div className={`${checkBorderX(index)} ${checkBorderY(index)} cell`}>
      {val === '-' ? '' : val}
    </div>
  );
}
