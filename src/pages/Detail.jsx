import { useEffect, useState, useCallback } from "react";
import { ItemCount } from "../components";
import { getBook } from "../lib/books.requests";
import { useParams } from "react-router-dom";
import { useCartContext } from "../state/Cart.context";



export const Detail = () => {
  const {id} = useParams();
  const [book, setBook] = useState({});
  
  
  const {addProduct, itemInCart} = useCartContext();

  




 


  useEffect(() => {
    getBook(id).then((res) => {
      setBook(res);
    });
  
  }, []);



  const handleAdd = useCallback(
    (qty) => {
      addProduct(book, qty);
    },
    [addProduct, book]
  );

  if(!Object.keys(book).length) return

  return (
    <div className="container">
      <div className="detail">
        <div className="detail__img">
          <img src={book.img} />
        </div>
        <div className="detail__info">
          <span className="detail__info-title">{book.title} </span>

          <p className="detail__info-description">{book.description}</p>

          <span className="detail__info-price">
            $
            {(book.price || 0).toLocaleString("es-AR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>

          <span className="detail__info-stock">¡Quedan pocas unidades en el stock!</span>

          <ItemCount stock={book.stock - (itemInCart?.(+id)?.qty || 0)} onAdd={handleAdd} />
        </div>
      </div>
    </div>
  );
};