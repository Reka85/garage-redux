import React, {Component} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchCar } from "../actions";
import { deleteCar } from "../actions";

class CarsShow extends Component {
  handleClick = (id) => {
    this.props.deleteCar(id, (car) => {
      this.props.history.push("/");
    });
  }

  componentWillMount() {
    if(!this.props.car){
      this.props.fetchCar(this.props.match.params.id);
    }
  }
  render(){
    return(
      <div>
        <div>
          <h2>{this.props.car.brand} - {this.props.car.model}</h2>
          <p>{this.props.car.owner}</p>
          <p>{this.props.car.plate}</p>
        </div>
        <div>
          <Link to="/">
            Back to all cars
          </Link>
        </div>
        <div>
          <button onClick={this.handleClick}>Delete car</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState, ownProps){
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  const car = reduxState.cars.find(car => car.id === idFromUrl);
  return { car };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchCar, deleteCar }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
