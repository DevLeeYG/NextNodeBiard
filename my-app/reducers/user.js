export const initialState = {
  isLoggingIn: false, //시도중은 -> 로딩창
  isLogin: false,
  isLoggingOut: false, //시도중은 -> 로딩창
  me: null,
  signUpData: {},
  loginData: {}
};

export const logInRequestAction = data => {
  return {
    type: "LOG_IN_REQUEST",
    data
  };
};

//분리선
export const logOutRequestAction = () => {
  return {
    type: "LOG_OUT_REQUEST"
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN_REQUEST":
      return {
        ...state,
        isLoggingIn: true,
        me: action.data
      };
    case "LOG_IN_SUCCESS":
      return {
        ...state,
        isLoggingIn: false,
        isLogin: true,
        me: { ...action.data, nickname: "zerocho" }
      };
    case "LOG_IN_FAILURE":
      return {
        ...state,
        isLoggingIn: false,
        isLogin: false,
        me: action.data
      };
    case "LOG_OUT_REQUEST":
      return {
        ...state,
        isLoggingOut: true
      };
    case "LOG_OUT_SUCCESS":
      return {
        ...state,
        isLoggingOut: false,
        isLogIn: false,
        me: null
      };
    case "LOG_OUT_FAILURE":
      return {
        ...state,
        isLoggingOut: false
      };
    default:
      return state;
  }
};

export default reducer;
