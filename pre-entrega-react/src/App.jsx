import { Routes, Route, BrowserRouter} from 'react-router-dom'
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/NavBar'
import { ProductsShortsContainer } from './components/productsCategories'
// import ProductsCategories from './components/productsCategories'
// import CartProvider from './context/cartContext'
// import { ItemListItems } from './components/ItemListItems'


function App() {

  return  (
  <div>
    {/* <CartProvider>  */}
    <Navbar/>
    {/* <ProductsCategories/> */}
    {/* </CartProvider>  */}
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<ItemListContainer/>}/>
      <Route exact path="/categories" element={<ItemListContainer/>}/>
      <Route exact path="/category/short" element={<ProductsShortsContainer/>}/>
      <Route exact path="/category/camisetas" element={<ItemListContainer/>}/>
      <Route exact path="/products/:name" element={<ItemListContainer/>}/>
    </Routes>
    </BrowserRouter>
  </div>
  )

}

export default App
