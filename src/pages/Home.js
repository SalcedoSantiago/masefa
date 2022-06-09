
import Hero from '../components/HeroSection';
import About from '../components/AboutSection';
import Featured from '../components/FeaturedSection';
import Services from '../components/ServiceSection';
import Cta from '../components/cta';
import Works from '../components/sections/works';
import Team from '../components/sections/team';
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
            <Team />
            <Contact />
        </>
    )
}

export default Home
