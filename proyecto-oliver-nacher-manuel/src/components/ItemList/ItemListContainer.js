import React, { useEffect, useState } from "react";
import { prod } from "../prod";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";

//Configuracion de firebase------------------------------------------------------
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC0lEeptOp6_WbNxb9421ewV1oypwlNbPU",
  authDomain: "olivernachermanuel-proyecto.firebaseapp.com",
  projectId: "olivernachermanuel-proyecto",
  storageBucket: "olivernachermanuel-proyecto.appspot.com",
  messagingSenderId: "721612872490",
  appId: "1:721612872490:web:de05500ee31ae065e21c53",
  measurementId: "G-CTY1J091SS"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//Configuracion de firebase------------------------------------------------------

const ItemListContainer = () => {
  const [Productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategory } = useParams();

  async function testProducts() {
    const productosColRef = collection(db, "productos");
    let snapshotProducts = await getDocs(productosColRef);
    const documents = snapshotProducts.docs;

    const dataProducts = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
    return dataProducts;
  }

  async function getData() {
    setLoading(true);
    let res = await testProducts();
    setProductos(idCategory ? res.filter((prod) => prod.category === idCategory) : res);
    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, [idCategory]);

  return (
    <div>
      {loading ? (
        <h3 className="cargando">Cargando Productos...</h3>
      ) : (
        <div>
          <h4 className="titulo-prods">Nuestros Productos</h4>
          <div className="lista  row col-12">
            <ItemList Prod={Productos} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
