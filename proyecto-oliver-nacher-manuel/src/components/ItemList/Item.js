import React from "react";
import { Link } from "react-router-dom";

const Item = ({prod}) =>{
return(
    <div className="card ">
        
   <div><img src={prod.img} className="imgProd"/></div> 
   <div className="title">
    <h4 className="nombreProducto">{prod.title}</h4>
    </div>

   <div className="containerDescription">
   <Link to={`/detalle/${prod.id}`}>
    <button type="button" className="btn btn-secondary btn-sm col-6 mx-5">Ver Más</button>
    </Link>
   </div>
    </div>
)

}
export default Item