
import Hero from '../components/HeroSection';
import About from '../components/sections/about';
import Featured from '../components/sections/featured';
import Services from '../components/sections/services';
import Cta from '../components/sections/cta';
import Works from '../components/sections/works';
import Team from '../components/sections/team';
import Contact from '../components/sections/contact';


const Home = () => {
    return (
        <>
            <Hero />
            {/* <Testimonials /> */}
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
