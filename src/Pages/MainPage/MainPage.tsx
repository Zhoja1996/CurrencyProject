import React from "react";
import Footer from "../../components/Footer/Footer";
import Main from "../../components/Main/Main";
import Navbar from "../../components/Navbar/Navbar";

const MainPage = () => {
    return (
        <div className="bg-[url(https://obmen24.com.ua/wp-content/uploads/2024/09/front-page_kamyanske2.jpg)] bg-center bg-no-repeat bg-cover">
            <Navbar/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default MainPage;