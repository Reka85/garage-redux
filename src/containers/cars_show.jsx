import React, {Component} from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteCar, fetchCar } from "../actions";
import Bar from "../components/bar";

class CarsShow extends Component {
  componentWillMount(){
    if(!this.props.car){
      this.props.fetchCar(this.props.match.params.id);
    }
  }

  handleClick = () => {
    this.props.deleteCar(this.props.history, this.props.car);
  }

  render(){
    if(!this.props.car){
      return (
        <div className="container">
          <p>Loading...</p>
        </div>
      )
    }
    return(
      <div>
        <Bar garage={this.props.garage}/>
        <div className="container">
          <div>
            <h2>{this.props.car.brand} - {this.props.car.model}</h2>
            <Link to="/">
              <button>Back to cars</button>
            </Link>
            <p>{this.props.car.owner}</p>
            <p>{this.props.car.plate}</p>
          </div>
          <div>
          </div>
          <div>
            <button className="delete-button" onClick={this.handleClick}>Delete car</button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState, ownProps){
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  return {
    car: reduxState.cars.find((car) => car.id === idFromUrl),
    garage: reduxState.garage
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchCar, deleteCar }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
