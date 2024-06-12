import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { FaOpencart } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiAlertOctagon } from "react-icons/fi";
import { Text } from "../exportFiles";
import "./Cart.css";

function Cart({ cart, setCart, handleChange }) {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  useEffect(() => {
    handlePrice();
  });

  const confirmRemove = (id) => {
    if (window.confirm("Are you sure you want to remove this item?")) {
      handleRemove(id);
    }
  };

  return (
    <>
      <div className="cart-page">
        <div className="messagecart">
          <h1>
            Your Cart
            <FaOpencart className="icon" />
          </h1>
          <h2>Proceed to your next adventure!</h2>
        </div>
        <article className="cart">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div className="cartbox" key={item.id}>
                <div className="cartimg">
                  <img src={item.img} alt={item.title} />
                  <p>{item.title}</p>
                </div>

                <div className="cartbuttons">
                  <button
                    className="cartbutton"
                    onClick={() => handleChange(item, +1)}
                  >
                    +
                  </button>
                  <button className="cartbutton">{item.amount}</button>
                  <button
                    className="cartbutton"
                    onClick={() => handleChange(item, -1)}
                  >
                    -
                  </button>
                </div>

                <div className="cartprice-remove">
                  <span className="cartprice">{item.price} €</span>
                  <button
                    className="cartremove"
                    onClick={() => confirmRemove(item.id)}
                  >
                    <RiDeleteBin5Line />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="cartp">
              No items added yet! Go and explore your options <FiAlertOctagon />
            </p>
          )}

          <div className="cart-total">
            <span>Total price:</span>
            <span> {price} € </span>
          </div>
          <div className="checkout">
            <Button
              variant="succes"
              type="submit"
              className="checkout-button mt-3"
            >
              Proceed to checkout <FaOpencart />
            </Button>
          </div>
        </article>
      </div>
      <Text />
    </>
  );
}

export default Cart;
