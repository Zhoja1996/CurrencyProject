import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import useCurrency from "../helpers/hooks/useCurrency";
import Spinner from "../spinner/spinner";

const CurrencyList = () => {
    const { t } = useTranslation();
    const { data, loading, error } = useCurrency();
    const [currentItems] = useState(15);
    const [currentPage, setCurrentPage] = useState(1);
    const [value, setValue] = useState('');
    const [filterActive, setFilterActive] = useState(false);

    const changeFilterActive = (value) => {
        setValue(value);
        setFilterActive(!!value.trim());
        setCurrentPage(1);
    };

    const filteredData = useMemo(() => {
        if (!data) return [];
        let sortedData = [...data].sort((a, b) => a.txt.localeCompare(b.txt));

        if (filterActive) {
            return sortedData.filter((item) => 
                item.txt.toLowerCase().includes(value.toLowerCase()) ||
                item.cc.toLowerCase().includes(value.toLowerCase())
            );
        }

        return sortedData;
    }, [data, value, filterActive]);

    const paginatedData = useMemo(() => {
        const startIndex = (currentPage - 1) * currentItems;
        return filteredData.slice(startIndex, startIndex + currentItems);
    }, [filteredData, currentPage, currentItems]);

    const totalPages = Math.ceil(filteredData.length / currentItems);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
    };

    const listVariants = {
        visible: { transition: { staggerChildren: 0.15 } }
    };

    const renderItems = () => {
        return paginatedData.map((item, i) => (
            <motion.div 
                key={i} 
                className="bg-white bg-opacity-20 rounded-xl p-3 lg:p-6 text-black shadow-lg"
                variants={itemVariants}
            >
                <h2 className="text-xl font-bold lg:text-2xl">{item.txt} ({item.cc})</h2>
                <p className="text-sm mt-2 lg:text-lg">Курс: <span className="font-semibold">{item.rate}</span></p>
                <p className="text-sm mt-1">Дата: {item.exchangedate}</p>
            </motion.div>
        ));
    };

    const states = {
        loading: <Spinner />,
        success: (
            <motion.div 
                className="container mx-auto p-10 min-h-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <motion.div className="flex flex-col items-center justify-center mb-10">
                    <motion.h1 
                        className="text-white text-4xl font-bold text-center mb-10"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {t('currency')}
                    </motion.h1>

                    <motion.input
                        type="text"
                        value={value}
                        onChange={(e) => {
                            const newValue = e.target.value;
                            if (/^[A-Za-zА-Яа-я.\-/]{0,5}$/.test(newValue)) {
                                changeFilterActive(newValue);
                            }
                        }}
                        placeholder={t('search')}
                        className="w-full p-3 rounded-xl border border-gray-300 focus:border-black focus:ring-2 focus:ring-black shadow-sm transition-all duration-300 outline-none bg-white/80 backdrop-blur-md text-black placeholder-gray-500"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    />
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={listVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {renderItems()}
                </motion.div>

                <motion.div 
                    className={`${totalPages <= 1 ? 'hidden' : 'flex'} justify-center mt-6 flex-col sm:flex-row items-center`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 mb-2 sm:mb-0 sm:mr-2 bg-gray-300 rounded-xl hover:bg-gray-400 disabled:opacity-50"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {t('prev')}
                    </motion.button>

                    <motion.span 
                        className="px-4 py-2 text-white mb-2 sm:mb-0"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        {t('page')} {currentPage} з {totalPages}
                    </motion.span>

                    <motion.button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 sm:ml-2 bg-gray-300 rounded-xl hover:bg-gray-400 disabled:opacity-50"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {t('next')}
                    </motion.button>
                </motion.div>
            </motion.div>
        ),
        error: <div>Ошибка при загрузке данных. Пожалуйста, попробуйте еще раз.</div>
    };

    return error ? states.error : loading ? states.loading : states.success;
};

export default CurrencyList;
