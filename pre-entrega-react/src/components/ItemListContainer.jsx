// import { useEffect, useState } from "react"
// import { getProducts } from "../asyncMock"
// import { ItemListItems } from "./ItemListItems"
// import CircularProgress from '@mui/material/CircularProgress';

// const ItemListContainer = () =>{
//   const [products, setProducts] = useState ([])
//   useEffect(() => {
//     getProducts().then((products)=>{
//       setProducts(products)
//     })
//   }, [])
// if (!products.length) return <CircularProgress/>
//     return(
//       <div>
//         <h1>LISTA DE PRODUCTOS</h1>
        
//         <ItemListItems/>
//       </div>
//     )
// }
// export default ItemListContainer