/* ItemListContainer */

import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../asyncMock";
import ItemList from "./ItemList";
import Titulo from "./Titulo";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts;
        asyncFunc(categoryId)
            .then(respuesta => {
                setProductos(respuesta);
            })
            .catch(error => {
                console.error(error);
            })
    }, [categoryId]);

    console.log(productos); // Verifica si los productos se cargan correctamente.

    return (
        <main id="ItemListContainer">
            <Titulo label={greeting}/>
            <ItemList productos={productos} />
        </main>
    )
}; export default ItemListContainer;