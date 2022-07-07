import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shouye from './shouye'
import List from './list'

// Switch是react-router-dom 5的写法，在6.x中switch换成了routes
const App = () => {
    return (
        <BrowserRouter>
        <Routes>
                <Route path='/' element={<Shouye />} />
                <Route path='/list' element={<List />} />
                </Routes>
        </BrowserRouter>
    )
}

export default App