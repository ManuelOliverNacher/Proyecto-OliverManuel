import React, { useState, useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import cartContext from "../Context/CartContext";
import { useContext } from 'react';
import Swal from 'sweetalert2';
import {  collection, doc, getDoc } from "firebase/firestore";



const ItemDetail = ({ idProd, db }) => {
  const [prod, setProd] = useState({});
  const { addItem } = useContext(cartContext);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const productosColRef = collection(db, "productos");
        const docRef = doc(productosColRef, idProd);
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
          setProd(docSnapshot.data());
        } else {
          console.log("!");
        }
      } catch (error) {
        console.log("", error);
      }
    }

    fetchProduct();
  }, [idProd, db]);

  function onAddToCart(count) {
    Swal.fire(
      'Producto Agregado!',
      `Agregaste ${count} productos al carrito`,
      'success'
    );
    addItem(prod);
  }
  

  return (
    <div className="card card-detalle">
      <div className='imgProd'>
        <img src={prod.img} alt={prod.title} />
      </div> 
      <div className="title">
        <h4 className="nombre-detalle">{prod.title}</h4>
      </div>
      <div className="containerDescription">
        <p className="precioDetalle">${prod.price}</p>
        <ItemCount onAddToCart={onAddToCart} initial={1} stock={prod.stock} />
      </div>
    </div>
  )
}

export default ItemDetail;                                       