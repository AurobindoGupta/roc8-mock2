
import { useState } from 'react';
import data from './data.json'
const Cart=()=>{
    let a = JSON.parse(localStorage.getItem('vId'));
    console.log(a);
    return(
        <div>
          {a.map((item,idx) =>{
             return (
                <div className="product-item" key={idx}>
                        <img className="product-list-img" src={item.url}></img>
                            <div className="product-detail">
                                <p>{item.company}</p>
                                <h4 >{item.product}</h4>
                                <span>{item.cost}</span>
                                    <div className="mouse-over">
                                            <button>Remove</button>
                                            <button>save for later</button>
                                     </div>
                            </div>
                        
                       </div>
              )
          })}
        </div>
    )
}
export default Cart;