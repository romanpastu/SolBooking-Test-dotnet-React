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

 export function loadHotel(name) {
   return (dispatch) => axios.get('http://localhost:5000/api/hotels/'+name).then((res) => {
     dispatch(fetchHotel(res.data));
   }).catch(err => {
     dispatch(fetchHotel(404))
   })
 }

 export function fetchHotel(hotel){
   return{
     type: 'LOAD_HOTEL',
     hotel,
   };
 }