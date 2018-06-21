import React, {Component} from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
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
          {...field.input}
        />
      </div>
    );
  }


  render(){
    return(
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            label="Brand"
            name="brand"
            type="text"
            component={this.renderField}
            validate={[ required ]}
          />
          <Field
            label="Model"
            name="model"
            type="text"
            component={this.renderField}
            validate={[ required ]}
          />
          <Field
            label="Owner"
            name="owner"
            type="text"
            component={this.renderField}
            validate={[ required ]}
          />
          <Field
            label="Plate"
            name="plate"
            type="text"
            component={this.renderField}
            validate={[ required ]}
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


export default reduxForm({ form: 'newCarForm' })(connect(null, {addCar})(CarsNew));
