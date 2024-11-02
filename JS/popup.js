function showPopup(game) {
  if (!game || !game.image || !game.title || !game.description) {
    console.error("Invalid game object");
    return;
  }
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close" onclick="closePopup(this)">&times;</span>
      <img src="${game.image}" alt="${game.title}" class="modal-image" />
      <h3>${game.title}</h3>
      <p>${game.description}</p>
      <button class="buy-button">Comprar</button>
    </div>
  `;
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      closePopup(modal);
    }
  });
  document.body.appendChild(modal);
  document.body.style.overflow = "hidden";
}

function closePopup(element) {
  element.closest(".modal").remove();
  document.body.style.overflow = "auto";
}

function showDetails(gameId) {
  const game = gamesData.find((g) => g.id === gameId);
  if (game) {
    showPopup(game);
  }
}
