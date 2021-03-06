import React, {Component} from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import { addCar } from "../actions";
import NavBar from "../components/nav_bar";
import PropTypes from "prop-types";

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
    const required = (value) => {(value ? undefined : 'Required')}

    const alphaNumeric = (value) => {
      value && /[A-Z0-9]+/g.test(value) ? 'Only alphanumeric characters' : undefined
    }
    return(
      <div>
        <NavBar garage={this.props.garage}/>
        <div className="container">
          <h2>Add a new car</h2>
          <div className="row">
            <div className="col-xs-12 col-sm-8 col-sm-offset-2">
              <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field
                  label="Brand"
                  name="brand"
                  type="text"
                  validate={[required]}
                  component={this.renderField}
                  placeholder="Ford"
                />
                <Field
                  label="Model"
                  name="model"
                  type="text"
                  validate={[required]}
                  component={this.renderField}
                  placeholder="Mustang"
                />
                <Field
                  label="Owner"
                  name="owner"
                  type="text"
                  validate={[required]}
                  component={this.renderField}
                  placeholder="John Smith"
                />
                <Field
                  label="Plate"
                  name="plate"
                  type="text"
                  validate={[required, alphaNumeric]}
                  component={this.renderField}
                  placeholder="123ABC"
                />

                <button type="submit"
                  disabled={this.props.pristine || this.props.submitting}>
                  Add Car
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState){
  return{
    garage: reduxState.garage
  };
}

CarsNew.PropTypes = {
  addCar: PropTypes.func,
  handleSubmit: PropTypes.func,
  garage: PropTypes.string.isRequired
}


export default reduxForm({ form: 'newCarForm' })(connect(mapStateToProps, {addCar})(CarsNew));
