import { NavLink} from 'react-router-dom'
import { NAVBAR_ROUTES } from '../routes/Navbar_routes'

const Sections = () => {
return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {NAVBAR_ROUTES.map((route)=>(
            <li key={route.path} className="nav-item">
                <NavLink
                    to={route.path}
                    className={({isActive, isPending})=>
                isPending ? "pending nav-link" : isActive ? "active nav-link" : "" + "nav-link"} 
                >
                    {route.name}
                </NavLink>
            </li>
        ))}
        </ul>
        </div>
)
}
export default Sections