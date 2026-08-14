import "./Footer.css";
import "../../responsive.css";

function Footer() {


    return (

        <footer className="footer">


            <div className="footer-container">



                {/* BRAND */}


                <div className="footer-column footer-brand">


                    <h2>
                        PrimeEstate
                    </h2>


                    <p>
                        Creating exceptional real estate experiences
                        through premium properties and trusted expertise.
                    </p>



                    <div className="footer-social">


                        <a href="#">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>


                        <a href="#">
                            <i className="fa-brands fa-instagram"></i>
                        </a>


                        <a href="#">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>


                        <a href="#">
                            <i className="fa-brands fa-whatsapp"></i>
                        </a>


                    </div>


                </div>





                {/* QUICK LINKS */}


                <div className="footer-column">


                    <h4>
                        Quick Links
                    </h4>


                    <ul>

                        <li>Home</li>

                        <li>Properties</li>

                        <li>Agents</li>

                        <li>About Us</li>

                        <li>Contact</li>

                    </ul>


                </div>





                {/* SERVICES */}


                <div className="footer-column">


                    <h4>
                        Services
                    </h4>


                    <ul>

                        <li>Luxury Homes</li>

                        <li>Property Investment</li>

                        <li>Real Estate Consulting</li>

                        <li>Property Management</li>

                        <li>Market Analysis</li>

                    </ul>


                </div>





                {/* CONTACT */}


                <div className="footer-column">


                    <h4>
                        Contact
                    </h4>


                    <p>
                        New York, USA
                    </p>


                    <p>
                        +1 234 567 890
                    </p>


                    <p>
                        info@primeestate.com
                    </p>


                    <p>
                        Mon - Sat: 9AM - 6PM
                    </p>


                </div>



            </div>





            <div className="copyright">


                © 2026 PrimeEstate. All Rights Reserved.


            </div>



        </footer>

    );

}


export default Footer;