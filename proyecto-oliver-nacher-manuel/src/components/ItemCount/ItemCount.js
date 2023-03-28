import { useState } from "react";
import Button from "../Button/button";
import './itemCount.css'

const ItemCount = ({initial, stock, onAddToCart}) => {

    const [count, setCount] = useState(initial);

    function addToCart(){
      onAddToCart(count)
    }
    const decrease = () => {

        if(count>initial){

          setCount(count -1 );

        }

        

      };

    

      const increase = () => {

        if(count<stock){

          setCount(count + 1);}

 

};   return( <div className="itemCount">

<Button onClick={decrease}>-</Button> 

<span className='contador '> {count} </span>

<Button onClick={increase}>+</Button> 

<Button className="btn-comprar" onClick = {() => onAddToCart(count)}>Comprar</Button>

</div>)

}

export default ItemCount