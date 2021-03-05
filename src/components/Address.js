import React from "react";
import "./Address.scss";
const Address = ({ country, street, number, phone }) => {
  return (
    <div className="address">
      <h2>{country}</h2>
      <span>{number}</span>
      <span>{street}</span>
      <span>{phone}</span>
    </div>
  );
};

export default Address;
