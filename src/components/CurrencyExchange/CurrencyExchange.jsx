import { useEffect, useRef, useState } from 'react';

import CurrencyExchangeBlock from '../CurrencyExchangeBlock/CurrencyExchangeBlock'
import swap_icon from '../../assets/img/swap_icon.svg'
import useCurrency from '../helpers/hooks/useCurrency';

const CurrencyExchange = () => {

    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [fromPrice, setFromPrice] = useState(0);
    const [toPrice, setToPrice] = useState(1);

    const ratesRef = useRef({})

    const { data } = useCurrency();

    useEffect(() => {
        if (data) {
            ratesRef.current = data.reduce((acc, item) => {
                acc[item.cc] = item.rate;
                return acc;
            }, {});
            onChangeToPrice(1);

            console.log(ratesRef.current);
        }
    }, [data]);

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
            <div className="flex flex-col justify-center gap-5 items-center xl:flex-row">
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