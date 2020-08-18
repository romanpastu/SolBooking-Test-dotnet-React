import * as React from "react";
import {Link} from "react-router-dom"

const Hotel = (props) => {
  return (
    <React.Fragment>
        {props.name} {props.category} {props.image} {props.description}
    </React.Fragment>
  );
};

export default Hotel;
