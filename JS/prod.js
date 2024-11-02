document.addEventListener("DOMContentLoaded", function () {});

const Prod = ({ category, title, description, image, id, price }) => (
  <div
    className="game-card"
    data-category={category}
    onClick={() => showDetails(id)}
  >
    <img src={image} alt={`${title}`} />
    <div className="price-discount-box">
      <h3>{title}</h3>
      <p>{description}</p>
      <p className="price">{price}</p>
      <button className="buy-button">Comprar</button>
    </div>
  </div>
);

const Header2 = () => (
  <div>
    <header>
      <a href="index.html" className="header-logo-link">
        <div className="header-logo">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/imagenes-del-final.appspot.com/o/IMAGENES%20PRINCIPALES%2Flogo.png?alt=media&token=1e2f5cd6-aedd-4a61-82bc-24a37d01ecc9"
            alt="GameVerse Logo"
            className="logo"
          />
          <h1>GameVerse</h1>
        </div>
      </a>
      <div id="categories">
        <button onClick={() => filterGames("all")}>Todos</button>
        <button onClick={() => filterGames("playstation")}>PlayStation</button>
        <button onClick={() => filterGames("xbox")}>Xbox</button>
        <button onClick={() => filterGames("nintendo")}>Nintendo</button>
      </div>
    </header>
  </div>
);

function filterGames(category) {
  const games = document.querySelectorAll(".game-card");
  games.forEach((game) => {
    if (category === "all" || game.dataset.category === category) {
      game.style.display = "block";
    } else {
      game.style.display = "none";
    }
  });
}

function showDetails(gameId) {
  const game = gamesData.find((g) => g.id === gameId);
  if (game) {
    showPopup(game);
  }
}

const gamesData = [
  {
    id: "1",
    category: "playstation",
    title: "PlayStation 5",
    description: "$500.00",
    image:
      "https://firebasestorage.googleapis.com/v0/b/imagenes-del-final.appspot.com/o/IMAGENES%20PRODUCTOS%2FPlay%205.png?alt=media&token=7dd6f0e1-b4df-47cf-bf43-bc71fad28714",
  },
  {
    id: "2",
    category: "playstation",
    title: "Marvel's Spider-Man 2",
    description: "$69.99",
    image:
      "https://firebasestorage.googleapis.com/v0/b/imagenes-del-final.appspot.com/o/IMAGENES%20PRODUCTOS%2FSpiderman%20ps5.png?alt=media&token=8c5649b0-4ec0-4c32-84ad-4800f6e12c07",
  },
  {
    id: "3",
    category: "playstation",
    title: "DRAGON BALL: Sparking! ZERO",
    description: " $69.99",
    image:
      "https://firebasestorage.googleapis.com/v0/b/imagenes-del-final.appspot.com/o/IMAGENES%20PRODUCTOS%2FSparking%20Zero%20ps5.png?alt=media&token=b1660700-3797-4fdc-93ad-e8d93296b64f",
  },
  {
    id: "4",
    category: "playstation",
    title: "Grand Theft Auto Online",
    description: "$19.99",
    image:
      "https://firebasestorage.googleapis.com/v0/b/imagenes-del-final.appspot.com/o/IMAGENES%20PRODUCTOS%2FGTA5%20ps5.png?alt=media&token=0b9cb394-0f69-4daf-a8f5-2fe3b25c9ff2",
  },
  {
    id: "5",
    category: "playstation",
    title: "God of War Ragnarök",
    description: "$69.99",
    image:
      "https://firebasestorage.googleapis.com/v0/b/imagenes-del-final.appspot.com/o/IMAGENES%20PRODUCTOS%2Fgod_of_war_ragnarok_ps5_2.png?alt=media&token=959d9573-9755-4318-b09a-2eaa033602bd",
  },
  {
    id: "6",
    category: "playstation",
    title: "La ascensión del Ronin™",
    description: "$69.99",
    image:
      "https://firebasestorage.googleapis.com/v0/b/imagenes-del-final.appspot.com/o/IMAGENES%20PRODUCTOS%2Fronin.png?alt=media&token=503b0a6f-a19a-47cf-9d33-78c7917ba7a0",
  },
  {
    id: "7",
    category: "xbox",
    title: "Xbox X Series",
    description: "$599.90",
    image:
      "https://firebasestorage.googleapis.com/v0/b/imagenes-del-final.appspot.com/o/IMAGENES%20PRODUCTOS%2FXbox%20Series%20X.png?alt=media&token=0c0f8d62-b00b-4b39-b1ac-55dd94ff4c6f",
  },
  {
    id: "8",
    category: "xbox",
    title: "South Park™ : Los Venganales de la Justicia™",
    description: "$32.99",
    image:
      "https://firebasestorage.googleapis.com/v0/b/imagenes-del-final.appspot.com/o/IMAGENES%20PRODUCTOS%2FSouth%20park%20Xbox.png?alt=media&token=d9852c87-b3b5-4305-a2f5-9aa21b0a5ba7",
  },
  {
    id: "9",
    category: "xbox",
    title: "Elden Ring",
    description: "$65.99 ",
    image:
      "https://firebasestorage.googleapis.com/v0/b/imagenes-del-final.appspot.com/o/IMAGENES%20PRODUCTOS%2FElden%20Ring%20Xbox.png?alt=media&token=47161d1f-40e2-4c2c-b1d9-c69720f8a8e0",
  },
  {
    id: "10",
    category: "xbox",
    title: "Minecraft",
    description: "$20.99",
    image:
      "https://firebasestorage.googleapis.com/v0/b/imagenes-del-final.appspot.com/o/IMAGENES%20PRODUCTOS%2FMinecraft%20Xbox.png?alt=media&token=1f8ff21b-5d01-4ffc-990e-54d428d5ed9f",
  },
  {
    id: "11",
    category: "xbox",
    title: "Goat Simulator 3",
    description: "$39.99",
    image:
      "https://firebasestorage.googleapis.com/v0/b/imagenes-del-final.appspot.com/o/IMAGENES%20PRODUCTOS%2Fgoat.png?alt=media&token=1b06e1c7-f4f2-474b-8e62-3ca61ebdb6db",
  },
  {
    id: "12",
    category: "xbox",
    title: "Ark: Survival Ascended",
    description: "$30.14",
    image:
      "https://firebasestorage.googleapis.com/v0/b/imagenes-del-final.appspot.com/o/IMAGENES%20PRODUCTOS%2Fark.png?alt=media&token=a53d05d0-e1c3-406d-b1a1-f2907a9b642c",
  },
  {
    id: "13",
    category: "nintendo",
    title: "Nintendo Switch Oled",
    description: "$349.99",
    image:
      "https://firebasestorage.googleapis.com/v0/b/imagenes-del-final.appspot.com/o/IMAGENES%20PRODUCTOS%2FNintendo%20Switch%20Oled.png?alt=media&token=33f332e4-b45f-41c8-9bc2-7e837ee2a3a3",
  },
  {
    id: "14",
    category: "nintendo",
    title: "The Legend of Zelda™: Echoes of Wisdom ",
    description: "$229.00 ",
    image:
      "https://firebasestorage.googleapis.com/v0/b/imagenes-del-final.appspot.com/o/IMAGENES%20PRODUCTOS%2FZelda%20nintendo.png?alt=media&token=e7cb90a6-f256-4bce-93a6-b9bbcaf9f434",
  },
  {
    id: "15",
    category: "nintendo",
    title: "Super Mario Party™ Jamboree",
    description: "$229.00",
    image:
      "https://firebasestorage.googleapis.com/v0/b/imagenes-del-final.appspot.com/o/IMAGENES%20PRODUCTOS%2FMario%20nintendo.png?alt=media&token=ff04663f-b616-49b7-adc9-0d07ccc4f370",
  },
  {
    id: "16",
    category: "nintendo",
    title: "Detective Pikachu™ Returns",
    description: "$229.00",
    image:
      "https://firebasestorage.googleapis.com/v0/b/imagenes-del-final.appspot.com/o/IMAGENES%20PRODUCTOS%2FPikachu%20nintendo.png?alt=media&token=23a97e34-be52-46a9-a269-e8610aaabffc",
  },
];
