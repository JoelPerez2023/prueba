import { useState } from "react";
import { useCartContext } from "../state/Cart.context";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { addOrder } from "../lib/order.requests"; 








export const Cart = () =>{

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [email2, setEmail2] = useState('');

   const [form, setForm] = useState({});
  
  const {cart, cleanCart, removeProduct, getTotalPrice  } = useCartContext();

  const createOrder = async () => {
    const items = cart.map(({ id, title, qty, price }) => ({id, title, qty, price, }));

    

    const order = {
      buyer: { name, phone, email },
      items,
      total: getTotalPrice,
    };

    const id = await addOrder(order);
    console.log (id);
    
  };

  
  
  
    return( 
    
    

    
   

<div className="cart">
      <div className="container cart__container">
        {cart.length ? (
          <>
            <div className="cart__item" style={{ border: "none" }}>
              <button className="cart__item-button" onClick={cleanCart}>
                Vaciar carrito
                <AiOutlineCloseCircle/>
              </button>
            </div>
            <div className="cart__products">
              <div
                className="cart__item"
                style={{ border: "none", padding: "0 16px" }}
              >
                <span>Producto</span>
                <span>Cantidad</span>
                <span>Precio</span>
                <span>Subtotal</span>
              </div>
            </div>
            {cart.map((item) => (
                <div className="cart__item" key={item.id}>
                  <span>{item.title}</span>
                  <span>{item.qty}</span>
                  <span>
                    $
                    {item.price.toLocaleString("es-AR",{
                       maximumFractionDigits: 2,
                       minimumFractionDigits: 2,
                       })}
                  </span>
                  <span>
                    $
                    {(item.qty * item.price).toLocaleString("es-AR",{
                       maximumFractionDigits: 2,
                       minimumFractionDigits: 2,
                       })}
                  </span>


                  <button
                    className="cart__item-delete"
                    onClick={() => removeProduct(item.id)}>
                      <AiOutlineCloseCircle/>
                  </button>

              

            

               
                </div>
              ))}
              <div className="cart__item" style={{ border: "none" }}>
              <div className="cart__total">
                <span>Total</span>{""}
                <span>
                $ 
               {getTotalPrice.toLocaleString("es-AR", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
               })}
               </span>
              </div>{" "}
            </div>
            
           

              <div className="form">
                <div>
                  <span>Nombre: </span>
                  <input className="form_input" placeholder="Nombre" onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                  <span>Email: </span>
                  <input className="form_input" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                  <span>Repita de nuevo su Email: </span>
                  <input className="form_input" placeholder="Email" onChange={(e) => setEmail2(e.target.value)} />
                </div>
                <div>
                  <span>Teléfono: </span>
                  <input className="form_input" placeholder="Teléfono" onChange={(e) => setPhone(e.target.value)} />
                </div>

                <button className="cart__item-button form__button"
                  onClick={createOrder}> Realizar Pedido </button>
                </div> 



            
            
          </>
          ): 
          (
            <h1>Su carrito esta vacio</h1>
          )}
        </div>
      </div>
    
  
  

  );

   
          

};
