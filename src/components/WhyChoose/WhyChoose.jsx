import React from "react";
import "./WhyChoose.css";

const WhyChoose = () => {

    const features = [
        {
            icon: "✓",
            title: "Verified Properties",
            text: "Every property is carefully verified to provide a safe and trustworthy experience."
        },
        {
            icon: "✓",
            title: "Prime Locations",
            text: "Discover properties in the most desirable and valuable locations."
        },
        {
            icon: "✓",
            title: "Expert Agents",
            text: "Work with experienced professionals who understand the market."
        },
        {
            icon: "✓",
            title: "Best Investment",
            text: "Find opportunities designed for long-term value and growth."
        }
    ];


    return (

        <section className="why-section">

            <div className="why-container">


                {/* LEFT CONTENT */}

                <div className="why-content">


                    <span className="why-tag">
                        WHY CHOOSE PRIMEESTATE
                    </span>


                    <h2>
                        Luxury Living
                        <br />
                        Starts With Trust
                    </h2>


                    <p className="why-description">
                        We connect you with exceptional properties,
                        premium locations and trusted experts to make
                        your real estate journey effortless.
                    </p>



                    <div className="why-features">


                        {
                            features.map((item, index)=>(

                                <div 
                                    className="why-feature"
                                    key={index}
                                >

                                    <span className="feature-icon">
                                        {item.icon}
                                    </span>


                                    <div>

                                        <h4>
                                            {item.title}
                                        </h4>

                                        <p>
                                            {item.text}
                                        </p>

                                    </div>


                                </div>

                            ))
                        }


                    </div>



                    <button className="why-btn">
                        Explore Properties
                    </button>


                </div>




                {/* RIGHT IMAGE GALLERY */}


                <div className="why-gallery">


                    <div className="gallery-large">

                        <img 
                            src="/images/why/why-image-1.webp"
                            alt="Luxury Property"
                        />

                    </div>



                    <div className="gallery-small img-2">

                        <img 
                            src="/images/why/why-image-2.webp"
                            alt="Luxury Home"
                        />

                    </div>



                    <div className="gallery-small img-3">

                        <img 
                            src="/images/why/why-image-3.webp"
                            alt="Modern Villa"
                        />

                    </div>



                    <div className="gallery-medium img-4">

                        <img 
                            src="/images/why/why-image-4.webp"
                            alt="Premium Interior"
                        />

                    </div>



                    <div className="gallery-small img-5">

                        <img 
                            src="/images/why/why-image-5.webp"
                            alt="Luxury Room"
                        />

                    </div>



                    <div className="gallery-small img-6">

                        <img 
                            src="/images/why/why-image-6.webp"
                            alt="Beautiful Property"
                        />

                    </div>


                </div>


            </div>


        </section>

    );

};


export default WhyChoose;