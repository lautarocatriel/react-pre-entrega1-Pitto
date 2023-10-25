import CartSummaryTable from "../components/CartSummaryTable";
import { useContext } from "react";
import CartContext from "../context/cart.context";
import useForm from "../hooks/useForm";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import BuyerForm from "../components/BuyerForm";

function Checkout() {
    const { cart } = useContext(CartContext);
    const [values, handleChange] = useForm({
      name: "",
      lastName: "",
      phone: "",
      email: "",
      email2: "",
    });
  
    console.log({ values });
    if (cart.items.length === 0) return <div>El carrito está vacío</div>;
  
    const onSubmit = (e) => {
      e.preventDefault();

      for (const key in values) {
        if (values[key] === "") {
        <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
          <strong className="me-auto">DENEGADO</strong>
          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div className="toast-body">
            TODOS LOS CAMPOS SON OBLIGATORIOS
        </div>
      </div>
          return
      }
  
    }

    if (values.email !== values.email2) {
        <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
          <strong className="me-auto">DENEGADO</strong>
          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div className="toast-body">
            LOS MAIL NO COINCIDEN
        </div>
      </div>

            return
    }

        sendOrder()
}
const sendOrder = () => {
    const db = getFirestore();

    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, {
      ...cart,
      buyer: {
        name: values.name,
        lastName: values.lastName,
        phone: values.phone,
        email: values.email,
      },
      date: new Date(),
    }).then(({ id }) => {
        <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
          <strong className="me-auto">PERMITIDO</strong>
          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div className="toast-body">
            <p>SU ORDEN ES: {id}</p>
        </div>
      </div>
    });
  };

return(
    <div className="d-flex flex-column justify-content-around">
        <div className="d-flex flex-column">
        <h1>SU RESUMEN:</h1>
        <CartSummaryTable cart={cart}/>
        </div>
        <div className="d-flex flex-column">
            <h1>FORMULARIO DE COMPRA</h1>
            <BuyerForm onSumbit={onSubmit}
            values={values}
            handleChange={handleChange}/>
        </div>
    </div>
)
}


export default Checkout