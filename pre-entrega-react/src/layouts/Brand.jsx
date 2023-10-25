import { NavLink } from "react-router-dom";
import { NAVBAR_ROUTES } from "../routes/Navbar_routes";

const Brand = () => {
    const brand = NAVBAR_ROUTES.find(route => route.path === "/")

    return( 
        <div>

            <NavLink                     
            to={brand.path}
             className="navbar-brand brand"
             >
                 TIENDA DE FUTBOL
                     </NavLink>
            
          
   
        </div>
  
    );
};
export default Brand;
