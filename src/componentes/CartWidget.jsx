/* CartWidget */

import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

const CartWidget = () => {

    const {totalQuantity} = useCart();

    return (
        <Link id="CartWidget" to={"/carrito"}>
            <button className="rounded-circle CartWidget__boton" >
                <span className="numerito">
                    {(totalQuantity === 0 ? "" : totalQuantity)}
                </span>
            </button>
        </Link>
    )
}; export default CartWidget;