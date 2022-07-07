import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'

const rootDom = document.querySelector('#root')
const root = createRoot(rootDom)
root.render(<App />)