import Brand from "./Brand"
import CartContainer from './CartContainer'
import MenuButton from './MenuButton'
import Sections from "./Sections"

const Navbar = () =>{
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
         <Brand/>
         <MenuButton/>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Sections isActive={true} name="Ofertas"/>
              </li>
              <li className="nav-item">
              <Sections isActive={false} name="Productos"/>
              </li>
            </ul>
         </div>
            <CartContainer/>
        </div>
      </nav>
    )
} 
export default Navbar