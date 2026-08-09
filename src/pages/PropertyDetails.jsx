import { Link, useParams } from "react-router-dom";
import "./PropertyDetails.css";

const properties = [
    {
        id: "modern-luxury-villa",
        title: "Modern Luxury Villa",
        location: "DHA Phase 8, Lahore",
        price: "PKR 18.5 Crore",
        type: "Villa",

        beds: 5,
        baths: 6,
        area: "5,500 sq ft",
        parking: "3 Cars",

        image: "/images/properties/property-1.webp",

        description:
            "A beautifully designed modern luxury villa created for sophisticated family living. This exceptional residence combines contemporary architecture, generous living spaces and premium finishes throughout the home.",

        features: [
            "Private Swimming Pool",
            "Modern Equipped Kitchen",
            "Large Family Lounge",
            "Private Garden",
            "Smart Home Features",
            "Double Height Entrance",
            "Servant Quarter",
            "24/7 Security",
        ],
    },

    {
        id: "contemporary-residence",
        title: "Contemporary Residence",
        location: "Gulberg, Lahore",
        price: "PKR 9.8 Crore",
        type: "House",

        beds: 4,
        baths: 5,
        area: "3,800 sq ft",
        parking: "2 Cars",

        image: "/images/properties/property-2.webp",

        description:
            "A refined contemporary residence featuring elegant interiors, spacious bedrooms and carefully planned living areas. Ideal for families looking for comfort, privacy and modern design.",

        features: [
            "Contemporary Architecture",
            "Spacious Bedrooms",
            "Designer Kitchen",
            "Private Lawn",
            "Family Lounge",
            "Home Office",
            "Covered Parking",
            "Security System",
        ],
    },

    {
        id: "premium-family-home",
        title: "Premium Family Home",
        location: "DHA Phase 6, Islamabad",
        price: "PKR 7.5 Crore",
        type: "House",

        beds: 4,
        baths: 4,
        area: "3,200 sq ft",
        parking: "2 Cars",

        image: "/images/properties/property-3.webp",

        description:
            "A premium family home offering a balanced combination of modern design, practical spaces and a peaceful residential environment.",

        features: [
            "Modern Kitchen",
            "Spacious Bedrooms",
            "Family Lounge",
            "Landscaped Garden",
            "Study Room",
            "Maid Room",
            "Covered Parking",
            "Gated Community",
        ],
    },

    {
        id: "executive-apartment",
        title: "Executive Luxury Apartment",
        location: "Emaar, Karachi",
        price: "PKR 5.2 Crore",
        type: "Apartment",

        beds: 3,
        baths: 3,
        area: "2,100 sq ft",
        parking: "2 Cars",

        image: "/images/properties/property-4.webp",

        description:
            "An elegant executive apartment with sophisticated interiors, panoramic views and premium residential amenities.",

        features: [
            "Sea View",
            "Modern Kitchen",
            "Spacious Living Area",
            "Balcony",
            "Gym Access",
            "Swimming Pool",
            "Covered Parking",
            "24/7 Security",
        ],
    },

    {
        id: "skyline-penthouse",
        title: "Skyline Penthouse",
        location: "Clifton, Karachi",
        price: "PKR 12.5 Crore",
        type: "Penthouse",

        beds: 4,
        baths: 5,
        area: "4,200 sq ft",
        parking: "3 Cars",

        image: "/images/properties/property-5.webp",

        description:
            "A sophisticated skyline penthouse designed for elevated urban living, featuring expansive interiors, premium finishes and exceptional city views.",

        features: [
            "Panoramic City View",
            "Private Terrace",
            "Luxury Kitchen",
            "Master Suite",
            "Private Elevator",
            "Entertainment Room",
            "Premium Parking",
            "24/7 Concierge",
        ],
    },

    {
        id: "garden-villa",
        title: "Private Garden Villa",
        location: "Bahria Town, Lahore",
        price: "PKR 6.9 Crore",
        type: "Villa",

        beds: 5,
        baths: 5,
        area: "4,000 sq ft",
        parking: "2 Cars",

        image: "/images/properties/property-6.webp",

        description:
            "A peaceful private garden villa offering generous living spaces, elegant interiors and a beautifully landscaped outdoor environment.",

        features: [
            "Private Garden",
            "Modern Kitchen",
            "Large Lounge",
            "Guest Bedroom",
            "Study Room",
            "Outdoor Seating",
            "Covered Parking",
            "Gated Security",
        ],
    },
];


function PropertyDetails() {

    const { id } = useParams();

    const property = properties.find(
        (item) => item.id === id
    );


    if (!property) {

        return (
            <main className="property-not-found">

                <span>
                    PRIME ESTATE
                </span>

                <h1>
                    Property Not Found
                </h1>

                <p>
                    The property you are looking for
                    is currently unavailable.
                </p>

                <Link to="/properties">
                    ← Back to Properties
                </Link>

            </main>
        );
    }


    return (
        <main className="property-details-page">

            {/* =====================================
                TOP IMAGE
            ===================================== */}

            <section className="property-detail-hero">

                <img
                    src={property.image}
                    alt={property.title}
                />

                <div className="property-detail-overlay" />

                <div className="property-detail-hero-content">

                    <Link
                        to="/properties"
                        className="back-properties"
                    >
                        ← All Properties
                    </Link>

                    <span className="detail-type">
                        {property.type}
                    </span>

                    <h1>
                        {property.title}
                    </h1>

                    <p>
                        {property.location}
                    </p>

                </div>

            </section>


            {/* =====================================
                MAIN DETAILS
            ===================================== */}

            <section className="property-detail-section">

                <div className="property-detail-container">


                    {/* LEFT */}

                    <div className="property-detail-main">

                        <div className="property-price-block">

                            <div>

                                <span>
                                    PROPERTY PRICE
                                </span>

                                <strong>
                                    {property.price}
                                </strong>

                            </div>

                            <span className="property-status">
                                Available
                            </span>

                        </div>


                        {/* PROPERTY STATS */}

                        <div className="property-detail-stats">

                            <div>
                                <strong>
                                    {property.beds}
                                </strong>

                                <span>
                                    Bedrooms
                                </span>
                            </div>


                            <div>
                                <strong>
                                    {property.baths}
                                </strong>

                                <span>
                                    Bathrooms
                                </span>
                            </div>


                            <div>
                                <strong>
                                    {property.area}
                                </strong>

                                <span>
                                    Area
                                </span>
                            </div>


                            <div>
                                <strong>
                                    {property.parking}
                                </strong>

                                <span>
                                    Parking
                                </span>
                            </div>

                        </div>


                        {/* DESCRIPTION */}

                        <div className="property-description">

                            <span className="detail-label">
                                PROPERTY OVERVIEW
                            </span>

                            <h2>
                                A residence designed
                                around modern living.
                            </h2>

                            <p>
                                {property.description}
                            </p>

                            <p>
                                Every detail has been carefully
                                considered to create a comfortable,
                                elegant and highly functional living
                                environment.
                            </p>

                        </div>


                        {/* FEATURES */}

                        <div className="property-features">

                            <span className="detail-label">
                                PROPERTY FEATURES
                            </span>

                            <h2>
                                Everything you need.
                            </h2>


                            <div className="features-grid">

                                {property.features.map(
                                    (feature) => (

                                        <div
                                            className="feature-item"
                                            key={feature}
                                        >

                                            <span className="feature-check">
                                                ✓
                                            </span>

                                            <span>
                                                {feature}
                                            </span>

                                        </div>

                                    )
                                )}

                            </div>

                        </div>

                    </div>


                    {/* RIGHT CONTACT CARD */}

                    <aside className="property-agent-card">

                        <span className="detail-label">
                            INTERESTED IN THIS PROPERTY?
                        </span>

                        <h3>
                            Speak with a
                            property specialist.
                        </h3>

                        <p>
                            Get more information about
                            this property or schedule a
                            private viewing with one of
                            our experienced agents.
                        </p>


                        <Link
                            to="/contact"
                            className="property-contact-btn"
                        >
                            Contact an Agent
                        </Link>


                        <Link
                            to="/consultation"
                            className="property-consult-btn"
                        >
                            Book a Consultation
                        </Link>


                        <div className="agent-card-divider" />


                        <div className="property-agent-mini">

                            <div className="agent-mini-avatar">
                                PE
                            </div>

                            <div>

                                <strong>
                                    Prime Estate Team
                                </strong>

                                <span>
                                    Luxury Property Specialists
                                </span>

                            </div>

                        </div>


                        <div className="agent-response">

                            <span>
                                ●
                            </span>

                            Usually responds within
                            30 minutes

                        </div>

                    </aside>

                </div>

            </section>


            {/* =====================================
                BOTTOM CTA
            ===================================== */}

            <section className="property-detail-cta">

                <div>

                    <span>
                        PRIME ESTATE
                    </span>

                    <h2>
                        Ready to make this
                        property yours?
                    </h2>

                    <p>
                        Our team is ready to arrange
                        a private viewing and answer
                        any questions you may have.
                    </p>

                </div>


                <Link
                    to="/contact"
                    className="property-cta-btn"
                >
                    Contact Our Team
                </Link>

            </section>

        </main>
    );
}

export default PropertyDetails;