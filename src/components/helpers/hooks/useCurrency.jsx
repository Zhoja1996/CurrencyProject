import { useEffect, useState } from "react";
import axios from "axios";

const useCurrency = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCurrencies = async () => {
            try {
                const response = await axios.get("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json");
                setData(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        
        fetchCurrencies();
    }, []);

    return { data, loading, error };
};

export default useCurrency;
