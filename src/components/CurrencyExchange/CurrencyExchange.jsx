import CurrencyExchangeBlock from '../CurrencyExchangeBlock/CurrencyExchangeBlock'
import swap_icon from '../../assets/img/swap_icon.svg'

import { useEffect, useRef, useState } from 'react';

const CurrencyExchange = () => {

    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [fromPrice, setFromPrice] = useState(0);
    const [toPrice, setToPrice] = useState(1);

    const ratesRef = useRef({})

    useEffect(() => {
        fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
            .then((res) => res.json())
            .then((json) => {
                // Преобразуем массив в объект { cc: rate }
                const ratesObject = json.reduce((acc, item) => {
                    acc[item.cc] = item.rate;
                    return acc;
                }, {});
                ratesRef.current = ratesObject;
                onChangeToPrice(1);
                console.log(ratesRef.current);
                
            })
            .catch((error) => console.error('Ошибка при загрузке данных:', error));
    }, []);

    // console.log(rates);

    const onChangeFromPrice = (value) => {
        const price = value * ratesRef.current[fromCurrency];
        const result = price / ratesRef.current[toCurrency];
        setToPrice(result.toFixed(2));
        setFromPrice(value);
    }
    
    const onChangeToPrice = (value) => {
        const result = (ratesRef.current[toCurrency] / ratesRef.current[fromCurrency]) * value;
        setFromPrice(result.toFixed(2));
        setToPrice(value)
    }

    useEffect(() => {
        onChangeFromPrice(fromPrice);
    }, [fromCurrency])

    useEffect(() => {
        onChangeToPrice(toPrice);
    }, [toCurrency])
    
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="flex justify-center gap-5 items-center">
                <CurrencyExchangeBlock 
                    value={fromPrice}
                    currency={fromCurrency}
                    onChangeCurrency={setFromCurrency}
                    onChangeValue={onChangeFromPrice}
                    ratesRef={ratesRef}/>
                <img src={swap_icon}/>

                <CurrencyExchangeBlock
                    value={toPrice}
                    currency={toCurrency}
                    onChangeCurrency={setToCurrency}
                    onChangeValue={onChangeToPrice}
                    ratesRef={ratesRef}/>
            </div>
        </div>
    );
}

export default CurrencyExchange;