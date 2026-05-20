<script>

// =========================
// JOKES
// =========================

const jokes = [

  "bro really clicked Larry 💀",

  "Larry has chosen your fate -Larry",

  "you smell like wet toast -Larry",

  "legend says Larry pays taxes -Larry",

  "you gained +1 emotional damage -Larry",

  "Larry thinks your outfit is mid",

  "critical hit to your ego -Larry",

  "the cheese council approves -Larry",

  "Larry stole your refrigerator",

  "you unlocked goblin mode -Larry",

  "the voices told me to click again -Larry",

  "Larry is proud of you",

  "achievement unlocked: absolutely nothing",

  "your loot luck increased by 0.01%",

  "you disturbed the ancient lobster",

  "Larry demands snacks",

  "Larry thinks your a poser",

  "Theres a secret Larry hid in the PONG, can you find it? -Larry"
];

// =========================
// ELEMENTS
// =========================

const jokeBtn = document.getElementById("jokeBtn");
const bubble = document.getElementById("bubble");

// =========================
// BUTTON CLICK
// =========================

jokeBtn.addEventListener("click", () => {

  // RANDOM JOKE
  const randomJoke =
    jokes[Math.floor(Math.random() * jokes.length)];

  // SET TEXT
  bubble.textContent = randomJoke;

  // SHOW
  bubble.classList.add("show");

  // HIDE
  setTimeout(() => {

    bubble.classList.remove("show");

  }, 4000);

});

</script>
