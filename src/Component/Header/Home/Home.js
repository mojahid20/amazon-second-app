import React, { useState } from 'react';
import Useproduct from '../../../Hooks/Useproduct';
import Cart from '../../Cart/Cart';
import Product from '../../Product/Product';
import './Home.css';
const Home = () => {
    const [products,setProduct]=Useproduct();
    const [cart,setCart]=useState([]);


    const addtocart=(seleted)=>{
        
       const exsis=cart.find(product=> product.id === seleted.id)
       if(!exsis){
        const neCart=[...cart, seleted];
        setCart(neCart)
       }
    else{
        alert('not alow')
    }

    }
    const removeCart=(seleted)=>{
        const rest=cart.filter(product=> product.id !== seleted.id)
        setCart(rest)

    }

    return (
        <div>
             <div className="container">
                <div className="product-container">
                    
                    {
                        products.map(product=> < Product 
                        product={product}
                        key={product.id}
                        addtocart={addtocart}
                        ></Product>)
                    }
                </div>
                <div className="summary-contaier">
                    <Cart cart={cart}
                    removeCart={removeCart}
                    ></Cart>
                </div>
             </div>
        </div>
    );
};

export default Home;