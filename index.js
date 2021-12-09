const output = document.getElementById("output");
const btn = document.getElementById("btn");
const quote = [
  '"Frivolity is inborn, conceit acquired by education."',
  '"In reality, serendipity accounts for one percent of the blessings we receive in life, work and love. The other 99 percent is due to our efforts."',
  '"I never knew how to worship until I knew how to love."',
  '"I believe society has a right to defend itself, just as the individual has the right to attack that with which he disagrees."',
  '"From success you get a lot of things, but not that great inside thing that love brings you."',
  '"There is the good and the bad, the great and the low, the just and the unjust. I swear to you that all that will never change."',
  '"It is through science that we prove, but through intuition that we discover."',
  '"Books are the carriers of civilization. Without books, history is silent, literature dumb, science crippled, thought and speculation at a standstill."',
];

btn.addEventListener("click", function () {
  var random = quote[Math.floor(Math.random() * quote.length)];
  output.innerText = random;
});
