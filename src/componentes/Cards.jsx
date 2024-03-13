/* Cards */

import {useCart} from "../hooks/useCart";

const Cards = ({img, modelo,  categoria, marca, precio, stock}) => {

  const {formatearPrecio} = useCart();

  return (
    <div id="Cards">
        <img src={img} alt={categoria} className="cards__foto" />
        <ul className="cards__texto">
            <li>Producto: {categoria}, {marca}, {modelo}.</li>
            <li>Precio: ${formatearPrecio(precio)}</li>
            <li>Stock: {stock}</li>
        </ul>
    </div>
  )
}; export default Cards
