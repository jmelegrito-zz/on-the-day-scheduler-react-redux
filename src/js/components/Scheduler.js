import React, { Component } from "react";
import { connect } from "react-redux";
import { addSchedule } from "../actions/index";
import { resetSchedule } from "../actions/index";
import POptions from "./patientList";
import TOptions from "./therapistList";
import COptions from "./hourList";


function mapDispatchToProps(dispatch) {
  return {
    addSchedule: schedule => dispatch(addSchedule(schedule)),
    resetSchedule: () => dispatch(resetSchedule())
  };
}

class SchedulerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: "",
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

  handleTime = (data) => {
    this.setState({ hour: data })
  }

  handleTherapist = (data) => {
    this.setState({ therapist: data })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { hour, patient, therapist } = this.state;
    this.props.addSchedule({ hour, patient, therapist });
    // this.setState({ hour: "", patient: "", therapist: "" });
  }
  handleReset = () => {
    this.props.resetSchedule()
  }
  
  render() {
    return (
      <div>
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
          <label htmlFor="title">Timeslot</label>
          <COptions sendData = {this.handleTime} />
        </div>
        <button type="submit">SAVE</button>
      </form>
      <button onClick={this.handleReset}>RESET</button>
      </div>
    );
  }
}



const Scheduler = connect(
    null,
    mapDispatchToProps
  )(SchedulerForm);

export default Scheduler