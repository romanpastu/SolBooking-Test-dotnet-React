import * as React from "react";

const Hotel = (props) => {
  return <p>{props.name} {props.category} {props.image} {props.description}</p>
};

export default Hotel