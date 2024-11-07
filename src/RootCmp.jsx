import React from 'react'
import {Routes, Route} from 'react-router'
// import { Routes, Route } from 'react-router-dom';


import {CommentIndex} from './pages/CommentIndex.jsx'


export function RootCmp() {

  return (
 <main>
  <Routes>
    <Route path="/" element={<CommentIndex/>} >
    </Route>
  </Routes>
 </main>
 
  )
}