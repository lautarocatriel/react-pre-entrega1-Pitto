import './App.css'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/NavBar'

function App() {

  return  (
  <div>
    <Navbar/>
    <ItemListContainer saludo="Hola Mundo!"/>
  </div>
  )

}

export default App
