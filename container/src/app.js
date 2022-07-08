import React from 'react'
import MarketingApp from './components/marketingApp'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MarketingApp />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App