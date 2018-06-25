import React, {Component} from "react";
import { Link } from "react-router-dom";

class Bar extends Component{
  render(){
    return(
      <div className="bar">
      <Link to="/">
        <i className="fas fa-wrench"></i> {this.props.garage}
      </Link>
      </div>
    )
  }
}

export default Bar;
