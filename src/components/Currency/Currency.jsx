import { useState, useMemo } from "react";
import useCurrency from "../helpers/hooks/useCurrency";
import Spinner from "../spinner/spinner";

const CurrencyList = () => {
    const { data, loading, error } = useCurrency();
    const [currentItems, setCurrentItems] = useState(15); // Количество элементов на странице
    const [currentPage, setCurrentPage] = useState(1); // Текущая страница
    const [value, setValue] = useState('');
    const [filterActive, setFilterActive] = useState(false);

    const changeFilterActive = (value) => {
        setValue(value);
        setFilterActive(!!value.trim());
        setCurrentPage(1); // Сбросить на первую страницу при изменении фильтра
    };

    // Мемоизируем фильтр, чтобы не пересчитывался на каждый ререндер
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

    // Считываем данные для текущей страницы
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

    const renderItems = () => {
        return paginatedData.map((item, i) => (
            <div key={i} className="bg-white bg-opacity-20 rounded-xl p-3 lg:p-6 text-black shadow-lg">
                <h2 className="text-xl font-bold lg:text-2xl">{item.txt} ({item.cc})</h2>
                <p className="text-sm mt-2 lg:text-lg">Курс: <span className="font-semibold">{item.rate}</span></p>
                <p className="text-sm mt-1">Дата: {item.exchangedate}</p>
            </div>
        ));
    };

    const states = {
        loading: <Spinner />,
        success: (
            <div className="container mx-auto p-10 min-h-screen">
                <div className="flex flex-col items-center justify-center mb-10">
                    <h1 className="text-white text-4xl font-bold text-center mb-10">Курси валют</h1>
                    <input 
                        type="text"
                        value={value}
                        onChange={(e) => changeFilterActive(e.target.value)}
                        placeholder="Введіть валюту..." 
                        className="w-full p-3 rounded-xl border border-gray-300 focus:border-black focus:ring-2 focus:ring-black shadow-sm transition-all duration-300 outline-none bg-white/80 backdrop-blur-md text-black placeholder-gray-500"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {renderItems()}
                </div>

                <div className="flex justify-center mt-6 flex-col sm:flex-row items-center">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 mb-2 sm:mb-0 sm:mr-2 bg-gray-300 rounded-xl hover:bg-gray-400 disabled:opacity-50"
                    >
                        Попередня
                    </button>
                    <span className="px-4 py-2 text-white mb-2 sm:mb-0">
                        Сторінка {currentPage} з {totalPages}
                    </span>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 sm:ml-2 bg-gray-300 rounded-xl hover:bg-gray-400 disabled:opacity-50"
                    >
                        Наступна
                    </button>
                </div>

            </div>
        ),
        error: <div>Ошибка при загрузке данных. Пожалуйста, попробуйте еще раз.</div>
    };

    return error ? states.error : loading ? states.loading : states.success;
};

export default CurrencyList;
