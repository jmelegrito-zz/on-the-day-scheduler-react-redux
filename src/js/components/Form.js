import React, { Component } from "react";
import { connect } from "react-redux";
import { addPatient } from "../actions/index";
import { addTherapist } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    addPatient: patient => dispatch(addPatient(patient)),
    addTherapist: therapist => dispatch(addTherapist(therapist))
  };
}

class PConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name } = this.state;
    this.props.addPatient({ name });
    this.setState({ name: "" });
  }
  render() {
    const { name } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Name</label>
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

class TConnectedForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: ""
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({ [event.target.id]: event.target.value });
    }
  
    handleSubmit(event) {
      event.preventDefault();
      const { name } = this.state;
      this.props.addTherapist({ name });
      this.setState({ name: "" });
    }
    render() {
      const { name } = this.state;
      return (
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Name</label>
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

export const PForm = connect(
  null,
  mapDispatchToProps
)(PConnectedForm);

export const TForm = connect(
    null,
    mapDispatchToProps
  )(TConnectedForm);

