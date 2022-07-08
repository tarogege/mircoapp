import React from 'react'
import { Router, Routes, Route } from 'react-router-dom'
import Shouye from './shouye'
import List from './list'

// Switch是react-router-dom 5的写法，在6.x中switch换成了routes
const App = ({ history }) => {
    // 当使用底层Router组件去创建路由的时候，v5只需要传递history参数，v6location和navigator是必传的
    // 其中navigator和v5中的history等价
    return (
        <Router navigator={history} location={history.location}>
        <Routes>
                <Route path='/' element={<Shouye />} />
                <Route path='/list' element={<List />} />
                </Routes>
        </Router>
    )
}

export default App