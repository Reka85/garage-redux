import React, {Component} from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteCar, fetchCar } from "../actions";
import NavBar from "../components/nav_bar";
import GarageDetails from "../components/garage_details";
import PropTypes from "prop-types";

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
        <div className="container index-page">
          <p>Loading...</p>
        </div>
      )
    }
    return(
      <div>
        <NavBar garage={this.props.garage}/>
        <div className="container index-page">
          <div className="row">
            <div className="col-xs-12 col-sm-4">
              <GarageDetails garage={this.props.garage} />
            </div>
            <div className="col-xs-12 col-sm-8">
              <div className="cars-show">
                <h2>{this.props.car.brand} - {this.props.car.model}</h2>
                <h4>Owner: {this.props.car.owner}</h4>
                <h4>Plate number: <span className="plate">{this.props.car.plate}</span></h4>
                <div className="buttons">
                  <Link to="/">
                    <button>Back to cars</button>
                  </Link>
                  <button className="delete-button" onClick={this.handleClick}>Delete car</button>
                </div>
              </div>
            </div>
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

CarsShow.propTypes = {
  garage: PropTypes.string.isRequired,
  car: PropTypes.object,
  fetchCar: PropTypes.func,
  deleteCar: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
