// TODO: add and export your own actions
export const FETCH_CARS = "FETCH_CARS";

const API_VAR = "new-garage89";

//fetch cars from api
export function fetchCars(){
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/${API_VAR}/cars`)
    .then(response => response.json());

  return{
    type: FETCH_CARS,
    payload: promise
  }
}
