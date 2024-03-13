/* Item */

import Boton from "./Boton";
import Cards from "./Cards";
import {Link} from "react-router-dom";


const Item = ({id, marca, modelo, img, categoria, descripcion, precio, stock }) => {
  
    return (
      <div id="Item">
        <Cards img={img} modelo={modelo} marca={marca} categoria={categoria} descripcion={descripcion} precio={precio} stock={stock} />
        <Link to={`/detalle/${id}`} className="Item__boton" >
            <Boton label="Detalle"/>
        </Link>
      </div>
    )
  }; export default Item;