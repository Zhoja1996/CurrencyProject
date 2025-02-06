import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import MainPage from "../../Pages/MainPage/MainPage";
import InfoPage from "../../Pages/CurrencyPage/CurrencyPage";

const AppRouter = createBrowserRouter([
    {
        element: <BaseLayout/>,
        errorElement: <div>Error</div>,
        children: [
            {path: '/', element: <MainPage/>},
            {path: '/currency', element: <InfoPage/>},
            {path: '/currencyConverter', element: <InfoPage/>},
            {path: '/contacts', element: <InfoPage/>},
        ]
    }
])

export default AppRouter;