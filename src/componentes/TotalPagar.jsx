/* Total Pagar */

import Boton from "./Boton";
import { Link } from "react-router-dom";
import Total from "./Total";
import { useCart } from "../hooks/useCart";

const TotalPagar = () => {

    const {sacarPrecioTotal} = useCart();

    return (
        <section id="TotalPagar">
            <Total label={`Total: $${sacarPrecioTotal()}`}/>
            <Link to={"/"}>
                <Boton label="Volver"/>
            </Link>
            <Link to={"/datos"}>
                <Boton label="Checkout"/>
            </Link>
        </section>
    )
}; export default TotalPagar;