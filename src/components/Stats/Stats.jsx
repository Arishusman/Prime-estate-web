import "./Stats.css";
import "../../responsive.css";

const stats = [
  {
    number: "25K+",
    title: "Premium Properties",
    description:
      "Luxury villas, apartments and commercial properties across prime locations."
  },
  {
    number: "18K+",
    title: "Happy Clients",
    description:
      "Thousands of satisfied buyers and investors trust PrimeEstate every year."
  },
  {
    number: "450+",
    title: "Expert Agents",
    description:
      "Professional real estate advisors with years of market experience."
  },
  {
    number: "15+",
    title: "Years Experience",
    description:
      "Delivering premium real estate solutions with proven industry expertise."
  }
];

function Stats() {
  return (
    <section className="stats">

      <div className="stats-container">

        <div className="stats-header">

          <span>PrimeEstate by Numbers</span>

          <h2>
            Trusted by Thousands
            <br />
            Around the World
          </h2>

          <p>
            Our commitment to quality, transparency and customer satisfaction
            has made PrimeEstate one of the most trusted real estate brands.
          </p>

        </div>

        <div className="stats-grid">

          {stats.map((item, index) => (

            <div
              className="stat-card"
              key={index}
            >

              <h3>{item.number}</h3>

              <h4>{item.title}</h4>

              <p>{item.description}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Stats;