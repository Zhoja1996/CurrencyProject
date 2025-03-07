import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import logo from '../../assets/img/logo.png';

const Navbar = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const linkStyle = "text-xl hover:brightness-125 transition-all duration-250 cursor-pointer";
    const activeLinkStyle = "text-xl underline underline-offset-8 brightness-125 transition-all duration-250 cursor-pointer";

    // Анимации
    const navbarVariant = {
        hidden: { y: -80, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const linkVariant = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    const staggerVariant = {
        visible: { transition: { staggerChildren: 0.2 } }
    };

    return (
        <motion.nav 
            className="flex justify-between items-center pt-5 pb-5 px-18 rounded-b-xl bg-gradient-to-r from-gray-800 via-yellow-500 to-gray-800 shadow-lg shadow-gray-900 text-black font-semibold media-navbar"
            initial="hidden"
            animate="visible"
            variants={navbarVariant}
        >
            {/* Логотип */}
            <NavLink to='/'>
                <motion.img 
                    src={logo} 
                    alt="logo" 
                    className="hover:scale-125 transition-transform duration-500 w-15 h-auto cursor-pointer rounded-xl"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                />
            </NavLink>

            {/* Навигационные ссылки */}
            <motion.div className="flex justify-center items-center gap-10" variants={staggerVariant} initial="hidden" animate="visible">
                <motion.div variants={linkVariant}>
                    <NavLink to="/" className={({ isActive }) => isActive ? activeLinkStyle : linkStyle}>{t("home")}</NavLink>
                </motion.div>
                <motion.div variants={linkVariant}>
                    <NavLink to="/currency" className={({ isActive }) => isActive ? activeLinkStyle : linkStyle}>{t("currency")}</NavLink>
                </motion.div>
                <motion.div variants={linkVariant}>
                    <NavLink to="/currencyConverter" className={({ isActive }) => isActive ? activeLinkStyle : linkStyle}>{t("converter")}</NavLink>
                </motion.div>
            </motion.div>

            {/* Переключатель языка */}
            <motion.div className="flex gap-3 media-language" variants={staggerVariant} initial="hidden" animate="visible">
                <motion.button 
                    onClick={() => changeLanguage('ru')} 
                    className="cursor-pointer px-2 py-1 border border-black rounded-md hover:bg-gray-200 active:bg-gray-300"
                    whileHover={{ scale: 1.1 }}
                >
                    🇺🇦 UA
                </motion.button>
                <motion.button 
                    onClick={() => changeLanguage('en')} 
                    className="cursor-pointer px-2 py-1 border border-black rounded-md hover:bg-gray-200 active:bg-gray-300"
                    whileHover={{ scale: 1.1 }}
                >
                    🇬🇧 EN
                </motion.button>
            </motion.div>
        </motion.nav>
    );
}

export default Navbar;
