export const initialState = {
  isLogin: false,
  user: null,
  signUpData: {},
  loginData: {},
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,

        ...state,
        isLogin: true,
        user: action.data,
      };
    case "LOG_OUT":
      return {
        ...state,

        ...state,
        isLogin: false,
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;
