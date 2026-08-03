export default function Log({ turns }) {
    return (
        <aside id="game-log" aria-label="Move history">
            <div className="log-heading">
                <div>
                    <span className="eyebrow">Match activity</span>
                    <h2>Recent moves</h2>
                </div>
                <span className="move-count">{turns.length}/9</span>
            </div>
            {turns.length === 0 && (
                <p className="empty-log">Your moves will appear here once the match begins.</p>
            )}
            <ol id="log">
                {turns.map((turn, index) => (
                    <li key={index} data-player={turn.player}>
                        <span className="log-symbol">{turn.player}</span>
                        <span>
                            <strong>Move {turns.length - index}</strong>
                            <small>Row {turn.squre.row + 1}, column {turn.squre.col + 1}</small>
                        </span>
                    </li>
                ))}
            </ol>
        </aside>
    );
}
