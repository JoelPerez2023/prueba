import { createContext, useContext, useState } from "react";
const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);



export const CartProvider=({ children })=>{
    const [cart, setCart] = useState([]);

    //Funcion para buscar un item..
    const itemInCart = (id) => cart.find((product) => product.id === id);


const addProduct = (item, qty) => {  /* Para agregar productos */
    const element = itemInCart(item.id);
    if(!element) /*si no existe return*/
    return setCart([...cart,{...item, qty,},]);
   
    if (element){
        const newCart = cart.map((product) =>{
            if(product.id === item.id){
                return {...product, qty: product.qty + qty};
            }
            return product;
        })
        setCart(newCart);

    };
    
    };

    const removeProduct =(id) => {
        const newCart = cart.filter((product) => product.id !== id);
        setCart(newCart);
    };

    const cleanCart = () => setCart ([]);

    const getCartQty = () => cart.reduce ((acc, item) => acc + item.qty, 0);
   
    const  getTotalPrice = () => cart.reduce((acc, item) => acc + item.price * item.qty, 0);

const value = {
    cart,
    addProduct,
    removeProduct,
    cleanCart,
    getCartQty,
    getTotalPrice,
    itemInCart
   

    
};



 return (
    <CartContext.Provider
    value={value} displayName="CartContext">
        {children}
        </CartContext.Provider>
        
        
        );
};
