import * as React from "react";
import { Link } from "react-router-dom";
import "./styles/Hotel.css";

const Hotel = (props) => {
  const imageString = `/assets/images/${props.image}.jpg`;
  return (
    <div className="list-content-container">
      <div>
      <img className="list-image" src={imageString} />
      </div>
      <div className="list-container-text-container">
        <p>{props.name}</p>
        <small>{props.category}</small>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Hotel;
