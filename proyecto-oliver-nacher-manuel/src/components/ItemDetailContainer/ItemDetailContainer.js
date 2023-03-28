import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetai";

//Configuracion de firebase------------------------------------------------------
import { initializeApp } from "firebase/app";



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



function ItemDetailContainer() {
  const [prod, setProd] = useState({});
  const { idProd } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const productosColRef = collection(db, "productos");
        const docRef = doc(productosColRef, idProd);
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
          setProd(docSnapshot.data());
        } else {
          console.log("");
        }
      } catch (error) {
        console.log("", error);
      }
    }

    fetchProduct();
  }, [idProd, db]);

  return (
    <>
      <ItemDetail idProd={idProd} db={db} />
    </>
  );
}

export default ItemDetailContainer;