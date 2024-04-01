export default function Log({turns, player}) {
    return (
        <ol id="log">
            { turns.map(turn => <li key={`${turn.square.row}${turn.square.col}`}>{turn.player} selcted {turn.square.row}, {turn.square.col}</li>)}
        </ol>
    )
}