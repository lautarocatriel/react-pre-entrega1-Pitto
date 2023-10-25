import { useParams } from "react-router-dom";
import useItemById from "../hooks/useItemById";
import { ItemListItems } from "../components/ItemListItems";
import { useContext } from "react";
import CartContext from "../context/cart.context";
import CircularProgress from '@mui/material/CircularProgress';

function Item() {
    const params = useParams();
    const { item, isLoading } = useItemById(params.itemId);
    const { addItem } = useContext(CartContext);
  
    if (isLoading) {
      return <CircularProgress/>;
    }
  
    if (!item) return <div>No hay productos con el nombre: {params.itemId}</div>;

    return (
        <div>
            <h1>producto:</h1>
            <ItemListItems  item={item} handleClick={addItem} />
        </div>
    )

}


export default Item
