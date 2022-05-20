import "antd/dist/antd.css";
import Head from "next/head";
import React from "react";
import wrapper from "../store/configureStore";

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
export default wrapper.withRedux(App);
