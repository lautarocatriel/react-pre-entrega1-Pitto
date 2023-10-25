
import Brand from "./Brand"
import CartContainer from './CartContainer'
import MenuButton from './MenuButton'
import Sections from "./Sections"


const Navbar = ({childen}) =>{
    return(
        <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
         <Brand/>
         <MenuButton/>
         <Sections/>
            <CartContainer/>
        </div>
      </nav>
        {childen}
      </div>

    )
} 
export default Navbar