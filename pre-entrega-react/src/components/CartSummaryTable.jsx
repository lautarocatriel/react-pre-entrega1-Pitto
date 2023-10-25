

function CartSummaryTable({cart}){
    return(
<table className="table">
  <thead>
    <tr>
      <th scope="col">Produto</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Precio Unitario</th>
      <th scope="col">Precio total</th>
    </tr>
  </thead>
  <tbody>
    {cart.items.map(({item, quantity})=> (
    <tr key={item.id}>
    <th scope="row">{item.nombre}</th>
    <td>{quantity}</td>
    <td>${item.precio}</td>
    <td>${item.precio * quantity}</td>
  </tr>
    ))}
  </tbody>
</table>
    )
}

export default CartSummaryTable