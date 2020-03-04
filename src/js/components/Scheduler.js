import React, { Component } from "react";
import { connect } from "react-redux";
import { addSchedule } from "../actions/index";
import POptions from "./patientList";
import TOptions from "./therapistList";


function mapDispatchToProps(dispatch) {
  return {
    addSchedule: schedule => dispatch(addSchedule(schedule)),
  };
}

class SchedulerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      therapist: "",
      patient: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  handlePatient = (data) => {
    this.setState({ patient: data })
  }

  handleTherapist = (data) => {
    this.setState({ therapist: data })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    event.persist();
    const { name, patient, therapist } = this.state;
    this.props.addSchedule({ name, patient, therapist });
    this.setState({ name: "", patient: "", therapist: "" });
  }
  
  render() {
    const { name } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Patient</label>
              <POptions sendData = {this.handlePatient}/>

        </div>
        <div>
          <label htmlFor="title">Therapist</label>
          <TOptions sendData = {this.handleTherapist}/>
        </div>
        <div>
          <label htmlFor="title">Hours</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">SAVE</button>
      </form>
    );
  }
}



const Scheduler = connect(
    null,
    mapDispatchToProps
  )(SchedulerForm);

export default Scheduler