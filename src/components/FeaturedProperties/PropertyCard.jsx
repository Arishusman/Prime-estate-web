import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMapMarkerAlt,
  FaHeart,
  FaArrowRight,
} from "react-icons/fa";

function PropertyCard({ property }) {
  return (
    <article className="property-card">

      <div className="property-image">

        <img
          src={property.image}
          alt={property.title}
          loading="lazy"
        />

        <span className="property-badge">
          Featured
        </span>

        <button
          className="wishlist-btn"
          aria-label="Add to Wishlist"
        >
          <FaHeart />
        </button>

      </div>

      <div className="property-content">

        <span className="property-location">

          <FaMapMarkerAlt />

          {property.location}

        </span>

        <h3>
          {property.title}
        </h3>

        <div className="property-info">

          <div>

            <FaBed />

            <span>{property.beds} Beds</span>

          </div>

          <div>

            <FaBath />

            <span>{property.baths} Baths</span>

          </div>

          <div>

            <FaRulerCombined />

            <span>{property.area}</span>

          </div>

        </div>

        <div className="property-footer">

          <h4>
            {property.price}
          </h4>

          <button className="details-btn">

            View Details

            <FaArrowRight />

          </button>

        </div>

      </div>

    </article>
  );
}

export default PropertyCard;