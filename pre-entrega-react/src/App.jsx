import './App.css'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/NavBar'
import ProductsCategories from './components/productsCategories'



function App() {

  return  (
  <div>
    <Navbar/>
    <ItemListContainer/>
    <ProductsCategories/>
  </div>
  )

}

export default App
