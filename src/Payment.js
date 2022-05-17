import React from "react";
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment-container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        {/* Payment senction delivery address */}
        <div className="payment-section">
          <div className="payment-title">
            <h3>Delivery Adress</h3>
          </div>
          <div className="payment-address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Kampala, UG</p>
          </div>
        </div>

        {/* Payment senction delivery address */}

        <div className="payment-section">
          <div className="payment-title">
            <h3>Review items and delivery</h3>
          </div>

          <div className="payment-items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* Payment senction delivery address */}
        <div className="payment-section">
          <div className="payment-title">
            <h3>Payment method</h3>
          </div>

          <div className="payment-details">
            {/* Stripe magic goes in here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
