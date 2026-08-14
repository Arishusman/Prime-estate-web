import { useState } from "react";
import "./Contact.css";


function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        property: "",
        date: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmitted(true);

        setFormData({
            name: "",
            email: "",
            phone: "",
            property: "",
            date: "",
            message: "",
        });
    };

    return (
        <main className="contact-page">

            {/* =====================================
                HERO
            ===================================== */}

            <section className="contact-hero">

                <div className="contact-hero-content">

                    <span className="contact-eyebrow">
                        PRIME ESTATE
                    </span>

                    <h1>
                        Let's find the
                        <span> right place.</span>
                    </h1>

                    <p>
                        Whether you're looking for a new home,
                        a premium investment or simply need
                        expert property advice, our team is
                        here to help.
                    </p>

                </div>

            </section>


            {/* =====================================
                CONTACT SECTION
            ===================================== */}

            <section className="contact-section">

                <div className="contact-container">


                    {/* =================================
                        CONTACT INFORMATION
                    ================================= */}

                    <div className="contact-info">

                        <span className="contact-label">
                            GET IN TOUCH
                        </span>

                        <h2>
                            Speak with a
                            property specialist.
                        </h2>

                        <p className="contact-description">
                            Our experienced advisors are available
                            to answer your questions, arrange private
                            viewings and help you find the property
                            that fits your lifestyle.
                        </p>


                        {/* PHONE */}

                        <a
                            href="tel:+923001234567"
                            className="contact-info-item"
                        >

                            <span className="contact-icon">
                                ☎
                            </span>

                            <span>
                                <small>
                                    CALL US
                                </small>

                                <strong>
                                    +92 300 1234567
                                </strong>
                            </span>

                        </a>


                        {/* EMAIL */}

                        <a
                            href="mailto:hello@primeestate.com"
                            className="contact-info-item"
                        >

                            <span className="contact-icon">
                                @
                            </span>

                            <span>
                                <small>
                                    EMAIL
                                </small>

                                <strong>
                                    hello@primeestate.com
                                </strong>
                            </span>

                        </a>


                        {/* OFFICE */}

                        <div className="contact-info-item">

                            <span className="contact-icon">
                                ⌖
                            </span>

                            <span>
                                <small>
                                    OFFICE
                                </small>

                                <strong>
                                    DHA Phase 8, Lahore
                                </strong>
                            </span>

                        </div>


                        {/* HOURS */}

                        <div className="contact-info-item">

                            <span className="contact-icon">
                                ◷
                            </span>

                            <span>
                                <small>
                                    OFFICE HOURS
                                </small>

                                <strong>
                                    Mon — Sat · 9:00 AM — 7:00 PM
                                </strong>
                            </span>

                        </div>

                    </div>


                    {/* =================================
                        CONSULTATION FORM
                    ================================= */}

                    <div className="consultation-card">

                        {!submitted ? (

                            <>

                                <div className="consultation-heading">

                                    <span>
                                        PRIVATE CONSULTATION
                                    </span>

                                    <h2>
                                        Tell us what
                                        you're looking for.
                                    </h2>

                                    <p>
                                        Complete the form and one
                                        of our property specialists
                                        will get in touch with you.
                                    </p>

                                </div>


                                <form
                                    className="consultation-form"
                                    onSubmit={handleSubmit}
                                >

                                    <div className="form-row">

                                        <div className="form-group">

                                            <label>
                                                Full Name
                                            </label>

                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Your name"
                                                required
                                            />

                                        </div>


                                        <div className="form-group">

                                            <label>
                                                Email Address
                                            </label>

                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="you@example.com"
                                                required
                                            />

                                        </div>

                                    </div>


                                    <div className="form-row">

                                        <div className="form-group">

                                            <label>
                                                Phone Number
                                            </label>

                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+92 300 1234567"
                                                required
                                            />

                                        </div>


                                        <div className="form-group">

                                            <label>
                                                Property Type
                                            </label>

                                            <select
                                                name="property"
                                                value={formData.property}
                                                onChange={handleChange}
                                                required
                                            >

                                                <option value="">
                                                    Select property type
                                                </option>

                                                <option value="Villa">
                                                    Villa
                                                </option>

                                                <option value="House">
                                                    House
                                                </option>

                                                <option value="Apartment">
                                                    Apartment
                                                </option>

                                                <option value="Penthouse">
                                                    Penthouse
                                                </option>

                                                <option value="Investment">
                                                    Investment
                                                </option>

                                            </select>

                                        </div>

                                    </div>


                                    <div className="form-group">

                                        <label>
                                            Preferred Viewing Date
                                        </label>

                                        <input
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                        />

                                    </div>


                                    <div className="form-group">

                                        <label>
                                            How can we help?
                                        </label>

                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us about the property you're looking for..."
                                            rows="5"
                                        />

                                    </div>


                                    <button
                                        type="submit"
                                        className="consultation-submit"
                                    >
                                        Request Consultation

                                        <span>
                                            →
                                        </span>

                                    </button>

                                </form>

                            </>

                        ) : (

                            /* =================================
                               SUCCESS
                            ================================= */

                            <div className="consultation-success">

                                <div className="success-icon">
                                    ✓
                                </div>

                                <span>
                                    REQUEST RECEIVED
                                </span>

                                <h2>
                                    Thank you.
                                </h2>

                                <p>
                                    Your consultation request has
                                    been received. One of our property
                                    specialists will contact you shortly.
                                </p>

                                <button
                                    type="button"
                                    onClick={() => setSubmitted(false)}
                                >
                                    Send Another Request
                                </button>

                            </div>

                        )}

                    </div>

                </div>

            </section>

        </main>
    );
}

export default Contact;