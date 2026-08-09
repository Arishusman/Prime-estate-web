import { Link } from "react-router-dom";
import "./Properties.css";

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
        image: `${import.meta.env.BASE_URL}images/properties/property-1.webp`,
        featured: true,
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
        image: `${import.meta.env.BASE_URL}images/properties/property-2.webp`,
        featured: false,
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
        image: `${import.meta.env.BASE_URL}images/properties/property-3.webp`,
        featured: true,
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
        image: `${import.meta.env.BASE_URL}images/properties/property-4.webp`,
        featured: false,
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
        image: `${import.meta.env.BASE_URL}images/properties/property-5.webp`,
        featured: true,
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
        image: `${import.meta.env.BASE_URL}images/properties/property-6.webp`,
        featured: false,
    },
];


function Properties() {

    return (
        <main className="properties-page">

            {/* =====================================
                PAGE HERO
            ===================================== */}

            <section className="properties-hero">

                <div className="properties-hero-content">

                    <span className="properties-eyebrow">
                        PRIME ESTATE
                    </span>

                    <h1>
                        Discover exceptional
                        <span> properties.</span>
                    </h1>

                    <p>
                        Explore a carefully selected collection
                        of luxury villas, modern residences,
                        apartments and premium investment
                        opportunities.
                    </p>

                </div>

            </section>


            {/* =====================================
                PROPERTY LISTING
            ===================================== */}

            <section className="properties-section">

                <div className="properties-container">

                    {/* HEADER */}

                    <div className="properties-heading">

                        <div>

                            <span className="properties-label">
                                OUR COLLECTION
                            </span>

                            <h2>
                                Featured Properties
                            </h2>

                        </div>


                        <div className="properties-count">
                            <strong>
                                {properties.length}
                            </strong>

                            <span>
                                Properties Available
                            </span>
                        </div>

                    </div>


                    {/* FILTER BAR */}

                    <div className="properties-filter">

                        <button className="filter-active">
                            All Properties
                        </button>

                        <button>
                            Villas
                        </button>

                        <button>
                            Houses
                        </button>

                        <button>
                            Apartments
                        </button>

                        <button>
                            Penthouses
                        </button>

                    </div>


                    {/* GRID */}

                    <div className="properties-grid">

                        {properties.map((property) => (

                            <article
                                className="property-card"
                                key={property.id}
                            >

                                {/* IMAGE */}

                                <div className="property-image">

                                    <img
                                        src={property.image}
                                        alt={property.title}
                                        loading="lazy"
                                    />


                                    <div className="property-image-overlay" />


                                    {property.featured && (
                                        <span className="property-featured">
                                            Featured
                                        </span>
                                    )}


                                    <span className="property-type">
                                        {property.type}
                                    </span>

                                </div>


                                {/* CONTENT */}

                                <div className="property-card-content">

                                    <div className="property-location">
                                        {property.location}
                                    </div>

                                    <h3>
                                        {property.title}
                                    </h3>

                                    <div className="property-price">
                                        {property.price}
                                    </div>


                                    <div className="property-meta">

                                        <span>
                                            <strong>
                                                {property.beds}
                                            </strong>
                                            Beds
                                        </span>

                                        <span>
                                            <strong>
                                                {property.baths}
                                            </strong>
                                            Baths
                                        </span>

                                        <span>
                                            <strong>
                                                {property.area}
                                            </strong>
                                        </span>

                                    </div>


                                    <Link
                                        to={`/properties/${property.id}`}
                                        className="property-details-link"
                                    >
                                        View Property

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
                CONSULTATION CTA
            ===================================== */}

            <section className="properties-cta">

                <div className="properties-cta-inner">

                    <div>

                        <span>
                            FIND YOUR NEXT ADDRESS
                        </span>

                        <h2>
                            Looking for something
                            specific?
                        </h2>

                        <p>
                            Tell our property specialists
                            what you are looking for and
                            we'll help you find the right home.
                        </p>

                    </div>


                    <Link
                        to="/consultation"
                        className="properties-cta-button"
                    >
                        Book a Consultation
                    </Link>

                </div>

            </section>

        </main>
    );
}

export default Properties;