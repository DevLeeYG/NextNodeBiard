import React from "react";
import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, compose, createStore } from "redux";
import reducer from "../reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const configureStore = () => {
  const midllewares = [];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...midllewares))
      : composeWithDevTools(applyMiddleware(...midllewares));

  const store = createStore(reducer, enhancer);

  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.Node_ENV === "development",
});

export default wrapper;
