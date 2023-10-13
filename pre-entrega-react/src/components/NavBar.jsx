import { BrowserRouter } from "react-router-dom"
import Brand from "./Brand"
import CartContainer from './CartContainer'
import MenuButton from './MenuButton'
import Sections from "./Sections"
import { RoutesPages } from "../routes/routes"

const Navbar = () =>{
    return(
        <BrowserRouter>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
         <Brand/>
         <MenuButton/>
         <Sections/>
            <CartContainer/>
        </div>
      </nav>
      <RoutesPages/>
      </BrowserRouter>
    )
} 
export default Navbar