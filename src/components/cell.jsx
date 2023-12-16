import './styles.css';
export default function Cell({ val }) {
  return <div className='cell'>{val === '-' ? '' : val}</div>;
}
