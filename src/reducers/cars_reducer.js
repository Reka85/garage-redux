import { FETCH_CARS, FETCH_CAR, DELETE_CAR } from "../actions/index";

export default function(state=[], action){
  switch(action.type){
    case FETCH_CARS:
      return action.payload
    case DELETE_CAR:
      return state.filter(car => car.id !== action.payload.id);
    default:
      return state;
  }
}
