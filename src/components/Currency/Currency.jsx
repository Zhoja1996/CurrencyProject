import { useState, useMemo } from "react";
import useCurrency from "../helpers/hooks/useCurrency";
import Spinner from "../spinner/spinner";

const CurrencyList = () => {
    const { data, loading, error } = useCurrency();
    const [currentItems, setCurrentItems] = useState(15);
    const [value, setValue] = useState('');
    const [filterActive, setFilterActive] = useState(false);

    const changeFilterActive = (value) => {
        setValue(value);
        setFilterActive(!!value.trim()); 
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

    const renderItems = () => {
        return filteredData.slice(0, currentItems).map((item, i) => (
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
            <div className="container mx-auto p-10">
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
                
                {filteredData.length > currentItems && (
                    <div className="flex items-center justify-center pt-5">
                        <p 
                            onClick={() => setCurrentItems(currentItems * 2)} 
                            className="text-2xl text-white text-center font-extrabold cursor-pointer hover:scale-125 transition-transform duration-300 ease-in-out"
                        >
                            Показати ще
                        </p>
                    </div>
                )}
            </div>
        ),
        error: <div>Ошибка при загрузке данных. Пожалуйста, попробуйте еще раз.</div>
    };

    return error ? states.error : loading ? states.loading : states.success;
};

export default CurrencyList;
