import Currency from "../../components/Currency/Currency";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const CurrencyPage = () => {
    return (
        <div className="bg-[url(https://obmen24.com.ua/wp-content/uploads/2024/09/front-page_kamyanske2.jpg)] bg-center bg-no-repeat bg-cover">
            <Navbar/>
            <Currency/>
            <Footer/>
        </div>
    )
}

export default CurrencyPage;