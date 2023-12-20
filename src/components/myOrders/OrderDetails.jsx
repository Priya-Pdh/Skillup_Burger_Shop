import React from 'react';
import Cart from '../cart/Cart';

const OrderDetails = () => {
  return (
    <div className='orderDetails'>
      <main>
     
        <h1>ORDER DETAILS</h1>

        <div>
        <h1>Order Status</h1>
        <div>
          <p>Order Status: Delivered</p>
          <p>Placed At: {new Date().toLocaleString()}</p>
          <p>Delivered At: {new Date().toLocaleString()}</p>
        </div>
      </div>
      

      <div>
        <h1>Payment</h1>
        <div>
          <p>Payment Method: COD</p>
          <p>Payment Reference: XXXXXXXX</p>
          <p>Paid At: {new Date().toLocaleString()}</p>
        </div>
      </div>

      <article>
        <h1>ORDERED ITEMS</h1>
        <div>
          <h4>Cheese Burger</h4>
          <p>12 x 230</p>
        </div>
        <div>
          <h4>Veg Cheese Burger</h4>
          <p>10 x 500</p>
        </div>
        <div>
          <h4>Burger Fries</h4>
          <p>10 x 1800</p>
        </div>
        <div>
          <h4>Sub Total</h4>
          <p>£2132</p>
        </div>
        </article>
      </main>
    </div>
  );
};

export default OrderDetails;
