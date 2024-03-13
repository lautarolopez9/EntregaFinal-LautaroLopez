/* ItemCount */

import Boton from "./Boton";
import {useState} from "react";

const ItemCount = ({stock, inicial, agregar}) => {

    const [cantidad, setCantidad] = useState(inicial);

    const INCREMENTAR = () => {
        if(cantidad < stock){
            setCantidad(cantidad + 1);
        }
    }

    const DECREMENTAR = () => {
        if(cantidad > inicial){
            setCantidad(cantidad - 1);
        }
    }

  return (
    <div id="ItemCount">
        <div className="ItemCount__controles">
            <svg xmlns="http://www.w3.org/2000/svg" onClick={DECREMENTAR} width="16" height="16" fill="currentColor" className="bi bi-dash svg" viewBox="0 0 16 16">
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
            </svg>

            <strong className="controles__numero">{cantidad}</strong>

            <svg xmlns="http://www.w3.org/2000/svg" onClick={INCREMENTAR} width="16" height="16" fill="currentColor" className="bi bi-plus-lg svg" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
            </svg>
      
            <Boton handleClick={() => agregar(cantidad)} disabled={!stock} label="Agregar" />
        </div>
    </div>
  )
}; export default ItemCount;
