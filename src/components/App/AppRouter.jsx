import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import MainPage from "../../Pages/MainPage/MainPage";
import CurrencyPage from "../../Pages/CurrencyPage/CurrencyPage";
import CurrencyExchangePage from "../../Pages/CurrencyExchangePage/CurrencyExchangePage";

const AppRouter = createBrowserRouter([
    {
        element: <BaseLayout/>,
        errorElement: <div>Error</div>,
        children: [
            {path: '/', element: <MainPage/>},
            {path: '/currency', element: <CurrencyPage/>},
            {path: '/currencyConverter', element: <CurrencyExchangePage/>},
        ]
    }
])

export default AppRouter;