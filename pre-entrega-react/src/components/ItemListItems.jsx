import { useNavigate } from 'react-router-dom';
// import { products } from '../asyncMock';
import { useCount } from '../hooks/useCount';
export const ItemListItems = ({item, handleClick}) => {
const navigation = useNavigate()
const { count, decrementar, incrementar, setCount } = useCount({ item: item })
  return (
    <>
      <div className='border border-black m-2 p-2' key={item.id}>
        <div onClick={()=> navigation(`/products/${item.nombre}`)}>
      <img
        src={item.imagen}
        alt={item.nombre}
        width={"400px"}
        height={"400px"}
      />
      <h2 className='text-center'>{item.nombre}</h2>
      <p className='text-center'>${item.precio}</p>
      </div>
      </div>
      <div className='d-flex justify-content-center'>
        <button className='btn btn-dark' disabled={count === 0} onClick={()=> decrementar(setCount)}>
          -
        </button>
        <p className='ms-1 me-1'>{count}</p>
        <button className='btn btn-dark' disabled={count >= item.stock} onClick={()=> incrementar(setCount)}>
          +
        </button>
       <button className='btn btn-dark ms-1' onClick={() => handleClick(item, 1)}>
        AGREGAR AL CARRITO
       </button>
      </div>
      <div>
        <p className='mt-2 text-center ' style={{backgroundColor: count >= item.stock ? "red" : "grey"}}>stock disponible: {item.stock}</p>
        {count >= item.stock && <p>Los llevas a todos!</p>}
      </div>
    </>
  );
}
