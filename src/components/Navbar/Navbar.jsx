import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.png';

const Navbar = () => {
    const linkStyle = "text-xl hover:brightness-125 transition-all duration-250 cursor-pointer";
    const activeLinkStyle = "text-xl underline underline-offset-8 brightness-125 transition-all duration-250 cursor-pointer";

    return (
        <nav className="flex justify-between items-center pt-5 pb-5 px-18 rounded-b-xl bg-gradient-to-r from-gray-800 via-yellow-500 to-gray-800 shadow-lg shadow-gray-900 text-black font-semibold media-navbar">
            
            {/* Логотип */}
            <NavLink to='/'>
                <img src={logo} alt="logo" className="hover:scale-125 transition-transform duration-500 w-15 h-auto cursor-pointer rounded-xl"/>
            </NavLink>

            {/* Навигационные ссылки */}
            <div className="flex justify-center items-center gap-10">
                <NavLink to="/" className={({ isActive }) => isActive ? activeLinkStyle : linkStyle}>Головна</NavLink>
                <NavLink to="/currency" className={({ isActive }) => isActive ? activeLinkStyle : linkStyle}>Курси валют</NavLink>
                <NavLink to="/currencyConverter" className={({ isActive }) => isActive ? activeLinkStyle : linkStyle}>Конвертер валют</NavLink>
            </div>

            {/* Контакты */}
            <div className="flex justify-center items-center gap-10">
                <NavLink to='/contacts' className={({ isActive }) => isActive ? activeLinkStyle : linkStyle}>Контакти</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
