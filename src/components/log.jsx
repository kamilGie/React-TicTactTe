export default function Log({ turns }) {
  let moves = turns.map((t) => (
    <li key={`${t.square.row}${t.square.col}`}>
      {t.Player} selected {t.square.row}, {t.square.col}
    </li>
  ));
  return <ol id="log">{moves}</ol>;
}
