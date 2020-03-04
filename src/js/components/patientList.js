import React from "react";
import store from "../store/index";

class POptions extends React.Component {

  state = this.getCurrentStateFromStore();
  getCurrentStateFromStore() {
    return {
      patients: store.getState().patients
    };
  }

  updateStateFromStore = () => {
    const currentState = this.getCurrentStateFromStore();
    if (this.state !== currentState) {
      this.setState(currentState);
    }
  };

  componentDidMount() {
    this.unsubscribeStore = store.subscribe(this.updateStateFromStore);
  }

  componentWillUnmount() {
    this.unsubscribeStore();
  }


  handleChange = (event) => {
    const pat = event.target.value
    this.props.sendData(pat)
  }



  render() {
    return (
      <select
        defaultValue="Select a Patient"
        onChange={this.handleChange}
        id="patient"
      >
        <option disabled>Select a Patient</option>
        {this.state.patients.map((el, i) => {
          return (
            <option key={i} value={el.patient}>
              {el.patient}
            </option>
          );
        })}
      </select>
    );
  }
}

export default POptions;
