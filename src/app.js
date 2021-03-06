import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme'
import GlobalStyle from "./styles/GlobalStyled";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

import Home from './pages/Home'
import Header from "./components/header"
import Footer from "./components/Footer/index";

const App = () => {


    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Header />
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Router>
                <Footer />
            </ThemeProvider>
        </>
    )
}

export default App