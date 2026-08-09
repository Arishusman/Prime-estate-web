import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import Agents from "./pages/Agents";
import AgentDetails from "./pages/AgentDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";


function App() {

    return (

        <BrowserRouter>

            <Navbar />

            <Routes>

                {/* ================================
                    HOME
                ================================= */}

                <Route
                    path="/"
                    element={<Home />}
                />


                {/* ================================
                    PROPERTIES
                ================================= */}

                <Route
                    path="/properties"
                    element={<Properties />}
                />

                <Route
                    path="/properties/:id"
                    element={<PropertyDetails />}
                />


                {/* ================================
                    AGENTS
                ================================= */}

                <Route
                    path="/agents"
                    element={<Agents />}
                />

                <Route
                    path="/agents/:id"
                    element={<AgentDetails />}
                />


                {/* ================================
                    ABOUT
                ================================= */}

                <Route
                    path="/about"
                    element={<About />}
                />


                {/* ================================
                    CONTACT
                ================================= */}

                <Route
                    path="/contact"
                    element={<Contact />}
                />


                {/* ================================
                    CONSULTATION
                ================================= */}

                <Route
                    path="/consultation"
                    element={<Contact />}
                />


                {/* ================================
                    404
                ================================= */}

                <Route
                    path="*"
                    element={<NotFound />}
                />

            </Routes>

            <Footer />

        </BrowserRouter>

    );
}


export default App;