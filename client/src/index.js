import ReactDom from 'react-dom/client'

import React from 'react'

import App from './components/App'

const el = document.getElementById(
    "root"
)

const root = ReactDom.createRoot(el)

root.render(<App/>)