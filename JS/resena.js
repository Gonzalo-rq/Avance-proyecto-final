const reviews = [
  {
    name: "PEPITO1334",
    text: "¡Me encanta este producto! La calidad es excelente y cumple con lo prometido.",
  },
  {
    name: "JoshuaCastillo",
    text: "No estoy satisfecho con este producto. No funcionó como esperaba.",
  },
  {
    name: "ANTIBUSH",
    text: "Buena relación calidad-precio. Lo recomendaría a mis amigos.",
  },
  {
    name: "ELROBACUNAS",
    text: "El diseño es moderno y funcional. Estoy muy contento con mi compra.",
  },
  {
    name: "LASDE13SON",
    text: "Una experiencia decepcionante. No cumple con las expectativas.",
  },
  {
    name: "ValentínF",
    text: "Excelente servicio al cliente y un producto de alta calidad.",
  },
  {
    name: "OMEGALOL",
    text: "Un buen producto, pero el precio es un poco elevado.",
  },
  {
    name: "ositogominola",
    text: "Me sorprendió gratamente. Superó mis expectativas en todos los sentidos.",
  },
  {
    name: "EsoTilin002",
    text: "Una excelente compra. Funciona perfectamente y es fácil de usar.",
  },
  {
    name: "Goku",
    text: "Lo he estado usando durante semanas y no he tenido ningún problema.",
  },
];

function displayReviews() {
  const reviewsSection = document.getElementById("reviews");
  reviewsSection.innerHTML = reviews
    .map(
      (review) =>
        `<div class="review"><h3>${review.name}</h3><p>${review.text}</p></div>`
    )
    .join("");
}

document.getElementById("reviewForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("productName").value;
  const text = document.getElementById("reviewText").value;
  reviews.push({ name, text });
  displayReviews();
  event.target.reset();
});

displayReviews();
