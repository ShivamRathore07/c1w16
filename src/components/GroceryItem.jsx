// reusable card component
import "./groceryitem.css"
 
import CartButton from "./CartButton";
const GroceryItem = (props) => {
  return (<> 
  <div  className="box" >
   
     <p>{props.discount}</p> 
     <img src={props.imgURL} alt="" />
     <p>{props.title}</p>
   <div>
     <p>{props.mrp}</p>
     <strick>{props.sellingPrice}</strick>
   </div>
   <CartButton/>
    
  </div>
  </>);
};
export default GroceryItem;
