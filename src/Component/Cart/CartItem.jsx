import React, { useContext } from "react";
import { contextCreate } from "../../../Context/context";

const CartItem = (props) => {
  const { id, name, price, pic, qty } = props;
  const { deleteItem, increase, decrease } = useContext(contextCreate);

  const inc = () => {
    increase(id);
  };

  const dec = () => {
    if (qty > 1) {
      decrease(id);
    }
  };

  return (
    <>
      <div className="cartItem_details">
        <div className="leftSide">
          <img src={pic} alt="pic" />
        </div>
        <div className="rightSide">
          <p>{name}</p>
          <p>₹{price}</p>
          <div className="buttons">
            <button
              className="btn"
              disabled={qty === 1 ? true : false}
              style={{ background: "red" }}
              onClick={dec}
            >
              -
            </button>
            <span>{qty}</span>
            <button
              className="btn"
              style={{ background: "orange" }}
              onClick={inc}
            >
              +
            </button>
            <button className="btn remove" onClick={() => deleteItem(id)}>
              remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
