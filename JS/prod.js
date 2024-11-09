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

//const gamesData =;
