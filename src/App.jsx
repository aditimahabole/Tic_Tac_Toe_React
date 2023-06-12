// import Square from './Components/Square'
import Board from './Components/Board';
import './style.scss';
import { useState } from 'react';
import { calculateWinner } from './winner';
function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXnext, setIsXnext] = useState(false);
  const nextPlayer = isXnext ? 'Next Player is : X' : 'Next Player is : O';
  const winner = calculateWinner(squares);
  const statusMessage = winner ? `Winner is ${winner}` : nextPlayer;

  const handleSquareClick = clickedPosition => {
    if (squares[clickedPosition]) return;

    setSquares(currentSquares => {
      return currentSquares.map((squareValue, position) => {
        if (position == clickedPosition) {
          return isXnext ? 'X' : 'O';
        }
        return squareValue;
      });
    });
    setIsXnext(prev => !prev);
  };

  return (
    <div className="app">
      <h2>{statusMessage}</h2>
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}
export default App;
