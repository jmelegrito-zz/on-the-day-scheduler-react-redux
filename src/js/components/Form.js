import React, { Component } from "react";
import { connect } from "react-redux";
import { addPatient } from "../actions/index";
import { addTherapist } from "../actions/index";
import { resetPatient } from "../actions/index";
import { resetTherapist } from "../actions/index";
import SOptions from "./SpecForm";

function mapDispatchToProps(dispatch) {
  return {
    addPatient: patient => dispatch(addPatient(patient)),
    addTherapist: therapist => dispatch(addTherapist(therapist)),
    resetPatient: () => dispatch(resetPatient()),
    resetTherapist: () => dispatch(resetTherapist())
  };
}

class PConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patient: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { patient } = this.state;
    this.props.addPatient({ patient });
    this.setState({ patient: "" });
  }
  handleReset = () => {
    this.props.resetPatient()
  }

  render() {
    const { patient } = this.state;
    return (
      <div>
      <form onSubmit={this.handleSubmit} className="form-group cardList formRow">
        <div>
          <input
            type="text"
            id="patient"
            value={patient}
            onChange={this.handleChange}
            className="form-control formLength"
            placeholder="Enter Patient Name"
            required/>
        </div>
        <button type="submit" className="btn btn-custom">SAVE</button>
      </form>
      <button onClick={this.handleReset} className="btn btn-custom2">CLEAR PATIENT LIST</button>
      </div>
    );
  }
}

class TConnectedForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        therapist: "",
        specialization: ""
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({ [event.target.id]: event.target.value });
    }
    handleSpec = (data) => {
      this.setState({ specialization: data })
    }
  
    handleSubmit(event) {
      event.preventDefault();
      const { therapist, specialization } = this.state;
      this.props.addTherapist({ therapist, specialization });
      // this.setState({ therapist: "" });
    }

    handleReset = () => {
      this.props.resetTherapist()
    }

    render() {
      const { therapist } = this.state;
      return (
        <div>
        <form onSubmit={this.handleSubmit} className="form-group cardList">
          <div>
          <div>
            <input
              type="text"
              id="therapist"
              value={therapist}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Enter Therapist Name"
              required
            />
          </div>
          
          </div>
          <div className="formRow">
              <SOptions sendData = {this.handleSpec}/>
              <button type="submit" className="btn btn-custom">SAVE</button>
        </div>
          
        </form>
        <button onClick={this.handleReset} className="btn btn-custom2">CLEAR THERAPIST LIST</button>
        </div>
      );
    }
  }

export const PForm = connect(
  null,
  mapDispatchToProps
)(PConnectedForm);

export const TForm = connect(
    null,
    mapDispatchToProps
  )(TConnectedForm);

