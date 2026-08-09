import React from "react";
import "./Testimonials.css";


const Testimonials = () => {


    const testimonials = [

        {
            image: `${import.meta.env.BASE_URL}images/Testimonials/client-1.webp`,
            name: "David Wilson",
            role: "Luxury Home Buyer",
            review:
            "PrimeEstate made finding our dream home effortless. Their team understood exactly what we needed.",
            rating: "5.0"
        },


        {
            image: `${import.meta.env.BASE_URL}images/Testimonials/client-2.webp`,
            name: "Sarah Johnson ",
            role: "Property Investor",
            review:
            "Professional service, premium properties and excellent market knowledge. Highly recommended.",
            rating: "5.0"
        },


        {
            image: `${import.meta.env.BASE_URL}images/Testimonials/client-3.webp`,
            name: "Emma Davis",
            role: "Villa Owner",
            review:
            "The entire experience was smooth from start to finish. The team was truly exceptional.",
            rating: "5.0"
        }

    ];



    return (


        <section className="testimonial-section">


            <div className="testimonial-container">



                <div className="testimonial-header">


                    <span>
                        CLIENT STORIES
                    </span>


                    <h2>
                        What Our Clients Say
                    </h2>


                </div>




                <div className="testimonial-box">


                    <div className="quote">
                        "
                    </div>



                    <p className="testimonial-text">

                        {testimonials[0].review}

                    </p>



                    <img
                        className="client-image"
                        src={testimonials[0].image}
                        alt={testimonials[0].name}
                    />



                    <h3>
                        {testimonials[0].name}
                    </h3>



                    <p className="client-role">
                        {testimonials[0].role}
                    </p>



                    <div className="rating">

                        ⭐⭐⭐⭐⭐

                    </div>



                </div>




            </div>



        </section>


    );


};


export default Testimonials;