export default function GameBoard({ onSelectSqure, board }) {
    return (
        <ol id="game-board" aria-label="Tic-tac-toe board">
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button
                                    className={playerSymbol ? `symbol-${playerSymbol.toLowerCase()}` : undefined}
                                    onClick={() => onSelectSqure(rowIndex, colIndex)}
                                    disabled={playerSymbol !== null}
                                    aria-label={playerSymbol
                                        ? `Row ${rowIndex + 1}, column ${colIndex + 1}: ${playerSymbol}`
                                        : `Choose row ${rowIndex + 1}, column ${colIndex + 1}`}
                                >
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}
