

import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const { all_product, cartItem, removeFromCart } = useContext(ShopContext);

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />

            {all_product.map((e, index) => {
                const quantity = cartItem[e.id] || 0; 

                if (quantity > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.image} alt={e.name} className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity'>{quantity}</button>
                                <p>${e.new_price * quantity}</p>
                                <img
                                    src={remove_icon}
                                    onClick={() => removeFromCart(e.id)}
                                    alt="remove"
                                    className='cartitems-remove-icon'
                                />
                            </div>
                            <hr />
                        </div>
                    )
                }
                return null;
            })}

        </div>
    )
}

export default CartItems;






