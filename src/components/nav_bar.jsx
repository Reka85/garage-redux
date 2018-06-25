import React, {Component} from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class NavBar extends Component{
  shouldComponentUpdate(nextProps, nextState){
    return nextProps.garage !== this.props.garage;
  }

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

NavBar.propTypes = {
  garage: PropTypes.string.isRequired
};

export default NavBar;
