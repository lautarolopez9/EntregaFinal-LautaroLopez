/* ItemDetailContainer */

import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import {getProductsById} from "../asyncMock";
import { useParams } from "react-router-dom";
 
const ItemDetailContainer = () => {

  const [producto, setProducto] = useState();
  const {productId} = useParams();

  useEffect(() => {
    getProductsById(productId)
      .then(respuesta => {
        setProducto(respuesta);
      })
      .catch(error => {
        console.error(error);
      })
  }, [productId]);

  return (
    <section id="ItemDetailContainer">
       <ItemDetail {...producto} />
    </section>
  )
}; export default ItemDetailContainer;


