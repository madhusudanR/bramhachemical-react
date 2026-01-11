import "./ExpertiseSection.css";

const expertiseData = [
  {
    title: "Agrochemical Manufacturing",
    image: "/images/expertise/agrochemical.jpg",
    description:
      "Advanced manufacturing capabilities for high-quality agrochemical products.",
  },
  {
    title: "Herbicide Actives",
    image: "/images/expertise/herbicide.jpg",
    description:
      "Specialized in production of high-purity herbicide active ingredients.",
  },
  {
    title: "Formulation Development",
    image: "/images/expertise/formulation.jpg",
    description:
      "Innovative formulation development ensuring stability and performance.",
  },
];

export default function ExpertiseSection() {
  return (
    <section className="section gray">
      <h2>Our Expertise</h2>

      <div className="grid-3">
        {expertiseData.map((item, index) => (
          <div className="card expertise-card" key={index}>
            <img
              src={item.image}
              alt={item.title}
              className="expertise-image"
            />

            <div className="expertise-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
