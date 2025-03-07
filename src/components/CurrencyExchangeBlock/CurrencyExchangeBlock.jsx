import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const defaultCurrencies = ['USD', 'EUR', 'PLN', 'CAD'];

const CurrencyExchangeBlock = ({ value, currency, onChangeValue, onChangeCurrency, ratesRef }) => {
    const { t } = useTranslation();

    // Анимация появления блока
    const blockVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
    };

    // Анимация появления кнопок по очереди
    const buttonVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.3 }
        })
    };

    return (
        <motion.div 
            className="flex justify-center items-center gap-5 border-1 border-white rounded-xl py-4 px-6 backdrop-blur-sm xs"
            variants={blockVariants}
            initial="hidden"
            animate="visible"
        >
            <label className="flex items-start flex-col justify-between gap-4">
                <div className="flex items-center justify-between gap-20 sm:gap-30 text-white">
                    <span className="text-gray-400 text-xl sm:text-2xl">{t('ihave')}</span>
                    <div className="flex gap-4 items-center justify-center">
                        {defaultCurrencies.map((cur, i) => (
                            <motion.button 
                                key={cur}
                                className={`sm:text-xl text-base px-3 py-1 rounded-md transition ${currency === cur ? "bg-gray-600" : "bg-transparent"}`}
                                onClick={() => onChangeCurrency(cur)}
                                variants={buttonVariants}
                                custom={i}  // передаем индекс для задержки появления
                                initial="hidden"
                                animate="visible"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                {cur}
                            </motion.button>
                        ))}
                    </div>
                </div>

                <motion.input 
                    type="number" 
                    value={value} 
                    onChange={(e) => onChangeValue(e.target.value)}
                    className="text-white text-3xl sm:text-4xl relative"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
                    whileFocus={{ scale: 1.05, transition: { duration: 0.2 } }}
                />
                
                <motion.span 
                    className="text-gray-400 text-base sm:text-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.2 } }}
                >
                    1 {currency} = {ratesRef.current[currency]}
                </motion.span>
            </label>
        </motion.div>
    );
}

export default CurrencyExchangeBlock;
