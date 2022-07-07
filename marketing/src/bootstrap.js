import React from "react";
import ReactDom from "react-dom";
import App from "./app";
import { createRoot } from 'react-dom/client'

function mount(el) {
    const root= createRoot(el)
    root.render(<App />)
}

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector("#dev-marketing")
    if(el) mount(el)
}

export { mount }