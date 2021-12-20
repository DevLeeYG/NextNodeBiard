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

const changeNickname = (data) => {
  return {
    type: "CHANGE_NICKNAME",
    data,
  };
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
  console.log("123123", state.user.isLogin);
  switch (action.type) {
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
