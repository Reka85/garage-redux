import React, {Component} from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteCar } from "../actions";

class CarsShow extends Component {
  handleClick = () => {
    this.props.deleteCar(this.props.history, this.props.car);
  }

  render(){
    if(!this.props.car){
      return <p>Loading...</p>
    }
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
          <button className="delete-button" onClick={this.handleClick}>Delete car</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState, ownProps){
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  return {
    car: reduxState.cars.find((car) => car.id === idFromUrl),
};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ deleteCar }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CarsShow));
