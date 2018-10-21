import React, { Component } from "react";
import { withFormik } from "formik";
import { connect } from "react-redux";
import * as Yup from "yup";
import Select from "react-select";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      values,
      touched,
      errors,
      dirty,
      isSubmitting,
      handleChange,
      setFieldValue,
      handleBlur,
      handleSubmit,
      handleReset
    } = this.props;

    return (
      <div>
        <form className="p-5 width-50-center" onSubmit={handleSubmit}>
          <h1>Profile</h1>

          <div className="form-group">
          Name
            <input
              name="name"
              type="text"
              value={values.name}
              className={`form-control ${errors.name &&
                touched.name &&
                "is-invalid"}`}
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={"Name"}
            />
            {errors.name &&
              touched.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}
          </div>
          <div className="form-group">
            <input
              name="email"
              type="text"
              className={`form-control ${errors.email &&
                touched.email &&
                "is-invalid"}`}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={"Email"}
            />
            {errors.email &&
              touched.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
          </div>

          <div className="form-group">
            <input
              name="phone"
              type="number"
              className={`form-control ${errors.phone &&
                touched.phone &&
                "is-invalid"}`}
              value={values.phone}
              onChange={handleChange}
              placeholder={"phone"}
              onBlur={handleBlur}
            />
            {errors.phone &&
              touched.phone && (
                <div className="invalid-feedback">{errors.phone}</div>
              )}
          </div>

          <div className="form-group">
            <input
              name="dob"
              type="date"
              className={`form-control ${errors.dob &&
                touched.dob &&
                "is-invalid"}`}
              value={values.dob}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={"Date of birth"}
            />
            {errors.dob &&
              touched.dob && (
                <div className="invalid-feedback">{errors.dob}</div>
              )}
          </div>

          <div className="form-group">
            <Select
              name="gender"
              placeholder={"Gender"}
              options={[
                { value: "male", label: "Male" },
                { value: "female", label: "Female" }
              ]}
              value={values.gender}
              onChange={event => {
                setFieldValue("gender", event.value);
              }}
            />
          </div>

          <button
            type="submit"
            className="btn btn-outline-primary"
            // disabled={isSubmitting}
          >
            {/* {isSubmitting ? "WAIT PLIZ" : "CLICK ME"} */}
            Edit
          </button>
        </form>
      </div>
    );
  }
}

const EnhancedForm = withFormik({
  mapPropsToValues: props => {
    return { ...props.user };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("name is required!"),
    address: Yup.string().required("address is required"),
    phone: Yup.number().required("Please enter the phone"),
    seats: Yup.string().required("Please enter your seats")
  }),

  handleSubmit: (values, { props: { addCinema }, setSubmitting }) => {
    // addCinema(formData);
  }
})(Profile);

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //   addCinema: data => dispatch(addCinema(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EnhancedForm);
