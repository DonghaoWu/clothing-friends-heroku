import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../Components/Checkout-item/Checkout-item.component';
import StripeCheckoutButton from '../../Components/Stripe-button/Stripe-button.component';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import './CheckoutPage.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className='total'>TOTAL: ${total}</div>
        <div className='test-warning'>
            *Please use the following test credit card for payments*
      <br />
            4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
    </div>
        <StripeCheckoutButton price={total} orderItems={cartItems} />
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);