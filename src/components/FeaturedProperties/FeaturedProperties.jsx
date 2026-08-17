import { Link } from "react-router-dom";
import "./FeaturedProperties.css";

const properties = [
    {
        id: "modern-luxury-villa",
        title: "Modern Luxury Villa",
        location: "DHA Phase 8, Lahore",
        price: "18.5 Crore",
        type: "Villa",
        beds: 5,
        area: "5,500 sq ft",
        image: `${import.meta.env.BASE_URL}images/properties/property-1.webp`,
        featured: true,
    },

    {
        id: "premium-family-home",
        title: "Premium Family Home",
        location: "DHA Phase 6, Islamabad",
        price: "7.5 Crore",
        type: "House",
        beds: 4,
        area: "3,200 sq ft",
        image: `${import.meta.env.BASE_URL}images/properties/property-3.webp`,
        featured: true,
    },

    {
        id: "skyline-penthouse",
        title: "Skyline Penthouse",
        location: "Clifton, Karachi",
        price: "12.5 Crore",
        type: "Penthouse",
        beds: 4,
        area: "4,200 sq ft",
        image: `${import.meta.env.BASE_URL}images/properties/property-5.webp`,
        featured: true,
    },

    {
        id: "contemporary-residence",
        title: "Contemporary Residence",
        location: "Gulberg, Lahore",
        price: "9.8 Crore",
        type: "House",
        beds: 4,
        area: "3,800 sq ft",
        image: `${import.meta.env.BASE_URL}images/properties/property-2.webp`,
        featured: false,
    },
];

function FeaturedProperties() {
    return (
        <section className="featured-properties">

            <div className="featured-container">

                {/* =====================================
                    SECTION HEADING
                ===================================== */}

                <div className="section-heading">

                    <span className="section-badge">
                        OUR COLLECTION
                    </span>

                    <h2>
                        Exceptional Properties
                    </h2>

                    <p>
                        Discover a carefully selected collection
                        of premium villas, residences and luxury
                        properties designed for exceptional living.
                    </p>

                </div>


                {/* =====================================
                    PROPERTY GRID
                ===================================== */}

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

                                {property.featured && (
                                    <span className="property-badge">
                                        Featured
                                    </span>
                                )}

                            </div>


                            {/* CONTENT */}

                            <div className="property-content">

                                <div className="property-location">
                                    <span>●</span>
                                    {property.location}
                                </div>


                                <h3>
                                    {property.title}
                                </h3>


                                {/* PROPERTY INFORMATION */}

                                <div className="property-info">

                                    <div>
                                        <strong>
                                            {property.beds}
                                        </strong>

                                        <span>
                                            Beds
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

                                </div>


                                {/* FOOTER */}

                                <div className="property-footer">

                                    <h4>
                                        {property.price}
                                    </h4>

                                    <Link
                                        to={`/properties/${property.id}`}
                                        className="details-btn"
                                    >
                                        View Details
                                        <span>→</span>
                                    </Link>

                                </div>

                            </div>

                        </article>

                    ))}

                </div>


                {/* =====================================
                    VIEW ALL
                ===================================== */}

                <div className="featured-footer">

                    <Link
                        to="/properties"
                        className="view-all-btn"
                    >
                        View All Properties
                        <span>→</span>
                    </Link>

                </div>

            </div>

        </section>
    );
}

export default FeaturedProperties;