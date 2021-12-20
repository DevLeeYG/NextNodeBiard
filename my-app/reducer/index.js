import { HYDRATE } from "next-redux-wrapper";
import React from "react";

const initialState = {
  user: {
    isLogin: false,
    user: null,
    signUpData: {},
    loginData: {},
  },
  post: {
    mainPosts: [],
  },
};

export const login = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};
export const logout = () => {
  return {
    type: "LOG_OUT",
  };
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case "LOG_IN":
      return {
        ...state,
        user: {
          ...state.user,
          isLogin: true,
          user: action.data,
        },
      };
    case "LOG_OUT":
      return {
        ...state,
        user: {
          ...state.user,
          isLogin: false,
          user: null,
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
