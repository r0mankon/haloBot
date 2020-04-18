export default function flipCoin() {
  const sides = ["HEADS", "TAILS"];
  const randomSide = sides[Math.floor(Math.random() * sides.length)];

  const coin = `<span class='coin'>
    <span class='coin-text'>${randomSide}</span>
</span>
  `;

  return coin;
}
