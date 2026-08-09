import { Link } from "react-router-dom";
import "./About.css";

const values = [
    {
        number: "01",
        title: "Integrity",
        text: "Clear communication, honest advice and a straightforward approach define every client relationship.",
    },
    {
        number: "02",
        title: "Expertise",
        text: "Our property specialists combine local knowledge with a deep understanding of the premium real estate market.",
    },
    {
        number: "03",
        title: "Excellence",
        text: "From the first conversation to the final handover, we focus on delivering a refined experience.",
    },
    {
        number: "04",
        title: "Personal Service",
        text: "Every client has different goals, which is why our recommendations are tailored to individual needs.",
    },
];

const stats = [
    { value: "12+", label: "Years Experience" },
    { value: "850+", label: "Properties Sold" },
    { value: "96%", label: "Client Satisfaction" },
    { value: "18", label: "Expert Advisors" },
];

function About() {
    return (
        <main className="about-page">

            {/* =====================================
                HERO
            ===================================== */}

            <section className="about-hero">

                <div className="about-hero-content">

                    <span className="about-eyebrow">
                        ABOUT PRIME ESTATE
                    </span>

                    <h1>
                        Real estate,
                        <span> redefined.</span>
                    </h1>

                    <p>
                        We connect people with exceptional properties
                        through expertise, transparency and a commitment
                        to doing things differently.
                    </p>

                </div>

            </section>


            {/* =====================================
                INTRO
            ===================================== */}

            <section className="about-intro">

                <div className="about-container">

                    <div className="about-intro-label">
                        <span>
                            WHO WE ARE
                        </span>
                    </div>

                    <div className="about-intro-content">

                        <h2>
                            A better way to
                            <span> find your place.</span>
                        </h2>

                        <p>
                            Prime Estate is a premium real estate
                            consultancy built around a simple idea:
                            finding a property should feel as exceptional
                            as the property itself.
                        </p>

                        <p>
                            We carefully curate residential and investment
                            opportunities across some of the most sought-after
                            locations. Our team combines market knowledge,
                            personal service and a modern approach to real
                            estate to make every decision easier.
                        </p>

                        <Link
                            to="/properties"
                            className="about-primary-link"
                        >
                            Explore Our Properties
                            <span>→</span>
                        </Link>

                    </div>

                </div>

            </section>


            {/* =====================================
                STATS
            ===================================== */}

            <section className="about-stats">

                <div className="about-container about-stats-grid">

                    {stats.map((stat) => (

                        <div
                            className="about-stat"
                            key={stat.label}
                        >

                            <strong>
                                {stat.value}
                            </strong>

                            <span>
                                {stat.label}
                            </span>

                        </div>

                    ))}

                </div>

            </section>


            {/* =====================================
                STORY
            ===================================== */}

            <section className="about-story">

                <div className="about-container about-story-grid">

                    <div className="about-story-image">

                        <img
                           src={`${import.meta.env.BASE_URL}images/properties/property-1.webp`}
                            alt="Luxury Prime Estate property"
                            loading="lazy"
                        />

                        <div className="about-image-card">

                            <strong>
                                2012
                            </strong>

                            <span>
                                Prime Estate founded
                            </span>

                        </div>

                    </div>


                    <div className="about-story-content">

                        <span className="about-section-label">
                            OUR STORY
                        </span>

                        <h2>
                            Built on trust.
                            <br />
                            <span>Driven by people.</span>
                        </h2>

                        <p>
                            What started as a small property advisory
                            has grown into a trusted real estate brand
                            serving clients looking for homes and
                            investments of lasting value.
                        </p>

                        <p>
                            Over the years, our philosophy has remained
                            unchanged: listen carefully, understand what
                            matters and provide honest guidance at every
                            stage of the journey.
                        </p>

                        <div className="about-story-line"></div>

                        <p className="about-story-signature">
                            Exceptional properties.
                            <br />
                            Exceptional service.
                        </p>

                    </div>

                </div>

            </section>


            {/* =====================================
                VALUES
            ===================================== */}

            <section className="about-values">

                <div className="about-container">

                    <div className="about-values-heading">

                        <div>

                            <span className="about-section-label">
                                WHAT GUIDES US
                            </span>

                            <h2>
                                Our principles.
                            </h2>

                        </div>

                        <p>
                            The standards behind every property,
                            recommendation and client relationship.
                        </p>

                    </div>


                    <div className="about-values-grid">

                        {values.map((value) => (

                            <article
                                className="about-value-card"
                                key={value.number}
                            >

                                <span className="about-value-number">
                                    {value.number}
                                </span>

                                <h3>
                                    {value.title}
                                </h3>

                                <p>
                                    {value.text}
                                </p>

                            </article>

                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================
                CTA
            ===================================== */}

            <section className="about-cta">

                <div className="about-cta-overlay"></div>

                <div className="about-cta-content">

                    <span>
                        YOUR NEXT ADDRESS STARTS HERE
                    </span>

                    <h2>
                        Let's find something
                        <br />
                        exceptional.
                    </h2>

                    <p>
                        Speak with our property specialists
                        and discover opportunities selected
                        around your goals.
                    </p>

                    <div className="about-cta-buttons">

                        <Link
                            to="/properties"
                            className="about-cta-primary"
                        >
                            View Properties
                        </Link>

                        <Link
                            to="/consultation"
                            className="about-cta-secondary"
                        >
                            Book a Consultation
                        </Link>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default About;