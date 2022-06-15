import { createContext, useState, useContext, useEffect } from "react";

const AppContext = createContext({});

const useAppContext = () => {
    return useContext(AppContext)
}

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}


const AppContextProvider = (props) => {
    const {
        children,
    } = props;

    const { width, height } = useWindowDimensions();

    return (
        <AppContext.Provider
            value={{
                height,
                width
            }}
        >
            {children}
        </AppContext.Provider>

    )
}

export {
    AppContextProvider,
    useAppContext
}




