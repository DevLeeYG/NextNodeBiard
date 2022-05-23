import "antd/dist/antd.css";
import withReduxSaga from "next-redux-saga";
import Head from "next/head";
import React from "react";
import Wrapper from "../store/configureStore";
const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>

      <Component />
    </>
  );
};
// App.propTypes = {
//   Component: PropTypes.node.isRequired,
// };
export default Wrapper.withRedux(withReduxSaga(App));
