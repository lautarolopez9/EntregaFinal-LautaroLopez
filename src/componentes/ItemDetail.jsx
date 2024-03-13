/* ItemDetail */

import CardDetail from "./CardDetail";
import Titulo from "./Titulo";
import {Link} from "react-router-dom";
import Boton from "./Boton";
import ItemCount from "./ItemCount";
import { useCart } from "../hooks/useCart";


const ItemDetail = ({id, img, categoria, marca, modelo,  precio, stock, descripcion}) => {

  const {addItem, isInCart} = useCart();

  const handleAgregar = (cantidad) => {
    const productObj = {id, categoria, marca, modelo, precio, cantidad}
    addItem(productObj)
  }

  return (
    <article className="ItemDetail">
      <Titulo label="Detalle Producto:"/>
      <CardDetail id={id} img={img} categoria={categoria} modelo={modelo} marca={marca} precio={precio} stock={stock} descripcion={descripcion} />
      <div className="ItemDetail__contenedor">
        <Link to={"/"}>
            <Boton label="Volver"/>
        </Link>
        { isInCart(id) > 0 ? ( <Link to={"/carrito"}><Boton label="Carrito"/></Link> ) : ( <ItemCount inicial={1} stock={stock} agregar={handleAgregar} /> ) }
      </div>
    </article>
  )
}; export default ItemDetail;
