/* CartContext */

import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    console.log(cart)

    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart(prev => [...prev, productToAdd]);
        } else {
            console.error("El producto ya fue agregado");
        }
    };

    const removeItem = (id) => {
        const cartUpdated = cart.filter(prod => prod.id !== id);
        setCart(cartUpdated);
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const getTotalQuantity = () => {
        let accu = 0;
        cart.forEach(prod => {
            accu += prod.cantidad
        })
        return accu
    }

    const totalQuantity = getTotalQuantity();

    const sacarPrecioTotal = () => {
        let precioTotal = 0;
        cart.forEach(prod => {
            precioTotal += prod.cantidad * prod.precio;
        })
        return formatearPrecio(precioTotal);
    }

    const formatearPrecio = (price) => {
        const PRECIO_STRING = price.toString(); // Convertir el precio a string
        const LONGITUD = PRECIO_STRING.length;
        if (LONGITUD <= 3) {
            return PRECIO_STRING; // Si el precio tiene 3 o menos dígitos, devuelve el precio sin modificar
        } else {
            const PARTE_ENTERA = PRECIO_STRING.slice(0, LONGITUD - 3); // Obtener la parte entera del precio
            const PARTE_DECIMAL = PRECIO_STRING.slice(LONGITUD - 3); // Obtener los últimos 3 dígitos como parte decimal
            return `${PARTE_ENTERA}.${PARTE_DECIMAL}`; // Devolver el precio formateado con un punto después de los primeros 3 dígitos
        }
    }

    return (
        <CartContext.Provider value={{ cart, isInCart, addItem, removeItem, clearCart, totalQuantity, sacarPrecioTotal, formatearPrecio }}>
            {children}
        </CartContext.Provider>
    );
};