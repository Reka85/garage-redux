import React, {Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { fetchCars } from "../actions";

class CarsIndex extends Component {
  componentWillMount() {
    this.props.fetchCars();
  }

  renderCars(){
    return this.props.cars.map((car)=>{
      return(
        <Link to={`cars/${car.id}`} key={car.id}>
          <div  className="car-item">
            <p>{car.brand} - {car.model}</p>
            <p>Owner: {car.owner}</p>
            <p>Plate number: {car.plate}</p>
          </div>
        </Link>
      );
    });
  }

  render(){
    return(
      <div className="index-page">
        <div className="garage-details">
          <h2>{this.props.garage}</h2>
          <Link className="btn btn-primary" to="/new">
            Add new cars
          </Link>
        </div>
        <div className="cars-list">
          {this.renderCars()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(reduxState){
  return{
    garage: reduxState.garage,
    cars: reduxState.cars
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
