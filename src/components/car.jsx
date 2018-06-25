import React, {Component} from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Car extends Component {
  render(){
    return(
      <Link to={`cars/${this.props.id}`}>
        <div  className="car-item">
          <h4>{this.props.brand} - {this.props.model}</h4>
          <p>Owner: {this.props.owner}</p>
          <p>Plate number: <span className="plate">{this.props.plate}</span></p>
        </div>
      </Link>
    )
  }
}

Car.propTypes = {
  brand: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  plate: PropTypes.string.isRequired
};

export default Car;
