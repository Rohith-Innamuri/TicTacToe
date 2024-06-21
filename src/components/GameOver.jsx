export default function GameOver({ winner, onRematch }) {
  return (
    <div id="game-over">
      <h2>GAME OVER!</h2>
      {/* {winner && <p>You Won, {winner}!</p>}
      {!winner && <p>It's a draw!!</p>} */}
      {winner ? <p>You Won, {winner}!</p> : <p>It's a draw!!</p>}
      <p>
        <button onClick={onRematch}>REMATCH!</button>
      </p>
    </div>
  );
}
