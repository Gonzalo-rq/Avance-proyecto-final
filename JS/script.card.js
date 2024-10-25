const Fotos = ({ foto, clase, alt, texto }) => {
  return (
    <section id="products">
      <div className="product-card">
        <img src={foto} className={clase} alt={alt} />
        <p>{texto}</p>
      </div>
    </section>
  );
};

const FotosList = ({ cardsData }) => (
  <div className="content-section">
    {cardsData.map((card, index) => (
      <Fotos
        key={index}
        foto={card.foto}
        clase={card.clase}
        alt={card.alt}
        texto={card.texto}
      />
    ))}
  </div>
);
