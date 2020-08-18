import axios from 'axios';

 export function loadHotels() {
   return (dispatch) => axios.get('http://localhost:5000/api/hotels').then((res) => {
     dispatch(fetchHotels(res.data));
   });
 }

 export function fetchHotels(hotels) {
   return {
    type: 'LOAD_HOTELS',
     hotels,
   };
 }