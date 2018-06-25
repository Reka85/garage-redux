import React, {Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { fetchCars } from "../actions";
import Bar from "../components/bar";
import GarageDetails from "../components/garage_details";

class CarsIndex extends Component {
  componentWillMount() {
    this.props.fetchCars();
  }

  renderCars(){
    return this.props.cars.map((car)=>{
      return(
        <Link to={`cars/${car.id}`} key={car.id}>
          <div  className="car-item">
            <h4>{car.brand} - {car.model}</h4>
            <p>Owner: {car.owner}</p>
            <p>Plate number: <span className="plate">{car.plate}</span></p>
          </div>
        </Link>
      );
    });
  }

  render(){
    return(
    <div>
      <Bar garage={this.props.garage}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
