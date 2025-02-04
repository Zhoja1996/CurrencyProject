import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainPage from '../../Pages/MainPage/MainPage';

import '../../../src/App.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <MainPage/>
    </StrictMode>,
)
