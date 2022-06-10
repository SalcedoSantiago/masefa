
import Hero from '../components/HeroSection';
import About from '../components/AboutSection';
import Featured from '../components/FeaturedSection';
import Services from '../components/ServiceSection';
import Cta from '../components/cta';
import Works from '../components/WorkSection';
import OurTeam from '../components/OurTeamSection';
import Contact from '../components/sections/contact';


const Home = () => {
    return (
        <>
            <Hero />
            {/* <Testimonials />     */}
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
