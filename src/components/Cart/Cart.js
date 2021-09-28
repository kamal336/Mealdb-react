import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    return (
        <div className="text-start">
            <h3><i class="fas fa-cart-plus text-success"></i> {cart.length}</h3>
            <h4 className="border-bottom text-info">Products List</h4>
            <ol>
                {
                cart.map(product=> <li>{product.strMeal}</li>)
                }
            </ol>
        </div>
    );
};

export default Cart;