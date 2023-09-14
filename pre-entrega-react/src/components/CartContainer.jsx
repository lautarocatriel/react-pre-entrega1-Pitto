import CartIcon from "./CartIcon"
import CartItems from "./CartItems"
const CartContainer = () => {

    return(
        <div className="bg-primary rounded-circle p-3 position-relative">
            <CartIcon />
            <CartItems count={2}/>
        </div>
    )
}

export default CartContainer