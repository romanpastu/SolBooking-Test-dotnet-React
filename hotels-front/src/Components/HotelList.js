import React, { useEffect } from "react";
import { connect } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import { loadHotels } from "../redux/actions/actions.js";
import Hotel from "../Components/Hotel"

import './styles/HotelList.css'

const mapStateToProps = (state) => state;

function mapDispatchToProps(dispatch) {
  return {
    loadHotels: async () => {
      dispatch(loadHotels());
    },
  };
}

export function HotelList(props) {
  useEffect(() => {
    props.loadHotels();
  }, []);

  if (props.hotels.length != undefined) {
    const data = props.hotels;
    const listItems = data.map((d) => (
      <div className="hotel-row">
        <Hotel name={d.name} category={d.category} image={d.image} description={d.description}/>
      </div>
    ));

    return <div className="hotel-list">{listItems}</div>;
  }
  return (
    <div>
      <p>Loading...</p>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(HotelList);
