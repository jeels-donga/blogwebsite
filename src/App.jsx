import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routers from './View/Routers/Routers'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  )
}

export default App
