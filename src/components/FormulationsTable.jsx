import formulationImg from "/images/products/formulation.jpg";

const formulations = [
  "Clodinafop-propargyl 15% WP",
  "Quizalofop-ethyl 10% EC",
  "Tembotrione 34.4% SC",
  "Topramezone 336 g/L SC",
  "Haloxyfop-R-methyl 10.5% EC",
  "Pendimethaline 30% EC",
  "Sulfentrazone 39.6% SC",
  "Pretilachlor 50% EC",
  "Paraquat Dichloride 24% SL",
  "Halosulfurone-methyl 75% WG",
  "Glyphosate 41% SL",
  "Bispyribac Sodium 10% SC",
  "Atrazine 50% WP",
  "Gulfosinate Ammonium 13.5% SL",
  "Clodinafop propargyl 9% + Metribuzin 20% WP (w/w)",
  "Topramezone 10 g/L + Atrazine 300 g/L SC",
  "Fomesafen 12% + Quizalofop-ethyl 3% SC",
  "Propaquizafop 10% EC",
  "Quizalofop-ethyl 7.5% + Imazethapyr 15% EC"
];

export default function FormulationsTable() {
  return (
    <div className="products-section">
      <div className="formulation-header">
        <img src={formulationImg} alt="Formulations" />
        <h2>Formulations</h2>
      </div>

      <div className="table-wrapper">
        <table className="product-table">
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Product Name</th>
            </tr>
          </thead>
          <tbody>
            {formulations.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
