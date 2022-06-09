
import Hero from '../components/HeroSection';
import About from '../components/AboutSection';
import Featured from '../components/FeaturedSection';
import Featureds from '../components/sections/featured';
import Services from '../components/ServiceSection';
import ServicesOld from '../components/sections/services';
import Cta from '../components/sections/cta';
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
            <ServicesOld />
            <Cta />
            <Works />
            <Team />
            <Contact />
        </>
    )
}

export default Home
