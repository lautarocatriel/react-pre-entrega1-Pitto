import { useState } from "react";
export function useCount({item}) {
    const [count, setCount] = useState(0);
  
    const decrementar = () => {
      if (count > 0) {
        setCount(count - 1);
      }
    };
  
    const incrementar = () => {
      if (count < item.stock) {
        setCount(count + 1);
      }
    };
    return{
        decrementar,
        incrementar,
        count,
        setCount
    }
}