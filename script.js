const games = [
  {
    name: "Mobile Legends",
    package: "86 Diamonds",
    price: "$1.99",
    description: "Fast delivery to your account in under 1 minute.",
  },
  {
    name: "PUBG Mobile",
    package: "325 UC",
    price: "$4.49",
    description: "Secure UC top up with instant processing.",
  },
  {
    name: "Genshin Impact",
    package: "Blessing of the Welkin Moon",
    price: "$4.99",
    description: "Official package with safe account handling.",
  },
  {
    name: "Valorant",
    package: "475 VP",
    price: "$4.29",
    description: "Reliable top-up for all Riot regions.",
  },
];

const gameGrid = document.getElementById("gameGrid");

for (const game of games) {
  const card = document.createElement("article");
  card.className = "game-card";
  card.innerHTML = `
    <h3>${game.name}</h3>
    <p>${game.package}</p>
    <p class="price">${game.price}</p>
    <p>${game.description}</p>
  `;
  gameGrid.append(card);
}

const orderForm = document.getElementById("orderForm");
const formMessage = document.getElementById("formMessage");

orderForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(orderForm);
  const customerName = formData.get("name");
  const selectedGame = formData.get("game");

  formMessage.textContent = `Thanks ${customerName}! Your ${selectedGame} order was submitted. We will process it shortly.`;
  orderForm.reset();
});
