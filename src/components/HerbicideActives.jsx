import herbicideImg from "/images/products/herbicide.jpg";

export default function HerbicideActives() {
  return (
    <div className="products-section">
      <div className="products-grid">
        <div className="products-text">
          <h2>Herbicide Actives / Technical</h2>
          <ul className="product-list">
            <li>Metribuzin</li>
            <li>Topramezone</li>
            <li>Tembotrione</li>
            <li>Clodinafop-Propargyl</li>
            <li>Quizalofop-Ethyl</li>
          </ul>
        </div>

        <div className="products-image">
          <img src={herbicideImg} alt="Herbicide Actives" />
        </div>
      </div>
    </div>
  );
}
