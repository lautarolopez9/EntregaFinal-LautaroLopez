/* Carrito */

import Titulo from "./Titulo";
import TotalPagar from "./TotalPagar";
import { useCart } from "../hooks/useCart";
import CarritoItem from "./CarritoItem";
import Boton from "./Boton";
import { Link } from "react-router-dom";

const Carrito = () => {

    const {cart, totalQuantity} = useCart();

    if(totalQuantity === 0) {
        return (
            <section id="Carrito">
                <Titulo label="¡No hay Productos en Carrito!"/>
                <Link to={"/"} className="Carrito__Volver">
                    <Boton id="Volver" label="Volver"/>
                </Link>
            </section>
        )
    }
    
    return (
        <section id="Carrito">
            <Titulo label="Carrito de Compras:"/>
            <section id="carritoContenedor">
                <article className="contenedor__card">
                    { cart.map(prod => <CarritoItem key={prod.id} {...prod} /> ) }
                </article>
            </section>
            <TotalPagar />
        </section>
    );
}; export default Carrito;