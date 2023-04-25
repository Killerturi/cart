import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { contextCreate } from "../../../Context/context";
import { data } from "../../dummyData/dummyData";
import "./home.css";

const Home = () => {
  const { addData } = useContext(contextCreate);
  const history = useNavigate();

  const add = (index) => {
    addData(data[index]);
    history("/cart");
  };

  return (
    <>
      <div className="container">
        {data.map((val, index) => {
          const { id, name, price, pic } = val;
          return (
            <div className="item" key={id}>
              <p>{name.slice(0, 40)}.....</p>
              <p className="image">
                <img src={pic} alt="pics" />
              </p>
              <p>₹{price}</p>
              <button onClick={() => add(index)}>add to cart</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
