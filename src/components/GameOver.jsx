export default function GameOver({ winner, onRematch }) {
  return (
    <div id="game-over">
        <h2>Game Over</h2>
        {winner && <p>{winner} wins!</p>}
        {!winner && <p>The game is a draw!</p>}
        <button onClick={onRematch}>Rematch</button>
    </div>
  );
}