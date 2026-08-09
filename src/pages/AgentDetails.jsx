import { Link, useParams } from "react-router-dom";
import "./AgentDetails.css";

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

        location: "Lahore, Pakistan",

        about:
            "Alex is a senior property consultant specializing in luxury residential properties and premium estates. With more than twelve years of experience, he helps clients navigate the property market with confidence and clarity.",

        expertise: [
            "Luxury Villas",
            "Premium Residences",
            "Property Investment",
            "Residential Sales",
        ],
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

        location: "Lahore, Pakistan",

        about:
            "Sophia specializes in premium residential properties and personalized property searches. Her approach combines detailed market knowledge with a strong focus on understanding each client's individual requirements.",

        expertise: [
            "Premium Homes",
            "Luxury Apartments",
            "Property Search",
            "Client Advisory",
        ],
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

        location: "Islamabad, Pakistan",

        about:
            "Daniel works closely with investors and homeowners to identify valuable property opportunities. His experience covers residential investments, market analysis and long-term property planning.",

        expertise: [
            "Property Investment",
            "Market Analysis",
            "Residential Sales",
            "Investment Advisory",
        ],
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

        location: "Karachi, Pakistan",

        about:
            "Olivia specializes in premium apartments and penthouses, helping clients discover properties that match their lifestyle, investment goals and expectations.",

        expertise: [
            "Luxury Apartments",
            "Penthouses",
            "Property Sales",
            "Lifestyle Properties",
        ],
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

        location: "Karachi, Pakistan",

        about:
            "Ethan advises clients on commercial and investment properties, with a focus on identifying practical opportunities and building strong long-term property strategies.",

        expertise: [
            "Commercial Properties",
            "Investment Planning",
            "Property Valuation",
            "Market Research",
        ],
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

        location: "Islamabad, Pakistan",

        about:
            "Emma has extensive experience in luxury residential real estate and is known for providing highly personalized service to clients searching for exceptional homes.",

        expertise: [
            "Luxury Residences",
            "Premium Villas",
            "Client Representation",
            "Property Advisory",
        ],
    },
];


function AgentDetails() {

    const { id } = useParams();

    const agent = agents.find(
        (item) => item.id === id
    );


    if (!agent) {

        return (
            <main className="agent-not-found">

                <span>
                    PRIME ESTATE
                </span>

                <h1>
                    Agent Not Found
                </h1>

                <p>
                    The agent profile you are looking for
                    is currently unavailable.
                </p>

                <Link to="/agents">
                    ← Back to Our Agents
                </Link>

            </main>
        );
    }


    const whatsappNumber = agent.phone.replace(
        /[^0-9]/g,
        ""
    );


    return (
        <main className="agent-details-page">


            {/* =========================================
                PROFILE HERO
            ========================================= */}

            <section className="agent-detail-hero">

                <div className="agent-detail-container">

                    <Link
                        to="/agents"
                        className="agent-back-link"
                    >
                        ← Back to Our Agents
                    </Link>


                    <div className="agent-profile-layout">


                        {/* PHOTO */}

                        <div className="agent-detail-image">

                            <img
                                src={agent.image}
                                alt={agent.name}
                            />

                        </div>


                        {/* BASIC INFO */}

                        <div className="agent-detail-intro">

                            <span className="agent-detail-role">
                                {agent.role}
                            </span>

                            <h1>
                                {agent.name}
                            </h1>

                            <p className="agent-detail-specialty">
                                {agent.specialty}
                            </p>


                            <div className="agent-rating">

                                <strong>
                                    ★ {agent.rating}
                                </strong>

                                <span>
                                    {agent.reviews}
                                </span>

                            </div>


                            <div className="agent-detail-meta">

                                <div>

                                    <strong>
                                        {agent.experience}
                                    </strong>

                                    <span>
                                        Experience
                                    </span>

                                </div>


                                <div>

                                    <strong>
                                        {agent.location}
                                    </strong>

                                    <span>
                                        Based In
                                    </span>

                                </div>

                            </div>


                            <div className="agent-contact-actions">

                                <a
                                    href={`tel:${agent.phone}`}
                                    className="agent-call-button"
                                >
                                    Call Agent
                                </a>


                                <a
                                    href={`https://wa.me/${whatsappNumber}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="agent-whatsapp-button"
                                >
                                    WhatsApp
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================
                INFORMATION
            ========================================= */}

            <section className="agent-information">

                <div className="agent-information-grid">


                    {/* MAIN CONTENT */}

                    <div className="agent-information-main">


                        {/* ABOUT */}

                        <div className="agent-about">

                            <span className="agent-section-label">
                                ABOUT THE AGENT
                            </span>

                            <h2>
                                Experience you can
                                rely on.
                            </h2>

                            <p>
                                {agent.about}
                            </p>

                            <p>
                                Whether you are searching for
                                a new home, considering an
                                investment or looking to sell
                                a property, {agent.name.split(" ")[0]}
                                {" "}is committed to providing
                                clear advice and a smooth
                                experience from beginning to end.
                            </p>

                        </div>


                        {/* EXPERTISE */}

                        <div className="agent-expertise">

                            <span className="agent-section-label">
                                AREAS OF EXPERTISE
                            </span>

                            <h2>
                                Specialized knowledge.
                            </h2>


                            <div className="agent-expertise-grid">

                                {agent.expertise.map(
                                    (item) => (

                                        <div
                                            className="expertise-item"
                                            key={item}
                                        >

                                            <span>
                                                ✓
                                            </span>

                                            {item}

                                        </div>

                                    )
                                )}

                            </div>

                        </div>

                    </div>


                    {/* CONTACT CARD */}

                    <aside className="agent-contact-card">

                        <span className="agent-section-label">
                            CONTACT
                        </span>

                        <h3>
                            Let's talk about
                            your next move.
                        </h3>

                        <p>
                            Have a property in mind?
                            Contact {agent.name.split(" ")[0]}
                            {" "}directly for availability,
                            pricing or a private viewing.
                        </p>


                        <div className="agent-contact-list">

                            <a
                                href={`tel:${agent.phone}`}
                            >

                                <span className="contact-icon">
                                    ☎
                                </span>

                                <div>

                                    <small>
                                        Phone
                                    </small>

                                    <strong>
                                        {agent.phone}
                                    </strong>

                                </div>

                            </a>


                            <a
                                href={`mailto:${agent.email}`}
                            >

                                <span className="contact-icon">
                                    @
                                </span>

                                <div>

                                    <small>
                                        Email
                                    </small>

                                    <strong>
                                        {agent.email}
                                    </strong>

                                </div>

                            </a>

                        </div>


                        <Link
                            to="/consultation"
                            className="agent-consultation-button"
                        >
                            Book a Consultation
                        </Link>


                        <a
                            href={`https://wa.me/${whatsappNumber}`}
                            target="_blank"
                            rel="noreferrer"
                            className="agent-card-whatsapp"
                        >
                            Message on WhatsApp
                        </a>

                    </aside>

                </div>

            </section>


            {/* =========================================
                BOTTOM CTA
            ========================================= */}

            <section className="agent-detail-cta">

                <div>

                    <span>
                        PRIME ESTATE
                    </span>

                    <h2>
                        Looking for the
                        right property?
                    </h2>

                    <p>
                        Let {agent.name.split(" ")[0]} help
                        you find a property that fits
                        your goals and lifestyle.
                    </p>

                </div>


                <Link
                    to="/properties"
                    className="agent-properties-button"
                >
                    Explore Properties
                </Link>

            </section>

        </main>
    );
}

export default AgentDetails;