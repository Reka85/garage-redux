import React, {Component} from "react";
import { Link } from "react-router-dom";

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

export default GarageDetails;
