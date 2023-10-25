import { useParams } from "react-router-dom";
import useItemsByCategory from "../hooks/useItemsByCategory";
import { ItemListItems } from "../components/ItemListItems";
import { useContext } from "react";
import CartContext from "../context/cart.context";
import { CircularProgress } from "@mui/material";

function Category() {
    const params = useParams();
    const { items, isLoading } = useItemsByCategory(params.categoryName);
    const { addItem } = useContext(CartContext);
  
    if (isLoading) {
      return <CircularProgress/>;
    }
  
    if (items.length === 0)
    return <div>No existen productos con la catogría: {params.categoryName}</div>;

    return(
        <div>
        <h1>{params.categoryName}</h1>
        <div>
            {items.map((item)=>
            <div key={item.id}>
                <ItemListItems item={item} handleClick={addItem}/>
            </div>)}
        </div>

        </div>
    )


}  

export default Category