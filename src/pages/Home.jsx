import Hero from "../components/Hero/Hero";
import PropertySearch from "../components/PropertySearch/PropertySearch";
import Stats from "../components/Stats/Stats";
import FeaturedProperties from "../components/FeaturedProperties/FeaturedProperties";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import Agents from "../components/Agents/Agents";
import Testimonials from "../components/Testimonials/Testimonials";
import CTA from "../components/CTA/CTA";


function Home() {

    return (
        <>

            <Hero />

            <PropertySearch />

            <Stats />

            <FeaturedProperties />

            <WhyChoose />

            <Agents />

            <Testimonials />

            <CTA />

        </>
    );

}


export default Home;