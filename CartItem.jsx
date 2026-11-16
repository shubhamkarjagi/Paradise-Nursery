
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";
import { Link } from "react-router-dom";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const changeQuantity = (item, amount) => {
    const newQuantity = item.quantity + amount;

    if (newQuantity > 0) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: newQuantity
        })
      );
    }
  };

  return (
    <div className="cart-page">
      <nav className="navbar">
        <h2>Paradise Nursery</h2>
        <Link to="/">Home</Link>
        <Link to="/plants">Continue Shopping</Link>
      </nav>

      <h1>Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div>
          <h2>Your cart is empty!</h2>
          <Link to="/plants">Continue Shopping</Link>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                width="100"
              />

              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>
                Total: ${(item.price * item.quantity).toFixed(2)}
              </p>

              <button onClick={() => changeQuantity(item, -1)}>
                -
              </button>

              <span> {item.quantity} </span>

              <button onClick={() => changeQuantity(item, 1)}>
                +
              </button>

              <button
                onClick={() => dispatch(removeItem(item.id))}
              >
                Delete
              </button>
            </div>
          ))}

          <h2>Grand Total: ${totalAmount.toFixed(2)}</h2>

          <button onClick={() => alert("Coming Soon!")}>
            Checkout
          </button>

          <Link to="/plants">
            <button>Continue Shopping</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default CartItem;
