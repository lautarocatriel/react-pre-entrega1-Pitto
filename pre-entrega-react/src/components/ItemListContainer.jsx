import { useEffect, useState } from "react"
import { getProducts } from "../asyncMock"
import { ItemListItems } from "./ItemListItems"

const ItemListContainer = () =>{
  const [products, setProducts] = useState ([])
  useEffect(() => {
    getProducts().then((products)=>{
      setProducts(products)
    })
  }, [])
if (!products.length) return <h1 className="text-center">...CARGANDO</h1>
    return(
      <div>
        <h1>LISTA DE PRODUCTOS</h1>
        
        <ItemListItems/>
      </div>
    )
}
export default ItemListContainer