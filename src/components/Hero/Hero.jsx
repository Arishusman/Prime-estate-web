import "./Hero.css";

function Hero() {
    return (
        <section className="hero">

            {/* Cinematic Villa Background */}
            <div className="hero-background">
                <img
                    src="/images/hero/villa-hero.webp"
                    alt="Luxury Villa"
                    className="hero-image"
                />
            </div>

            {/* Dark Cinematic Overlay */}
            <div className="hero-overlay"></div>

            {/* Hero Content */}
            <div className="hero-content">

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

                <div className="hero-buttons">

                    <button className="hero-btn hero-btn-primary">
                        Explore Properties
                    </button>

                    <button className="hero-btn hero-btn-secondary">
                        Contact Agent
                    </button>

                </div>

            </div>

            {/* Scroll Indicator */}
            <div className="hero-scroll">

                <span className="hero-scroll-line"></span>

                <span>Scroll to Explore</span>

            </div>

        </section>
    );
}

export default Hero;