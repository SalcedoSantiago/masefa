import Header from "./components/header"
import Hero from "./components/sections/hero"
import Featured from "./components/sections/featured"
import Services from "./components/sections/services";
import About from "./components/sections/about";
import Cta from "./components/sections/cta";
import Works from "./components/sections/works";
import Testimonials from "./components/sections/testimonials";
import Team from "./components/sections/team";
import Contact from "./components/sections/contact";
import Footer from "./components/footer";


import { ThemeProvider } from 'styled-components';
import { theme } from './components/styles/theme'

import GlobalStyle from "./components/styles/GlobalStyled";



const Masefa = () => {


    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Header />
                <Hero />
                <Testimonials />
                <About />
                <Featured />
                <Services />
                <Cta />
                <Works />
                <Team />
                <Contact />
                <Footer />
            </ThemeProvider>
        </>
    )
}

export default Masefa