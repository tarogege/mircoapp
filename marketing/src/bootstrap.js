import React from "react";
import ReactDom from "react-dom";
import App from "./app";
import { createRoot } from 'react-dom/client'
// 在react-router v6中已经不太支持Router createMemoryHistory、createBroswerHistory的写法
// 其实是支持的
// history是react-router的依赖库，用于管理会话历史
import { createMemoryHistory, createBrowserHistory } from 'history'

function mount(el, { defaultHistory, onNavigator }) {
    const root= createRoot(el)
    // 在github官方文档中 createMemoryHistory({window}),将window传递进去了，并使用ref对其进行赋值
    // if (ref.current === null) {
    //     ref.current = createMemoryHistory({window})
    // }
    const history = defaultHistory ? defaultHistory() : createMemoryHistory()
    console.log(history, 'history')
    root.render(<App history={history} />)
    if (onNavigator) history.listen(onNavigator)
    return {
        onParentNavigator({ pathname: nextPathname }) {
            if (history.location.pathname !== nextPathname) {
                history.push(nextPathname)
            }
        }
    }
}

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector("#dev-marketing")
    if(el) mount(el, { defaultHistory: createBrowserHistory })
}

export { mount }