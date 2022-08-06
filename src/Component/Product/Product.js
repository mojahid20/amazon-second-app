import React from 'react';
import './product.css';
const Product = ({addtocart,product}) => {
    const{img,name}=product;
    
    return (
        <div>
            <div className="imge">
                <img src={img} alt="" />
                <h5>name: {name}</h5>
            </div>
            <button onClick={()=>addtocart(product)}>Buy Now</button>
            
        </div>
    );
};

export default Product;