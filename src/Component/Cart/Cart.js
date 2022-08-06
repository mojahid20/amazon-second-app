import React from 'react';

const Cart = ({cart,removeCart}) => {
    let write;
    if(cart.length ===0){
        write = <p>plez add some</p>
    }
    else if(cart.length ===1){
        write= <p>add more</p>
    }
    else{
        write= <p>thens</p>
    }
    return (
        <div>
            <h2>seleted items{cart.length}</h2>
            <div>
                {
                    cart.map(product=> <p>
                        {product.name}
                        <button onClick={()=> removeCart(product)}>-</button>
                    </p>)
                }
            </div>
            {write}
        </div>
    );
};

export default Cart;