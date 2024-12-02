import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { AppHeader } from './cmps/AppHeader.jsx'
import { ProductIndex } from './pages/ProductIndex.jsx'
import { CartList } from './pages/CartList.jsx'

export function RootCmp() {

  return (
      <section className="app">
        <main>
          <Routes>
            <Route path="/" element={<ProductIndex />} />
            <Route path="/cart" element={<CartList />} />
          </Routes>
        </main>
      </section>
  )
}