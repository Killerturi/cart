import { createContext, useEffect, useReducer, useState } from "react";
import { reducer } from "./Reducer";

export const contextCreate = createContext();

const getSaveData = () => {
  let newCartData = localStorage.getItem("saveData");
  if (newCartData == []) {
    return [];
  } else {
    return JSON.parse(newCartData);
  }
};

const initialState = {
  cartData: getSaveData(),
};

export const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addData = (index) => {
    dispatch({ type: "ADD", payload: index });
  };

  const deleteItem = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };
  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  useEffect(() => {
    localStorage.setItem("saveData", JSON.stringify(state.cartData));
  }, [state.cartData]);

  return (
    <contextCreate.Provider
      value={{ ...state, addData, deleteItem, increase, decrease }}
    >
      {props.children}
    </contextCreate.Provider>
  );
};
