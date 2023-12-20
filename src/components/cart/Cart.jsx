import React, { useState } from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const [items, setItems] = useState([
    { id: 1, title: "Cheese Burger", img: burger1, amount: 0 },
    { id: 2, title: "Veg Cheese Burger", img: burger2, amount: 0 },
    { id: 3, title: "Cheese Burger with French Fries", img: burger3, amount: 0 },
  ]);

  const increment = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, amount: item.amount + 1 } : item
      )
    );
  };

  const decrement = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, amount: Math.max(0, item.amount - 1) } : item
      )
    );
  };

  return (
    <section className="cart">
      <main>
        {items.map((item) => (
          <CartItem
            key={item.id}
            title={item.title}
            img={item.img}
            value={item.amount}
            increment={() => increment(item.id)}
            decrement={() => decrement(item.id)}
          />
        ))}

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{items.reduce((total, item) => total + item.amount, 0)}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{items.reduce((total, item) => total + item.amount * 0.18, 0)}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{200}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>
              ₹{items.reduce((total, item) => total + item.amount * (1 + 0.18), 200)}
            </p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
