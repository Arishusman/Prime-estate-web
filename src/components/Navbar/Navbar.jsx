import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import "../../responsive.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="navbar">

            <div className="navbar-container">

                {/* =====================================
                    LOGO
                ===================================== */}

                <Link
                    to="/"
                    className="navbar-logo"
                    onClick={closeMenu}
                >
                    <span>PRIME</span>
                    <strong>ESTATE</strong>
                </Link>


                {/* =====================================
                    DESKTOP NAVIGATION
                ===================================== */}

                <nav
                    className={`navbar-menu ${
                        menuOpen ? "navbar-menu-open" : ""
                    }`}
                >

                    <NavLink
                        to="/"
                        onClick={closeMenu}
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        Home
                    </NavLink>


                    <NavLink
                        to="/properties"
                        onClick={closeMenu}
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        Properties
                    </NavLink>


                    <NavLink
                        to="/agents"
                        onClick={closeMenu}
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        Agents
                    </NavLink>


                    <NavLink
                        to="/about"
                        onClick={closeMenu}
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        About
                    </NavLink>


                    <NavLink
                        to="/contact"
                        onClick={closeMenu}
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        Contact
                    </NavLink>

                </nav>


                {/* =====================================
                    CONSULTATION BUTTON
                ===================================== */}

                <Link
                    to="/consultation"
                    className="navbar-consultation"
                >
                    Book Consultation
                    <span>→</span>
                </Link>


                {/* =====================================
                    MOBILE MENU BUTTON
                ===================================== */}

                <button
                    type="button"
                    className={`navbar-toggle ${
                        menuOpen ? "open" : ""
                    }`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                >

                    <span></span>
                    <span></span>
                    <span></span>

                </button>

            </div>

        </header>
    );
}

export default Navbar;