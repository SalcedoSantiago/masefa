
import Hero from '../components/HeroSection';
import About from '../components/AboutSection';
import Featured from '../components/FeaturedSection';
import Services from '../components/ServiceSection';
import Cta from '../components/cta';
import Works from '../components/WorkSection';
import OurTeam from '../components/OurTeamSection';
import Contact from '../components/ContactSection';
import Brands from '../components/BrandsSection'

const Home = () => {
    return (
        <>
            <Hero />
            <Brands />
            <About />
            <Featured />
            <Services />
            <Cta />
            <Works />
            <OurTeam />
            <Contact />
        </>
    )
}

export default Home
