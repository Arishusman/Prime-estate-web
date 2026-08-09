import "./PropertySearch.css";

function PropertySearch() {
  return (
    <section className="property-search">

      <div className="search-card">

        <div className="search-tabs">

          <button className="active">Buy</button>

          <button>Rent</button>

          <button>Commercial</button>

        </div>

        <div className="search-form">

          <div className="search-group">

            <label>Location</label>

            <select>
              <option>New York</option>
              <option>California</option>
              <option>Florida</option>
              <option>Texas</option>
            </select>

          </div>

          <div className="search-group">

            <label>Property Type</label>

            <select>
              <option>Villa</option>
              <option>Apartment</option>
              <option>Penthouse</option>
              <option>Office</option>
            </select>

          </div>

          <div className="search-group">

            <label>Budget</label>

            <select>
              <option>$100K - $300K</option>
              <option>$300K - $600K</option>
              <option>$600K - $1M</option>
              <option>$1M+</option>
            </select>

          </div>

          <button className="search-btn">
            Search Property
          </button>

        </div>

      </div>

    </section>
  );
}

export default PropertySearch;