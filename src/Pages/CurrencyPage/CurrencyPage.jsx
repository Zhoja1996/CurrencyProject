import Currency from "../../components/Currency/Currency";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
Footer

const CurrencyPage = () => {
    return (
        <div className="bg-gray-500">
            <Navbar/>
            <Currency/>
            <Footer/>
        </div>
    )
}

export default CurrencyPage;