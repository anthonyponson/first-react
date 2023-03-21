import React from 'react'
import { createRoot } from 'react-dom/client'
import { MyComponents } from './App'

import App, { Header } from './App'
// import Header from "./App";

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <div>
    <App />
    <Header />
  </div>
)
