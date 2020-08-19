import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { loadHotel } from "../redux/actions/actions.js";
import "./styles/HotelPage.css";
var _ = require("lodash/core");



const mapStateToProps = (state) => state;

function mapDispatchToProps(dispatch) {
  return {
    loadHotel: async (el) => {
      dispatch(loadHotel(el));
    },
  };
}

const HotelPage = (props) => {
  let { name } = useParams();

  useEffect(() => {
    props.loadHotel(name);
  }, []);

  if (_.isEmpty(props.hotel) == false) {
    const d = props.hotel;
    const imageString = `/assets/images/${d.image}.jpg`;
    return (
      <div className="hotel-page-container">
        <div>
        <img className="hotel-page-image" src={imageString} />
        <div className="props-container">
          <p>{d.name}</p>
          <p>{d.city}</p>
          <p>{d.description}</p>
          <p>{d.features}</p>
        </div>
        </div>
      </div>
    );
  }
  if(JSON.stringify(props.hotel) == "404"){
    props.history.push("/");
  }
  return (
    <div>
      <p>Loading...</p>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HotelPage);
