// TODO: add and export your own actions
export const FETCH_CARS = "FETCH_CARS";
export const FETCH_CAR = "FETCH_CAR";
export const ADD_CAR = "ADD_CAR";
export const DELETE_CAR = "DELETE_CAR";

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

//fetch car from the api
export function fetchCar(id){
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/cars/${id}`)
    .then(response => response.json());

  return{
    type: FETCH_CAR,
    payload: promise
  }
}

//add a car
export function addCar(body, callback){
  const request = fetch(`https://wagon-garage-api.herokuapp.com/${API_VAR}/cars`, {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body)
  }).then(response => response.json())
    .then(callback);

  return{
    type: ADD_CAR,
    payload: request
  }
}

// delete a car
export function deleteCar(id, callback){
  const request = fetch(`https://wagon-garage-api.herokuapp.com/cars/${id}`,{
    method: "DELETE"
  }).then(response => response.json())
    .then(callback);

  return{
    type: DELETE_CAR,
    payload: id
  }
}
