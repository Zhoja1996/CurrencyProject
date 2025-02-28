
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CurrencyExchange from "../../components/CurrencyExchange/CurrencyExchange";

const CurrencyExchangePage = () => {
    return (
        <div className="bg-[url(https://obmen24.com.ua/wp-content/uploads/2024/09/front-page_kamyanske2.jpg)] bg-center bg-no-repeat bg-cover">
            <Navbar/>
            <CurrencyExchange/>
            <Footer/>
        </div>
    );
}

export default CurrencyExchangePage;