import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Main = () => {
    const { t } = useTranslation();

    // Анимации для секций
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 1 },
        visible: { transition: { staggerChildren: 0.2 } }
    };

    return (
        <motion.main 
            className="py-30 media-main"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
        >
            <motion.div className="px-6 text-center text-white" variants={fadeInUp}>
                <motion.h2 className="text-4xl font-semibold mb-4" variants={fadeInUp}>
                    {t("welcome")}
                </motion.h2>
                <motion.p className="text-lg mb-6" variants={fadeInUp}>
                    {t("description")}
                </motion.p>

                <motion.div 
                    className="p-18 grid lg:grid-cols-3 gap-8 mb-8 text-white"
                    variants={staggerContainer}
                >
                    {/* Блок популярных валют */}
                    <motion.div 
                        className="p-10 bg-black/50 backdrop-blur-md rounded-xl shadow-lg"
                        variants={fadeInUp}
                    >
                        <h3 className="text-2xl font-semibold mb-4">{t("popularCurrencies")}</h3>
                        <ul className="space-y-2">
                            <li>💵 USD - {t("usd")}</li>
                            <li>💶 EUR - {t("eur")}</li>
                            <li>💷 GBP - {t("gbp")}</li>
                            <li>💴 JPY - {t("jpy")}</li>
                        </ul>
                    </motion.div>

                    {/* Блок курсов валют */}
                    <motion.div 
                        className="p-10 bg-black/50 backdrop-blur-md rounded-xl shadow-lg"
                        variants={fadeInUp}
                    >
                        <h3 className="text-2xl font-semibold mb-4">{t("exchangeRates")}</h3>
                        <p className="text-lg mb-4">{t("exchangeRatesDesc")}</p>
                        <NavLink to='/currency' className="text-blue-600 font-bold hover:underline">
                            {t("goToRates")} →
                        </NavLink>
                    </motion.div>

                    {/* Блок конвертера валют */}
                    <motion.div 
                        className="p-10 bg-black/50 backdrop-blur-md rounded-xl shadow-lg"
                        variants={fadeInUp}
                    >
                        <h3 className="text-2xl font-semibold mb-4">{t("converter")}</h3>
                        <p className="text-lg mb-4">{t("converterDesc")}</p>
                        <NavLink to='/currencyConverter' className="text-blue-600 font-bold hover:underline">
                            {t("goToConverter")} →
                        </NavLink>
                    </motion.div>
                </motion.div>

                {/* Блок финансовых новостей */}
                <motion.section id="news" className="py-8 rounded-lg text-white" variants={fadeInUp}>
                    <h3 className="text-3xl font-semibold mb-4">{t("financialNews")}</h3>
                    <ul className="space-y-4">
                        <li>📉 {t("news1")}</li>
                        <li>📊 {t("news2")}</li>
                        <li>💹 {t("news3")}</li>
                    </ul>
                </motion.section>
            </motion.div>
        </motion.main>
    );
}

export default Main;
