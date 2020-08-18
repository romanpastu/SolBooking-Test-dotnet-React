import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { loadHotels } from '../redux/actions/actions.js';

const mapStateToProps = (state) => state;

function mapDispatchToProps(dispatch) {
  return {
    loadHotels: async () => {
      dispatch(loadHotels());
    },
  };
}

export function HotelList(props){
  useEffect(() => {
    props.loadHotels();
  }, [])

  if(props.hotels.length != undefined) {
    return <p>Loaded</p>
  }
  return (
    <div>
      <p >Loading...</p>
    </div>
  );
}



export default connect(mapStateToProps, mapDispatchToProps)(HotelList);