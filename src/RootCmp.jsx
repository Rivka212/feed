import React from 'react'
import {Routes, Route} from 'react-router'

import {ProductIndex} from './pages/ProductIndex.jsx'


export function RootCmp() {

  return (
 <main>
  <Routes>
    <Route path="/" element={<ProductIndex/>} >
    </Route>
  </Routes>
 </main>
 
  )
}