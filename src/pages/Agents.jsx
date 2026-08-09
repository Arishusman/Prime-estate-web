import { Link } from "react-router-dom";
import "./Agents.css";

const agents = [
    {
        id: "alex-morgan",
        name: "Alex Morgan",
        role: "Senior Property Consultant",
        experience: "12+ Years",
        rating: "4.9",
        reviews: "128 Reviews",
        phone: "+92 300 1234567",
        email: "alex@primeestate.com",
        image: `${import.meta.env.BASE_URL}images/agents/agent-1.webp`,
        specialty: "Luxury Villas & Estates",
    },

    {
        id: "sophia-williams",
        name: "Sophia Williams",
        role: "Luxury Real Estate Advisor",
        experience: "9+ Years",
        rating: "4.8",
        reviews: "96 Reviews",
        phone: "+92 301 2345678",
        email: "sophia@primeestate.com",
        image: `${import.meta.env.BASE_URL}images/agents/agent-2.webp`,
        specialty: "Premium Residential",
    },

    {
        id: "daniel-hayes",
        name: "Daniel Hayes",
        role: "Senior Real Estate Advisor",
        experience: "10+ Years",
        rating: "4.9",
        reviews: "114 Reviews",
        phone: "+92 302 3456789",
        email: "daniel@primeestate.com",
        image: `${import.meta.env.BASE_URL}images/agents/agent-3.webp`,
        specialty: "Investment Properties",
    },

    {
        id: "olivia-bennet",
        name: "Olivia Bennet",
        role: "Property Specialist",
        experience: "8+ Years",
        rating: "4.8",
        reviews: "87 Reviews",
        phone: "+92 303 4567890",
        email: "olivia@primeestate.com",
        image: `${import.meta.env.BASE_URL}images/agents/agent-4.webp`,
        specialty: "Apartments & Penthouses",
    },

    {
        id: "ethan-carter",
        name: "Ethan Carter",
        role: "Real Estate Consultant",
        experience: "7+ Years",
        rating: "4.7",
        reviews: "74 Reviews",
        phone: "+92 304 5678901",
        email: "ethan@primeestate.com",
        image: `${import.meta.env.BASE_URL}images/agents/agent-5.webp`,
        specialty: "Commercial Properties",
    },

    {
        id: "emma-thompson",
        name: "Emma Thompson",
        role: "Property Consultant",
        experience: "11+ Years",
        rating: "4.9",
        reviews: "103 Reviews",
        phone: "+92 305 6789012",
        email: "emma@primeestate.com",
        image: `${import.meta.env.BASE_URL}images/agents/agent-6.webp`,
        specialty: "Luxury Residences",
    },
];


function Agents() {

    return (
        <main className="agents-page">

            {/* =====================================
                HERO
            ===================================== */}

            <section className="agents-hero">

                <div className="agents-hero-content">

                    <span className="agents-eyebrow">
                        PRIME ESTATE
                    </span>

                    <h1>
                        Meet our
                        <span> property experts.</span>
                    </h1>

                    <p>
                        Our experienced team combines local
                        market knowledge with a commitment to
                        helping you find the right property.
                    </p>

                </div>

            </section>


            {/* =====================================
                AGENTS SECTION
            ===================================== */}

            <section className="agents-section">

                <div className="agents-container">

                    <div className="agents-heading">

                        <div>

                            <span>
                                OUR TEAM
                            </span>

                            <h2>
                                People behind
                                Prime Estate.
                            </h2>

                        </div>

                        <p>
                            Connect directly with one of our
                            experienced property specialists
                            for personalized guidance.
                        </p>

                    </div>


                    {/* =================================
                        AGENTS GRID
                    ================================= */}

                    <div className="agents-grid">

                        {agents.map((agent) => (

                            <article
                                className="agent-card"
                                key={agent.id}
                            >

                                <Link
                                    to={`/agents/${agent.id}`}
                                    className="agent-image"
                                >

                                    <img
                                        src={agent.image}
                                        alt={agent.name}
                                        loading="lazy"
                                    />

                                    <div className="agent-image-overlay" />

                                    <span className="agent-view">
                                        View Profile →
                                    </span>

                                </Link>


                                <div className="agent-card-content">

                                    <span className="agent-role">
                                        {agent.role}
                                    </span>

                                    <h3>
                                        {agent.name}
                                    </h3>

                                    <p className="agent-specialty">
                                        {agent.specialty}
                                    </p>


                                    <div className="agent-info-row">

                                        <span>
                                            <strong>
                                                {agent.experience}
                                            </strong>

                                            Experience
                                        </span>

                                        <span>
                                            <strong>
                                                ★ {agent.rating}
                                            </strong>

                                            {agent.reviews}
                                        </span>

                                    </div>


                                    <Link
                                        to={`/agents/${agent.id}`}
                                        className="agent-profile-link"
                                    >
                                        View Agent Profile

                                        <span>
                                            →
                                        </span>
                                    </Link>

                                </div>

                            </article>

                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================
                CTA
            ===================================== */}

            <section className="agents-cta">

                <div className="agents-cta-inner">

                    <div>

                        <span>
                            NEED EXPERT GUIDANCE?
                        </span>

                        <h2>
                            Let our experts
                            help you find home.
                        </h2>

                    </div>

                    <Link
                        to="/consultation"
                        className="agents-cta-button"
                    >
                        Book a Consultation
                    </Link>

                </div>

            </section>

        </main>
    );
}

export default Agents;