/* CarritoItem */

import Boton from "./Boton";
import { useCart } from "../hooks/useCart";

const CarritoItem = ({id, cantidad, categoria, marca, modelo, precio }) => {

    const {removeItem, formatearPrecio} = useCart();

    const totalItem = cantidad * precio

  return (
    <div id="CarritoItem">
        <h4>{cantidad}</h4>
        <h4>{categoria}, {marca}, {modelo}.</h4>
        <h4>${formatearPrecio(totalItem)}</h4>
        <Boton label="Eliminar" handleClick={() => removeItem(id)}/>
    </div>
  )
}; export default CarritoItem;
