import "./Hero.css";
<link rel="stylesheet" href="responsive.css"></link>
function HeroOverlay() {
    return (
        <div className="hero-overlay-content">

            <div className="hero-copy">

                <span className="hero-badge">
                    Premium Real Estate Collection
                </span>

                <h1>
                    Find Your
                    <br />
                    <span>Dream Home</span>
                </h1>

                <p>
                    Discover exceptional homes designed for
                    modern living, refined comfort and timeless
                    elegance.
                </p>

                <div className="hero-actions">

                    <button className="hero-btn hero-btn-primary">
                        Explore Properties
                    </button>

                    <button className="hero-btn hero-btn-secondary">
                        Contact Agent
                    </button>

                </div>

            </div>

            <div className="hero-scroll">

                <span className="hero-scroll-line"></span>

                <span>
                    Scroll to Explore
                </span>

            </div>

        </div>
    );
}

export default HeroOverlay;