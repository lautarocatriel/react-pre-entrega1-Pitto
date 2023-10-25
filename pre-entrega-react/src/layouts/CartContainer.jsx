import { NavLink } from "react-router-dom"
import CartIcon from "./CartIcon"
import CartItems from "./CartItems"
// import { useContext } from "react";
// import CartContext from "../context/cart.context"



const CartContainer = () => {
    // const { cart } = useContext(CartContext);

    return(
        <div>
       <NavLink to={"/carrito"}
       className="bg-primary rounded-circle p-3 position-relative">
            <CartIcon />
            <CartItems count={0}/>
            {/* {cart.items.reduce((acc, curr)=> acc + curr.quantity, 0)}/> */}
        </NavLink>
        </div>
    )
}

export default CartContainer