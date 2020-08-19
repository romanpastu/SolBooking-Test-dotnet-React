import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { loadHotel } from "../redux/actions/actions.js";
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
    console.log(props.hotel)
    const d = props.hotel;
    return (
      <div className="hotel-row">
        <p>
          {d.name} {d.city} {"/"+d.image} {d.description} {d.features}
        </p>
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
