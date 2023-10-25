import { ItemListItems } from "../components/ItemListItems";
import useItems from "../hooks/useItems";
import { useContext } from "react";
import CartContext from "../context/cart.context";
import CircularProgress from '@mui/material/CircularProgress';

const Index = () => {
    const { items, isLoading } = useItems();
    const { addItem } = useContext(CartContext);
  
    if (isLoading) {
      return <CircularProgress/>;
    }
  
    return (
        <div key={items.id}>
            {items.map((item)=>(
                <div key={item.id}>
                    <ItemListItems item={item} handleClick={addItem}/>
                </div>
            ))}
            </div>
    )}


    export default Index
