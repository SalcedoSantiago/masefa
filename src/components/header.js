import useAnimatedNavToggler from '../helpers/useToggle';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar';


import HeaderInfo from './HeaderInfoSection'



const Header = () => {
    const { animation, toggleNavbar } = useAnimatedNavToggler();

    return (
        <>
            <HeaderInfo />
            <Navbar toggleNavbar={toggleNavbar} />
            <Sidebar toggleNavbar={toggleNavbar} animation={animation} />
        </>
    )

}

export default Header;
