
import { useState } from "react";

// keep the add to cart component here
const CartButton = () => {
  const [count,setcount] = useState(0)
  const plusBTn = () => {
   setcount(count + 1)
  }
  const minusBTn = () => {
    if( count > 0){
      setcount(count - 1)
    }
  }
    const addBTn = () => {
    setcount(count+1)
  }
    //manage state of the count 
  return <>
  {/* add to cart button */}
  {/* count with - and  + button */}
  <div>
      {count==0 ? 
      <button onClick={addBTn}>Add To Cart</button>
      :
      <div>
      
      <button onClick={minusBTn}>-</button>
      <p className="count-item">{count}</p>
      <button onClick={plusBTn}>+</button>
  </div> }
  </div>
  </>;
};
export default CartButton