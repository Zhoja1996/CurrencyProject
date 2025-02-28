
const defaultCurrencies = ['USD', 'EUR', 'PLN', 'CAD'];

const CurrencyExchangeBlock = ({ value, currency, onChangeValue, onChangeCurrency, ratesRef }) => (
    <div className="flex justify-center items-center gap-5 border-1 border-white rounded-xl py-4 px-6 backdrop-blur-sm">
        <label className="flex items-start flex-col justify-between gap-4">
            <div className="flex items-center justify-between gap-30 text-white">
                <span className="text-gray-400 text-2xl">В мене є</span>
                <div className="flex gap-4 items-center justify-center">
                    {defaultCurrencies.map((cur) => (
                        <button 
                            key={cur} 
                            className={`text-xl px-3 py-1 rounded-md transition ${currency === cur ? "bg-gray-600" : "bg-transparent"}`}
                            onClick={() => onChangeCurrency(cur)}
                        >
                            {cur}
                        </button>
                    ))}
                </div>
            </div>
            <input 
                type="number" 
                value={value} 
                onChange={(e) => onChangeValue(e.target.value)}
                className="text-white text-4xl relative" 
            />
            <span className="text-gray-400 text-xl">1 {currency} = {ratesRef.current[currency]}</span>
        </label>
    </div>
);

export default CurrencyExchangeBlock;