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
        <div className="card cardList">
        <div className="card-header">
      Set Schedule
    </div>
    </div>
      <form onSubmit={this.handleSubmit} className="form-group cardList">
        <div>
              <POptions sendData = {this.handlePatient}/>

        </div>
        <div>
          <TOptions sendData = {this.handleTherapist}/>
        </div>
        <div className="formRow">
          <COptions sendData = {this.handleTime} />
          <button type="submit" className="btn btn-primary">SAVE</button>
        </div>
        
      </form>
      <button onClick={this.handleReset} className="btn btn-danger">CLEAR SCHEDULE LIST</button>
      </div>
    );
  }
}



const Scheduler = connect(
    null,
    mapDispatchToProps
  )(SchedulerForm);

export default Scheduler