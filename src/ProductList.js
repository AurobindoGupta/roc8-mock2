import { useState } from "react";
import data from "./data.json";


const ProductList=()=>{

    const [cartarr,SetCartArr] = useState([]);
    
    const clickHandler=(item)=>{
    
        SetCartArr([...cartarr,item]);
        
    }
    console.log(cartarr);
    localStorage.setItem("vId",JSON.stringify(cartarr));
    return(
        <div>
            <div className="product-card">
               {data.map((item,idx)=>{
                   return(
                       <div className="product-item" key={idx}>
                        <img className="product-list-img" src={item.url}></img>
                            <div className="product-detail">
                                <p>{item.company}</p>
                                <h4 >{item.product}</h4>
                                <span>{item.cost}</span>
                                    <div className="mouse-over">
                                            <button onClick={()=>clickHandler(item)} >Add to cart</button>
                                     </div>
                            </div>
                        
                       </div>
                       
                   )
               })} 
            </div>
        </div>
    )
}
export default ProductList;