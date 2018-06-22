import React, {Component} from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import { addCar } from "../actions";

class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.addCar(values, (car) => {
      this.props.history.push("/");
      return car;
    });
  }

  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          placeholder={field.placeholder}
          {...field.input}
        />
      </div>
    );
  }


  render(){
    return(
      <div>
        <h2>Add a car to {this.props.garage} garage</h2>
        <Link to="/">Back to cars</Link>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            name="brand"
            type="text"
            label="Brand"
            placeholder="Ford"
            component={this.renderField}
          />
          <Field
            label="Model"
            name="model"
            type="text"
            component={this.renderField}
            placeholder="Mustang"
          />
          <Field
            label="Owner"
            name="owner"
            type="text"
            component={this.renderField}
            placeholder="John Smith"
          />
          <Field
            label="Plate"
            name="plate"
            type="text"
            component={this.renderField}
            placeholder="123ABC"
          />

          <button className="btn btn-primary" type="submit"
            disabled={this.props.pristine || this.props.submitting}>
            Add Car
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(reduxState){
  return{
    garage: reduxState.garage
  };
}


export default reduxForm({ form: 'newCarForm' })(connect(mapStateToProps, {addCar})(CarsNew));
