import useAnimatedNavToggler from '../helpers/useToggle';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar';

const Header = () => {
    const { animation, toggleNavbar } = useAnimatedNavToggler();

    return (
        <>
            <Navbar toggleNavbar={toggleNavbar} />
            <Sidebar toggleNavbar={toggleNavbar} animation={animation} />
        </>
    )

}

export default Header;
