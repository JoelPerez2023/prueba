import { useState, useEffect } from "react";
import { getBooks } from "../lib/books.requests";
import { ItemListContainer, } from "../components";
import { Loader } from "../components/Loader/Loader";

export const Home = () => {
  
  const [products, setProducts] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {

   getBooks() 
    .then(res => {
      setIsLoading(false); 
      setProducts(res)} 
      
      ) 

  }, []);



  return (
    <div>
      {isLoading ? (<Loader />) : (
        <div className="container">
          <ItemListContainer products={products} />
        </div>
      )}
    </div>
  );
};
