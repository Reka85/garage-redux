import React, {Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { fetchCars } from "../actions";
import NavBar from "../components/nav_bar";
import Car from "../components/car";
import GarageDetails from "../components/garage_details";
import PropTypes from "prop-types";

class CarsIndex extends Component {
  componentWillMount() {
    this.props.fetchCars();
  }

  renderCars(){
    return this.props.cars.map((car)=>{
      return(
        <Car key={car.id}
          id={car.id}
          brand={car.brand}
          model={car.model}
          owner={car.owner}
          plate={car.plate}
        />
      );
    });
  }

  render(){
    return(
    <div>
      <NavBar garage={this.props.garage}/>
      <div className="index-page container">
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <GarageDetails garage={this.props.garage} />
          </div>
          { this.props.cars.length > 0 &&
            <div className="col-xs-12 col-sm-8">
              <div className="cars-list">
                {this.renderCars()}
              </div>
            </div>
          }
        </div>
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

CarsIndex.propTypes = {
  garage: PropTypes.string.isRequired,
  cars: PropTypes.array,
  fetchCars: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
