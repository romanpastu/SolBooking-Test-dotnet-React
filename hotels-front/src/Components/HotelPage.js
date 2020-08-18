import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
const HotelPage = () => {

  let { name } = useParams();


  useEffect(() => {
       
  }, [])

  return (
    <div>
      {name}
    </div>
  );
};

export default HotelPage