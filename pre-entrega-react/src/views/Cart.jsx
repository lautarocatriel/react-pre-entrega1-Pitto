import { useContext } from "react";
import CartContext from "../context/cart.context";
import { useNavigate } from "react-router-dom";
import CartSummaryTable from "../components/CartSummaryTable";

function Cart() {
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();
  
    if (cart.items.length === 0) return <h1>El carrito está vacío</h1>;
  
    return (
        <div className="d-flex flex-column">
            <h1>CARRITO</h1>
            <CartSummaryTable cart={cart}/>
            <button onClick={()=> navigate("/checkout")} className="btn btn-light">FINALIZAR SU COMPRA</button>

        </div>

    )
}

export default Cart