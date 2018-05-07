import ReactDom from 'react-dom';
import React from "react";
import App from "../layouts/App";

module.exports = function (data, idRoot) {
    ReactDom.render(<App data={data}/>, document.querySelector(idRoot));
};
