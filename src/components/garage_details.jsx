import React, {Component} from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class GarageDetails extends Component{
  shouldComponentUpdate(nextProps, nextState){
    return nextProps.garage !== this.props.garage;
  }

  render(){
    return(
      <div className="garage-details">
        <div className="garage-photo">
        </div>
        <h2>{this.props.garage}</h2>
        <Link to="/new">
          <button>Add new cars</button>
        </Link>
      </div>
    )
  }
}

GarageDetails.propTypes = {
  garage: PropTypes.string.isRequired
};

export default GarageDetails;
