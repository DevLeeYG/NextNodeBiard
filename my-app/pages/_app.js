import React from "react";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
import Head from "next/head";
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
App.PropTypes = {
  Component: PropTypes.node.isRequired,
};
export default App;
