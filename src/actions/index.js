// TODO: add and export your own actions
export const FETCH_CARS = "FETCH_CARS";

//fetch cars from local data
export function fetchCars(cars){
  return{
    type: FETCH_CARS,
    payload: cars
  }
}
