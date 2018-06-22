import React, {Component} from "react";

class Bar extends Component{
  render(){
    return(
      <div className="bar">{this.props.garage}</div>
    )
  }
}

export default Bar;
