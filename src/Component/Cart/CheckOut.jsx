import React from "react";

const CheckOut = (props) => {
  const { cartData } = props;

  const totalAmount = cartData
    .map((val) => val.price * val.qty)
    .reduce((a, b) => {
      return a + b;
    }, 0);

  const totalItem = cartData
    .map((val) => val.qty)
    .reduce((a, b) => {
      return a + b;
    }, 0);

  return (
    <>
      <div className="checkOut_details">
        <h1>
          <u> PRICE DETAILS</u>
        </h1>
        <div className="amount">
          <div className="amount_text">
            <p>ITEM:</p>
            <p>{totalItem}</p>
          </div>
          <div className="amount_text">
            <p>TOTAL AMOUNT:</p>
            <p>₹{totalAmount}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
