import React from "react";
import './Loader.css'

export default () => (
  <div className="d-flex flex-column justify-content-center align-items-center answer">
    <h3 className="text-center">Подождите...</h3>
    <div className="lds-default mx-auto">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);
