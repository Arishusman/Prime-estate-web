import { Link } from "react-router-dom";
import "./Hero.css";
import "../../responsive.css";

function Hero() {
    const heroImage =
        `${import.meta.env.BASE_URL}images/hero/villa-hero.webp`;

    return (
        <section className="hero">

            {/* =====================================
                CINEMATIC VILLA BACKGROUND
            ===================================== */}

            <div className="hero-background">

                <img
                    src={heroImage}
                    alt="Luxury Villa"
                    className="hero-image"
                />

            </div>


            {/* =====================================
                DARK CINEMATIC OVERLAY
            ===================================== */}

            <div className="hero-overlay"></div>


            {/* =====================================
                HERO CONTENT
            ===================================== */}

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

                    <Link
                        to="/properties"
                        className="hero-btn hero-btn-primary"
                    >
                        Explore Properties
                    </Link>


                    <Link
                        to="/contact"
                        className="hero-btn hero-btn-secondary"
                    >
                        Contact Agent
                    </Link>

                </div>

            </div>


            {/* =====================================
                SCROLL INDICATOR
            ===================================== */}

            <div className="hero-scroll">

                <span className="hero-scroll-line"></span>

                <span>
                    Scroll to Explore
                </span>

            </div>

        </section>
    );
}

export default Hero;