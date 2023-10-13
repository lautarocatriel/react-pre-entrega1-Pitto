import { products } from '../asyncMock';
import { useState } from 'react';

export const ItemListItems = () => {
  return (
    <>
      <div className='d-flex flex-wrap ms-3'>
        {products.map((producto) => (
          <ProductItem key={producto.id} producto={producto} />
        ))}
      </div>
    </>
  );
};

function ProductItem({ producto }) {
  const [count, setCount] = useState(0);

  const decrementar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const incrementar = () => {
    if (count < producto.stock) {
      setCount(count + 1);
    }
  };

  return (
    <div className='border border-black m-2 p-2' key={producto.id}>
      <div>
        <a href={`/products/${producto.nombre}`}>
      <img
        src={producto.imagen}
        alt={producto.nombre}
        width={"400px"}
        height={"400px"}
      />
      <h2 className='text-center'>{producto.nombre}</h2>
      <p className='text-center'>${producto.precio}</p>
      </a>
      </div>
      <div className='d-flex justify-content-center'>
        <button className='btn btn-dark' disabled={count === 0} onClick={decrementar}>
          -
        </button>
        <p className='ms-1 me-1'>{count}</p>
        <button className='btn btn-dark' disabled={count >= producto.stock} onClick={incrementar}>
          +
        </button>
      </div>
      <div>
        <p className='mt-2 text-center ' style={{backgroundColor: count >= producto.stock ? "red" : "grey"}}>stock disponible: {producto.stock}</p>
        {count >= producto.stock && <p>Los llevas a todos!</p>}
      </div>
    </div>
  );
}