import { ThemeProvider } from 'styled-components';
import { theme } from './components/styles/theme'
import GlobalStyle from "./components/styles/GlobalStyled";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

import Home from './pages/Home'
import Header from "./components/header"
import Footer from "./components/footer";

const App = () => {


    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Header />
                <Router>
                    <Routes>
                        <Route path="/" component={<Home />} />
                    </Routes>
                </Router>
                <Footer />
            </ThemeProvider>
        </>
    )
}

export default App