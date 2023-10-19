import { useEffect, useState } from "react"
import { getProducts } from "../asyncMock"

export const useProductsShort = () =>{
    const [short, setShorts] = useState([])
    useEffect(()=>{
        getProducts()
        .then((products)=> setShorts(products))
    },   [])
    return(
    short
    )
    
}


