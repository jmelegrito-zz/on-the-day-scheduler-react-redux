import React, { Component } from "react";
import { connect } from "react-redux";
import { addPatient } from "../actions/index";
import { addTherapist } from "../actions/index";
import { resetPatient } from "../actions/index";
import SOptions from "./SpecForm";

function mapDispatchToProps(dispatch) {
  return {
    addPatient: patient => dispatch(addPatient(patient)),
    addTherapist: therapist => dispatch(addTherapist(therapist)),
    resetPatient: () => dispatch(resetPatient())
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
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Patient</label>
          <input
            type="text"
            id="patient"
            value={patient}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">SAVE</button>
      </form>
      <button onClick={this.handleReset}>RESET</button>
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
    render() {
      const { therapist } = this.state;
      return (
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Therapist</label>
            <input
              type="text"
              id="therapist"
              value={therapist}
              onChange={this.handleChange}
            />
          </div>
          <div>
          <label htmlFor="title">Specialization</label>
              <SOptions sendData = {this.handleSpec}/>

        </div>
          <button type="submit">SAVE</button>
        </form>
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

