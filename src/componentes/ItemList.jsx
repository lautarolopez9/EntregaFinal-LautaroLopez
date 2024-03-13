/* ItemList */

import Item from "./Item";

const ItemList = ({ productos }) => {
    return (
        <div id="ItemList">
            {
                productos.map(productos => {
                    return (
                        <Item key={productos.id} {...productos} />
                    )
                })
            }
        </div>
    )
}; export default ItemList;