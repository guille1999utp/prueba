import './styles/index.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  Home from './components/Home'
import Cart from './components/Cart'
import Product from './components/product'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}/>  
        <Route path="/cart" Component={Cart}/>
        <Route path="/product/:product" Component={Product}/> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
