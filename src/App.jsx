import './styles/index.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  Home from './components/layouts/Home'
import Cart from './components/Cart'
import Product from './components/Product'

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/product" Component={Home}>  
          <Route path="/product/:slug" Component={Product}/>  
        </Route>

        <Route path="/cart" Component={Cart}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
