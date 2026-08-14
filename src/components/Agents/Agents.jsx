import React from "react";
import "./Agents.css";
import "../../responsive.css";


const Agents = () => {


    const agents = [

        {
            image: `${import.meta.env.BASE_URL}images/agents/agent-1.webp`,
            name: "James Anderson",
            role: "Luxury Property Consultant",
            experience: "10 Years",
            sold: "250+ Properties",
            rating: "4.9"
        },


        {
            image: `${import.meta.env.BASE_URL}images/agents/agent-2.webp`,
            name: "Sophia Williams",
            role: "Senior Real Estate Advisor",
            experience: "8 Years",
            sold: "180+ Properties",
            rating: "4.8"
        },


        {
            image: `${import.meta.env.BASE_URL}images/agents/agent-3.webp`,
            name: "Michael Brown",
            role: "Investment Specialist",
            experience: "12 Years",
            sold: "320+ Properties",
            rating: "5.0"
        }

    ];



    return (


        <section className="agents-section">


            <div className="agents-container">


                {/* HEADER */}


                <div className="agents-header">


                    <span className="agents-tag">
                        MEET OUR AGENTS
                    </span>


                    <h2>
                        Our Experts Behind
                        <br />
                        Your Perfect Home
                    </h2>


                    <p>
                        Meet our experienced professionals who
                        help you discover premium properties and
                        smart investment opportunities.
                    </p>


                </div>




                {/* AGENTS CARDS */}


                <div className="agents-grid">


                    {
                        agents.map((agent,index)=>(


                            <div 
                                className="agent-card"
                                key={index}
                            >



                                <div className="agent-image">


                                    <img 
                                        src={agent.image}
                                        alt={agent.name}
                                    />



                                    <div className="agent-overlay">


                                        <div className="agent-social">


                                            <a href="#">
                                                <i className="fa-solid fa-phone"></i>
                                            </a>


                                            <a href="#">
                                                <i className="fa-solid fa-envelope"></i>
                                            </a>


                                            <a href="#">
                                                <i className="fa-brands fa-whatsapp"></i>
                                            </a>


                                        </div>


                                    </div>


                                </div>





                                <div className="agent-info">


                                    <h3>
                                        {agent.name}
                                    </h3>


                                    <span>
                                        {agent.role}
                                    </span>



                                    <div className="agent-details">


                                        <p>
                                            Experience:
                                            <b>{agent.experience}</b>
                                        </p>


                                        <p>
                                            Sold:
                                            <b>{agent.sold}</b>
                                        </p>


                                        <p>
                                            Rating:
                                            <b>⭐ {agent.rating}</b>
                                        </p>


                                    </div>


                                </div>



                            </div>


                        ))
                    }



                </div>



            </div>



        </section>


    );


};



export default Agents;