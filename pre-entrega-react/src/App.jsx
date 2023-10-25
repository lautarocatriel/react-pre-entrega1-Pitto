import { Routes, Route, BrowserRouter} from 'react-router-dom'
import './App.css'
import Navbar from './layouts/NavBar'
import Index from './views/index'
import Category from './views/category'
import Item from './views/item'
import Cart from './views/cart'
import Checkout from './views/Checkout'


function App() {

  return  (
  <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Index/>}/>
      <Route exact path="/categories" element={<Index/>}/>
      <Route exact path="/category/:categoryName" element={<Category/>}/>
      <Route exact path="/products/:itemId" element={<Item/>}/>
      <Route path="/cart" element={<Cart/>} />
      <Route path="/checkout" element={<Checkout/>} />
    </Routes>
    {/* </Navbar> */}
    </BrowserRouter>
    </div>
  )

}

export default App
